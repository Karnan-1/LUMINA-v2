# 🌟 LUMINA v2.0
## AI-Powered Unified Enterprise Operating System

[![Status](https://img.shields.io/badge/Status-MVP%20Ready-brightgreen)]() [![License](https://img.shields.io/badge/License-MIT-blue)]() [![Version](https://img.shields.io/badge/Version-2.0.0-blue)][]

### 🎯 Overview
LUMINA v2.0 is a revolutionary **single-platform solution** combining **4 complete business management modules** into one intelligent system:

- **🏥 Hospital Management (Vetqure)** - Patient records, appointments, billing
- **🍜 F&B Management** - Orders, inventory, delivery tracking
- **🛍️ Retail Management** - POS, inventory, customer analytics
- **🚗 Service Center (Spark Wash)** - Bookings, staff management, scheduling

### ✨ Key Features

**Design & UX**
- 🎨 **Liquid Glass UI** - Modern glassmorphism design in bright mode
- ⚡ **Framer Motion** - Smooth animations and transitions
- 📱 **Fully Responsive** - Mobile-first design
- 🌙 **Bright Mode Default** - Eye-friendly interface with 10-20% opacity glass effects

**Functionality**
- 🔐 **Role-Based Access Control** - Secure authentication with JWT
- 🎯 **Business Type Selector** - Dynamically load modules based on business type
- 📊 **Executive Dashboard** - Real-time KPI monitoring
- 💼 **Multi-Module Support** - Seamlessly switch between modules

**Demo Account**
```
Email: ai.demo@lumina.local
Password: LuminaDemo@2024
```

### 🚀 Quick Start

#### 1. Clone & Install
```bash
git clone https://github.com/Karnan-1/LUMINA-v2.git
cd LUMINA-v2
npm install
```

#### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### 3. Login with Demo Account
- Email: `ai.demo@lumina.local`
- Password: `LuminaDemo@2024`

### 📁 Project Structure
```
LUMINA-v2/
├── app/
│   ├── page.tsx                 # Home with business type selector
│   ├── login/
│   │   └── page.tsx             # Liquid Glass login page
│   ├── dashboard/
│   │   ├── hospital/            # Hospital module dashboard
│   │   ├── fnb/                 # F&B module dashboard
│   │   ├── retail/              # Retail module dashboard
│   │   └── service/             # Service module dashboard
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles with Tailwind
├── components/
│   ├── ui/
│   │   ├── GlassCard.tsx        # Liquid Glass card component
│   │   ├── GlassButton.tsx      # Liquid Glass button component
│   │   └── GlassNav.tsx         # Glass navigation bar
│   ├── modules/
│   │   ├── HospitalDashboard.tsx
│   │   ├── FnbDashboard.tsx
│   │   ├── RetailDashboard.tsx
│   │   └── ServiceDashboard.tsx
│   └── ...
├── lib/
│   ├── data.ts                  # Mock data for all modules
│   ├── auth.ts                  # Authentication logic
│   └── utils.ts                 # Utility functions
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

### 🛠️ Tech Stack

**Frontend:**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

**Design:**
- **Liquid Glass** - Custom design system
- **Bright Mode** - Light theme with glass morphism
- **Responsive Design** - Mobile-first approach

### 📋 Module Features

#### 🏥 Hospital Management
- Patient records and history
- Appointment scheduling
- Doctor management
- Billing and payments
- Department overview

#### 🍜 F&B Management
- Order management
- Inventory tracking
- Menu management
- Delivery tracking
- Revenue analytics

#### 🛍️ Retail Management
- Point of Sale (POS)
- Inventory management
- Product catalog
- Customer analytics
- Sales reporting

#### 🚗 Service Management
- Service booking
- Technician scheduling
- Maintenance tracking
- Customer bookings
- Payment processing

### 🚀 Deployment to Vercel

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial LUMINA v2.0 commit"
git push origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Select `LUMINA-v2`
4. Click Deploy
5. Your app will be live in seconds!

**Deployment URL:** `https://lumina-v2.vercel.app`

### 🔒 Security
- JWT-based authentication
- Role-based access control
- Secure credential storage
- Environment variable management
- Input validation and sanitization

### 📊 Demo Data
The application comes pre-loaded with 3 months of realistic demo data across all modules:
- 50+ patient records with appointment history
- 100+ F&B orders with delivery tracking
- 200+ retail products with inventory
- 75+ service bookings

### 🎓 Learning Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org)

### 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### 📝 License
MIT License - see LICENSE file for details

### 📧 Support
For issues and feature requests, please create a GitHub issue.

---

**Status:** ✅ MVP Complete | 🚀 Ready for Production | 📈 Scalable Architecture
