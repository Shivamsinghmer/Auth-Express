# User Details App

A simple **Express.js** application where users can submit their details.  
The submitted data is:

- 🔒 Passwords are encrypted using **bcrypt**
- 🌐 Stored securely in a **MongoDB** database
- 🚫 Passwords are **never stored in plain text**

---

## Features

- ➕ Add new user details (name, email, password, etc.)
- 🔒 Passwords are hashed with **bcrypt** before saving
- 🌐 Save all user data securely in MongoDB
- 🚫 Passwords are **hidden** and **not returned** in responses

---

## Tech Stack

- **Backend**: Express.js (Node.js)
- **Database**: MongoDB (using Mongoose)
- **Encryption**: bcrypt.js

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/user-details-app.git
cd user-details-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root folder and add:

```bash
MONGODB_URI=your-mongodb-connection-string
PORT=3000
```

Replace `your-mongodb-connection-string` with your actual MongoDB URI.

### 4. Start the server

```bash
npm start
```

The server will start on:

```
http://localhost:3000/
```

---

## API Endpoints

| Method | Endpoint        | Description                  |
|:------:|:----------------|:------------------------------|
| POST   | `/users`         | Add a new user                |
| GET    | `/users`         | Get all user details          |

---

## Example Request and Response

### Add a New User

- **POST** `/users`
- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

- **Response:**

```json
{
  "message": "User added successfully",
  "user": {
    "id": "609dcd4b9f1b4c0015e1f0a3",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```

(Note: The password will **not be included** in the response for security reasons.)

---

## Notes

- Passwords are hashed using **bcrypt** before saving to MongoDB.
- Plain text passwords are **never stored** or exposed.
- This project is perfect for learning **Express.js**, **MongoDB**, and **user authentication basics**.

---

## Author

Made with ❤️ by Shivam Singh Mer

---

## License

This project is licensed under the MIT License.
