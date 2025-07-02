
#  Zerodha Stock Trading Platform (Full Stack)

A professional stock trading simulation platform inspired by Zerodha, built using the **MERN stack**. The application includes a modern login/signup system and a dynamic dashboard for real-time trading actions. It uses a scalable MVC architecture with two separate React apps (Frontend and Dashboard) and a Node.js backend.

---

##  Live Demo

 [Live Site](https://zerodha-frotend.onrender.com/)

---

##  User Flow

1. **Landing Page** → Homepage styled like Zerodha
2. **Login/Signup** → Secure authentication system using sessions
3. **User Redirected** → To Trading Dashboard after successful login
4. **Dashboard Access** → Buy/Sell stocks, view Orders, Holdings & Positions

---

##  Features Overview

###  User Interface (Frontend React App)
- Zerodha-style homepage with login & signup
- Responsive forms with validations
- Session-based login with secure cookies
- Redirect to dashboard after login/signup

###  Dashboard Interface (Second React App)
- Real-time stock Buy/Sell modals
- View Holdings, Orders, Positions
- Margin calculation on the fly
- Wallet balance integration
- Draggable trading panels
- Future-ready for charts and analytics

###  Authentication
- Session-based auth with `express-session`
- Secure cookies (`httpOnly`, `sameSite`, `secure`)
- Middleware protected routes (backend)
- Role-ready design (admin/user support)

---

##  Tech Stack

###  Frontend & Dashboard (React)
- React 18+, React Router DOM
- HTML, JSX, CSS, Bootstrap 5
- Axios for backend communication
- Responsive for all screen sizes

###  Backend (Node.js + Express)
- MVC architecture with clean separation
- MongoDB with Mongoose
- REST APIs with Express Router
- Secure session management
- Models: User, Holdings, Orders

---

##  Backend Features (MVC)

- `POST /auth/login` – Session login
- `POST /auth/signup` – Register new user
- `GET /funds/balance` – Fetch wallet balance
- `POST /orders/newOrder` – Place buy/sell order
- `GET /orders` – Order history
- `GET /holdings` – Portfolio details
- `GET /positions` – Real-time position info

---

##  API Example (Frontend)

```js
axios.post(`${VITE_BACKEND_URL}/orders/newOrder`, {
  name, qty, price, mode
}, { withCredentials: true });
```

---

##  Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/rohitmhetre02/Zerodha-Stock-Trading-Platform.git
cd Zerodha-Stock-Trading-Platform
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` in `/backend`:

```
PORT=8080
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_secret_key
```

Start server:

```bash
node index.js
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Dashboard Setup

```bash
cd ../dashboard
npm install
npm run dev
```

---

## Environment Variables

**Frontend & Dashboard:**
```
VITE_BACKEND_URL=http://localhost:8080
```

**Backend:**
```
MONGO_URI=your_connection_string
SESSION_SECRET=your_secret
```

---
