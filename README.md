💸 SpendWise

A modern and responsive expense tracking application built with React, TypeScript, and Tailwind CSS.

SpendWise helps users track daily expenses, organize spending by category, visualize spending habits through charts, and manage transactions with a clean and intuitive interface.

⸻

✨ Features

📊 Dashboard Overview

- View total spending at a glance
- Category summary cards
- Real-time updates when expenses are added, edited, or deleted

💰 Expense Management

- Add new expenses
- Edit existing expenses
- Delete expenses
- Automatic state updates using React Context

🔍 Search & Filter

- Search expenses by title
- Filter expenses by category
- Combine search and category filters simultaneously

📈 Spending Analytics

- Interactive category distribution chart
- Percentage breakdown for:
  - Food
  - Transportation
  - Entertainment
  - Shopping
  - Other
- Total spending displayed directly in the chart

🌙 Dark Mode

- Toggle between light and dark themes
- Smooth theme transitions

💾 Persistent Storage

- Expenses are stored in Local Storage
- Data remains available after page refreshes

📱 Responsive Design

- Mobile-first layout
- Modern card-based UI
- Clean dashboard experience

⸻

🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Context API
- Local Storage
- Font Awesome Icons
- Vite

⸻

📂 Project Structure

src/
├── components/
│ ├── Categories.tsx
│ ├── ExpensesContainer.tsx
│ ├── InfoCard.tsx
│ ├── NavBar.tsx
│ └── SingleExpense.tsx
│
├── pages/
│ ├── Home.tsx
│ ├── AddExpense.tsx
│ └── EditExpense.tsx
│
├── context/
│ └── ExpenseContext.tsx
│
├── types/
│ ├── Expense.ts
│ └── ExpenseForm.ts
│
├── App.tsx
└── main.tsx

⸻

🧠 What I Learned

This project was built as part of my React and TypeScript learning journey. Key concepts practiced include:

- React Components
- Props
- State Management with useState
- Side Effects with useEffect
- Context API
- Controlled Forms
- TypeScript Types & Interfaces
- Conditional Rendering
- Array Methods (map, filter, reduce)
- Local Storage Persistence
- SVG-based Donut Charts
- Tailwind CSS Styling
- Dark Mode Implementation

⸻

🚀 Future Improvements

- Expense sorting
- Monthly spending reports
- Budget tracking
- Income tracking
- Export data to CSV
- Authentication
- Cloud database integration
- Animated charts
- PWA support

⸻

📸 Preview

SpendWise features a modern dashboard with:

- Summary cards
- Search and category filters
- Expense management
- Interactive spending chart
- Dark mode support

⸻

👨‍💻 Author

Nyi Wint Htal

Computer Science Student passionate about web development, UI design, and building practical applications with React and TypeScript.

⸻

📄 License

This project is open-source and available under the MIT License.
