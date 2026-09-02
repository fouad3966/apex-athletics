# APEX Athletics — Modern Gym & Fitness Platform

![APEX Athletics Cover](https://via.placeholder.com/1200x600/101015/FF3D26?text=APEX+Athletics+-+Modern+Gym+Platform)

APEX Athletics is a production-ready, highly interactive front-end web application built for a premium fitness center. It features a modern dark-mode aesthetic with glassmorphism UI, advanced Framer Motion animations, dynamic routing, and a custom-built smart AI Chatbot engine.

## 🚀 Key Features

- **Immersive UI/UX**: Premium dark-mode design with vibrant gradients, glassmorphism containers, and smooth micro-animations on all interactive elements.
- **Advanced Animations**: Powered by Framer Motion, featuring scroll-triggered reveal animations, staggered lists, and seamless page transitions.
- **Smart Chatbot Assistant**: A custom-built, client-side intent-matching engine (Fuzzy Logic) that answers 50+ gym-related questions instantly, with an AI (Google Gemini 3.6 Flash) fallback for unhandled queries.
- **Performance Optimized**: Built with route-level code splitting (`React.lazy` & `Suspense`), ensuring fast initial load times.
- **Mobile Responsive**: Fully responsive grid layouts and a custom mobile navigation drawer.
- **Production Grade**: Includes custom Error Boundaries, a branded 404 Not Found page, and strict accessibility standards.

## 🛠️ Tech Stack

- **Framework**: React.js 18
- **Routing**: React Router v7 (Dynamic parameters, nested routes, hash-scrolling)
- **Styling**: Tailwind CSS (Custom configured design system with primary/accent tokens)
- **Animations**: Framer Motion
- **AI Integration**: Google Gemini API (v1beta REST API)
- **Data Layer**: Modular static data structures (No DB required)

## 📦 Getting Started

### Prerequisites
- Node.js (v16+)
- A Google Gemini API Key (Optional, for chatbot fallback)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/apex-athletics.git
   cd apex-athletics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📂 Project Structure

\`\`\`text
src/
├── components/      # Reusable UI components (Header, Footer, Chatbot, Testimonials)
├── pages/           # Route-level components (Home, Contact, ProgramDetails, Coaches)
├── data/            # Static data stores & Smart Chatbot Engine
├── assets/          # Images, SVGs, and global styles
└── App.js           # Main router and global wrapper
\`\`\`

## 🧠 Chatbot Architecture

The APEX Assistant is a hybrid chatbot designed for **speed** and **reliability**:
1. **Local Intent Engine**: Parses user input against a local Knowledge Base (50+ intents) using word-boundary RegEx and length-based keyword scoring. Responses are instantaneous and formatted in Markdown.
2. **Gemini AI Fallback**: If the query scores 0, it calls the Google Gemini API to generate a context-aware response based on a strictly formatted system prompt.

## 📝 License
This project is open-source and available under the MIT License.
