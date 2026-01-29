# Cryptocurrency Portfolio Dashboard

A modern, responsive cryptocurrency portfolio management dashboard built with React and Chakra UI. This application provides a comprehensive interface for tracking portfolio value, viewing transactions, and managing cryptocurrency assets.

## 🚀 Features

### Dashboard
- **Portfolio Overview**: View total portfolio value and wallet balances (BTC and PKR)
- **Price Charts**: Interactive price charts with time period filters (1H, 1D, 1W, 1M)
- **Recent Transactions**: Quick view of recent transaction history
- **Quick Actions**: Deposit and withdraw buttons for easy access
- **Info Cards**: Educational cards about loans and account services

### Transactions
- **Transaction History**: Comprehensive table view of all transactions
- **Filtering**: Filter transactions by type (All, Deposit, Withdraw, Trade)
- **Export**: Export transaction data to CSV format
- **Status Tracking**: Visual status indicators (Pending, Processing, Completed, Cancelled)

### Support
- **Contact Form**: Reach out to support with a structured contact form
- **Live Chat**: Access to live chat support for immediate assistance
- **Meeting Booking**: Schedule meetings directly from the interface

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and development server
- **Chakra UI 3.31.0** - Component library for styling
- **React Router DOM 7.13.0** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **Emotion** - CSS-in-JS library (required by Chakra UI)

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/          # Dashboard-related components
│   │   ├── Dashboard.jsx
│   │   ├── InfoCard.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── PriceSection.jsx
│   │   └── Transactions.jsx
│   ├── layout/            # Layout components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── transaction/       # Transaction-related components
│   │   ├── Transaction.jsx
│   │   └── TransactionTable.jsx
│   ├── support/           # Support page components
│   │   └── Support.jsx
│   └── ui/                # Reusable UI components
│       ├── color-mode.jsx
│       ├── menu.jsx
│       ├── provider.jsx
│       ├── toaster.jsx
│       └── tooltip.jsx
├── assets/
│   └── images/            # Image assets
│       ├── Graph.svg
│       ├── Shapes1.png
│       └── Shapes2.svg
├── App.jsx                # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rehansajid2130/Cryptocurrency-Portfolio-Dashboard.git
cd Cryptocurrency-Portfolio-Dashboard
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## 🎨 Features Overview

### Navigation
- **Sidebar Navigation**: Easy navigation between Dashboard, Transactions, and Support
- **Active Route Highlighting**: Visual indication of the current page
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Dashboard Components
- **PortfolioSection**: Displays total portfolio value and wallet balances
- **PriceSection**: Shows current price with buy/sell actions and price charts
- **Transactions**: Recent transaction list with quick view
- **InfoCard**: Promotional and informational cards

### Transaction Management
- **TransactionTable**: Detailed table with transaction ID, date/time, type, amount, and status
- **Tab Filtering**: Filter transactions by category
- **CSV Export**: Download transaction data for external use

### Support System
- **Contact Form**: Structured form with name, email, and message fields
- **Live Chat Integration**: Direct access to chatbot support
- **Meeting Booking**: Schedule support meetings

## 🎯 Routes

- `/` - Dashboard (default route)
- `/transaction` - Transaction history page
- `/support` - Support and contact page

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### Path Aliases
The project uses path aliases configured in `jsconfig.json`:
- `@/components` - Points to `src/components`

## 📝 Code Style

- ESLint is configured for code quality
- React Hooks rules are enforced
- Consistent component structure and naming conventions

## 🤝 Contributing

1. Follow the existing code structure and component organization
2. Maintain consistent naming conventions (PascalCase for components)
3. Keep components organized in their respective feature folders
4. Update this README when adding new features

## 📄 License

This project is private and for educational purposes.

## 👨‍💻 Development Notes

- Components are organized by feature/domain (dashboard, transaction, support, layout)
- All UI components use Chakra UI for consistent styling
- React Router is used for client-side navigation
- The application uses a layout component pattern for shared UI elements

---

Built with ❤️ using React and Chakra UI
