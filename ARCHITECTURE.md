# APEX Athletics — Technical Architecture & Logic Guide

This document serves as a "master guide" for the APEX Athletics codebase. If you need to build a similar project in the future, reference this guide to understand **how** things were built, **why** certain decisions were made, and the exact logic driving the complex features.

---

## 1. Application Shell & Routing (`App.js`)

### Logic Used:
- **Client-Side Routing:** We used `react-router-dom` v7. The app is a Single Page Application (SPA), meaning the browser never reloads the page. Instead, React swaps out the components based on the URL.
- **Code Splitting (`React.lazy` & `Suspense`):** 
  - *Why?* If we bundled all pages together, the initial JavaScript file would be massive, causing slow load times.
  - *How?* We wrap our page imports in `lazy(() => import('./pages/HomePage'))`. React will only fetch the JavaScript for the Home page when the user actually navigates to it. While it fetches, the `<Suspense fallback={<Loader />}>` shows a spinning animation.
- **Page Transitions (`AnimatePresence`):** We wrap our Routes in Framer Motion's `<AnimatePresence mode="wait">`. This ensures that when a user clicks a link, the current page fades out *before* the new page fades in, preventing ugly layout snapping.

---

## 2. Navigation & Hash Scrolling (`Header.jsx`)

### Logic Used:
Navigating a modern SPA that combines a long scrolling homepage with separate subpages (like `/about`) is notoriously difficult.
- **The Problem:** If a user is on the `/contact` page and clicks the "Plans" link in the header, standard anchor links (`href="#plans"`) won't work because the Plans section only exists on the Home page.
- **The Solution:** 
  1. The navigation links combine a route and a hash: `to="/#plans"`.
  2. In `Header.jsx`, we intercept the click. If the user is already on the Home page (`/`), we use standard JavaScript `scrollIntoView` for smooth scrolling.
  3. If they are on a subpage, the `Link` component takes them to the Home page first. 
  4. A `useEffect` hook listens to the `location` object. When it sees the page has changed to `/` and the URL has a hash (`#plans`), it waits 100ms (to let the DOM render), then smoothly scrolls to the element with `id="plans"`.

---

## 3. The Data Layer (`src/data/`)

### Logic Used:
- **No Database:** To keep the project blazing fast and completely free to host, we did not use a backend database (like MongoDB or PostgreSQL).
- **Object-Relational Mapping (Static):** We store all gym data in simple JavaScript arrays and objects (`programsData.js`, `plansData.js`). 
- *Why?* This creates a "Single Source of Truth." If the price of a gym membership goes up, you only change it in `plansData.js`. The Pricing component, the Chatbot, and the Checkout page will all instantly reflect the new price.

---

## 4. The Smart Chatbot Engine (`chatbotEngine.js`)

### Logic Used:
Most modern chatbots rely entirely on calling an AI API (like OpenAI or Gemini). This is slow, expensive, and prone to breaking. We built a **Hybrid Engine**.

#### A. The Local Knowledge Base (Fuzzy Matching)
- **The Engine:** A purely client-side Javascript function `matchIntent(userInput)`.
- **The Logic:**
  1. We define ~50 "intents" (categories like `pricing`, `hours`, `pool`).
  2. Each intent has an array of `keywords` (e.g., `["swim", "pool", "water"]`).
  3. When a user types a message, we convert it to lowercase and loop through all intents.
  4. **Regex Word Boundaries:** We use `new RegExp('\b' + keyword, 'i')`. The `\b` at the start ensures we don't accidentally match the word "end" hiding inside the word "genders". We omitted the `\b` at the end of the regex so that singular keywords (like "hour") still match plural inputs (like "hours").
  5. **Scoring Weight:** Every time a keyword is found, we increase the score. The points awarded equal the `keyword.length`. This means the exact phrase "free trial" (10 points) will outscore the generic word "try" (3 points), ensuring the most specific intent wins.
  6. **Threshold:** The engine requires a minimum score of 2 to return an answer, preventing random 1-letter typos from triggering responses.

#### B. The AI Fallback
- If the Local Engine scores a `0` (meaning the user asked a highly unique question), the chatbot falls back to `geminieFallback()`.
- It uses the `fetch` API to send the chat history to the **Google Gemini 3.6 Flash** REST endpoint.
- We provide a strict `system_instruction` prompt so the AI acts exactly like a gym coach and doesn't hallucinate fake prices.

---

## 5. Animations (`Framer Motion`)

### Logic Used:
- **Scroll-Triggered Reveals:** Wrapping elements in `<motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>`. 
  - *Why?* Elements start invisible and shifted down (`y: 50`). As the user scrolls down the page and the element enters the viewport, it animates upward. `once: true` ensures the animation doesn't repeat annoyingly if they scroll up and down.
- **Staggered Children:** When revealing a grid of 3 pricing cards, we don't want them to all appear at the exact same millisecond. We use `transition={{ delay: index * 0.1 }}` based on the array map index. Card 1 delays 0ms, Card 2 delays 100ms, Card 3 delays 200ms, creating a cascading waterfall effect.

---

## 6. Styling System (Tailwind CSS)

### Logic Used:
- **Glassmorphism:** The trendy translucent backgrounds you see on the Chatbot and Navbar.
  - *How:* `bg-white/[0.05] backdrop-blur-xl border border-white/[0.08]`. This combines a 5% opacity white background, a heavy blur on everything behind the element, and a subtle transparent white border to catch the light.
- **Gradients over Solid Colors:** To make the UI feel premium, buttons and highlighted text use `bg-gradient-to-r from-primary-500 to-accent-500`.

---

## Summary Checklist for Next Project:
1. Always set up standard routing + `AnimatePresence` first.
2. Build a central static data layer instead of hard-coding text into components.
3. For Chatbots, always build a local Keyword/Intent engine first to handle 90% of FAQs instantly and free of charge, using LLM APIs only as a fallback for the remaining 10%. 
4. Protect API keys by putting them in `.env` and adding `.env` to `.gitignore`.
