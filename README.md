# FAQ Backend

This is the backend service for the FAQ system, built using **Node.js** and **Express.js**, with **MongoDB** for data storage and **Redis** for caching.

## **Features**
- REST API for managing FAQs
- Multilingual support using **Google Translate API**
- WYSIWYG editor support (for storing rich-text answers)
- **MongoDB** as the database
- **Redis caching** for performance improvement
- Admin panel for managing FAQs
- **Unit testing** with Mocha/Chai

---

## **📌 Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/anuj-0108/faq-backend.git
cd faq-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root folder and add:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/faqs
REDIS_URL=redis://localhost:6379
GOOGLE_APPLICATION_CREDENTIALS=./google-translate-key.json
```

### **4️⃣ Start the Backend Server**
```sh
node server.js
```
Or use **nodemon** for automatic restarts:
```sh
npm run dev
```

---

## **📡 API Endpoints**

### **1️⃣ Get All FAQs**
```http
GET /api/faqs?lang=en
```
_Response:_
```json
[
  {
    "question": "What is this system?",
    "answer": "This is a multilingual FAQ system."
  }
]
```

### **2️⃣ Add a New FAQ**
```http
POST /api/faqs
```
_Body:_
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime."
}
```
_Response:_
```json
{
  "message": "FAQ added successfully!"
}
```

### **3️⃣ Get FAQs in a Specific Language**
```http
GET /api/faqs?lang=hi
```

---

## **🧪 Running Tests**
To run unit tests, use:
```sh
npm test
```

---

## **🛠 Technologies Used**
- **Node.js** + **Express.js** (Backend Framework)
- **MongoDB** (Database)
- **Redis** (Caching)
- **Google Translate API** (Multilingual Support)
- **Mocha/Chai** (Testing Framework)

---

## **📜 License**
This project is **MIT Licensed**. Feel free to use and modify.

---

## **🔗 Contribution**
1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature-name`)
3. **Commit Changes** (`git commit -m "feat: Added new feature"`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Open a Pull Request** 🚀

For any issues, please open an **Issue** on GitHub.
