💸 Expense Splitter
A sleek, MERN-stack inspired web application designed to help friends and groups track shared expenses and calculate settlements with a modern, high-contrast Neon Dark UI.

✨ Features
User Management: Add users with their names and email addresses.

Group Creation: Organize users into specific groups (e.g., "Goa Trip", "Roommates").

Expense Tracking: Log expenses, select who paid, and choose exactly who is splitting the bill.

Smart Settlements: Automatically calculates "who owes whom" to settle all debts in the most efficient way.

Cyberpunk Aesthetic: High-contrast dark theme with neon purple and cyan accents.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Custom Neon Dark Theme), Vanilla JavaScript (ES6+).

Backend: Node.js, Express.js.

Database: MongoDB (via Mongoose ODM).

Architecture: MVC (Models, Views, Controllers) for clean and scalable code.

🚀 Getting Started
1. Prerequisites
Node.js installed on your machine.

MongoDB (Local or Atlas) connection string.

2. Installation
Clone the repository:

Bash
git clone https://github.com/Ragavan762006/Expense_Splitter.git
cd Expense_Splitter
Install dependencies:

Bash
npm install
Set up your environment variables:
Create a .env file in the root directory and add:

Plaintext
PORT=3000
MONGO_URI=your_mongodb_connection_string
3. Running the App
Start the server:

Bash
npm start
Open your browser and navigate to http://localhost:3000.

📁 Project Structure
Plaintext
├── models/         # Mongoose Schemas (User, Group, Expense)
├── routes/         # Express API Endpoints
├── services/       # Business logic (Balance calculations)
├── public/         # Frontend (HTML, CSS, JS)
├── server.js       # Entry point for the server
└── .gitignore      # Ignored files (node_modules, .env)
