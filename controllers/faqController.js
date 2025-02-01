const FAQ = require("../models/FAQ");
const translate = require("@google-cloud/translate").v2;
const redis = require("redis");

const redisClient = redis.createClient();
redisClient.connect();

const translator = new translate.Translate();

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    let cachedFAQs = await redisClient.get(`faqs_${lang}`);

    if (cachedFAQs) {
      return res.json(JSON.parse(cachedFAQs));
    }

    const faqs = await FAQ.find();
    let translatedFAQs = faqs.map((faq) => ({
      question: faq.translations[lang] || faq.question,
      answer: faq.answer,
    }));

    await redisClient.setEx(`faqs_${lang}`, 3600, JSON.stringify(translatedFAQs));
    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    let translations = {};
    const languages = ["hi", "bn", "fr"];

    for (const lang of languages) {
      const [translation] = await translator.translate(question, lang);
      translations[lang] = translation;
    }

    const faq = new FAQ({ question, answer, translations });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
