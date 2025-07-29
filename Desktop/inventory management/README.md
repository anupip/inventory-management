# 📦 Fi Money - Inventory Management System

A modern, full-stack inventory management application built with **React** and **Node.js**, featuring **JWT authentication**, **product management**, and **real-time analytics**.

---

## 🚀 Features

### Core Functionality

- 🔐 **User Authentication**: Secure registration and login with JWT tokens
- 📋 **Product Management**: Add, update, search, and manage inventory items
- 📊 **Inventory Tracking**: Real-time stock level monitoring with low-stock alerts
- 📈 **Analytics Dashboard**: Total products, inventory value, and stock status
- 🔎 **Search & Pagination**: Efficient product browsing
- 📱 **Responsive Design**: Mobile-friendly interface (Tailwind CSS)

### Technical Highlights

- ✅ **RESTful API** with Swagger/OpenAPI documentation
- 🛢️ **MongoDB** with Mongoose ODM
- 🔐 **JWT Authentication** + `bcrypt` hashing
- 🚀 **Real-time Data Refresh**
- 🧪 **Server-side Validation & Error Handling**

---

## 🛠️ Tech Stack

### Frontend

- React 19, React Router DOM
- Tailwind CSS 4, Headless UI, Heroicons
- Axios, Vite

### Backend

- Node.js, Express.js 5
- MongoDB, Mongoose
- JWT, bcrypt
- Swagger, CORS

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### 🔧 Backend Setup

```bash
cd src
npm install
```

---

### ✨ Create a `.env` file in the `Backend` directory
```env
# .env (DO NOT COMMIT THIS FILE)

PORT=8080
JWT_SECRET=supersecretkey123
MONGODB_URI=mongodb+srv://anurag2201230ec:anupip@cluster0.hcmhlrg.mongodb.net/inventorydb?retryWrites=true&w=majority&appName=Cluster0

```

> ⚠️ **Note:** Replace `DATABASE_URL` and `ACCESS_TOKEN_SECRET` with your actual MongoDB credentials and a secure JWT secret key.

---

### ▶️ Start the Backend Server

```bash
npm run dev     # development
# or
npm start       # production
```

- API runs at: [http://localhost:8080](http://localhost:8080)  


---

## 💻 Frontend (Static)

Open directly in the browser:

- **Login/Register:** [http://localhost:8080/public/index.html](http://localhost:8080/public/index.html)
- **Dashboard (Product Operations):** [http://localhost:8080/public/cred.html](http://localhost:8080/public/cred.html)

---

## 🔐 API Endpoints

### 🛡️ Auth

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| POST   | `/login/register` | Register new user   |
| POST   | `/login`          | Login and get token |

---

## 📦 Product API (Requires Bearer Token)

| Method | Endpoint                    | Description             |
|--------|-----------------------------|-------------------------|
| GET    | `/products`                 | Get paginated products  |
| POST   | `/products`                 | Add new product         |
| PUT    | `/products/:id/quantity`    | Update product quantity |

---

## 📦 Product API (Requires Bearer Token)

| Method | Endpoint                    | Description             |
|--------|-----------------------------|-------------------------|
| GET    | `/products`                 | Get paginated products  |
| POST   | `/products`                 | Add new product         |
| PUT    | `/products/:id/quantity`    | Update product quantity |

---



### 📁 Project Structure

```bash
inventory-management/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── product.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── product.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   └── app.js
├── public/
│   ├── index.html        # Login/Register UI
│   ├── cred.html         # Dashboard UI
│   └── script.js         # JS Logic
├── .env
├── .gitignore
├── package.json
└── README.md
```
## 🧪 Testing

You can test the app using:

- ✅ Postman / Thunder Client  
- ✅ Static frontend UI under `/public`  
- ✅ cURL or Swagger (future)

### ✅ Test Scenarios

- ✅ Register/Login  
- ✅ Add product  
- ✅ Get product list  
- ✅ Update product quantity

---

## 🚀 Deployment

### 🔧 Backend Deployment

- Set production environment variables  
- Ensure MongoDB connection string is configured  
- Deploy to your preferred platform (Heroku, AWS, DigitalOcean, etc.)

### 💻 Frontend Deployment

Build the production bundle:

```bash
cd public
npm run build
```

## 🌍 Environment Considerations

- Use strong JWT secrets in production  
- Configure CORS properly for your domain  
- Use HTTPS in production  
- Set up proper MongoDB indexes for performance

---

## 🤝 Contributing

Contributions are welcome!  
Please feel free to submit a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.

### 📌 Development Guidelines

- Follow the existing code style  
- Add tests for new features  
- Update documentation as needed  
- Ensure all tests pass before submitting

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👤 Author

**Anurag Pipriya**


