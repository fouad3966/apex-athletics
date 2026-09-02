/**
 * APEX Athletics — Smart Chatbot Engine
 * 
 * A client-side intent-matching engine that delivers instant, accurate responses
 * using fuzzy keyword scoring. No API calls needed for common questions.
 * Falls back to Gemini API only for unrecognized queries.
 */

// ─── Knowledge Base ─────────────────────────────────────────────
const knowledge = {
  programs: {
    keywords: ["program", "class", "training", "workout", "offer", "do you have", "what can i do", "exercise", "session", "course"],
    response:
      "We offer 4 awesome programs 💪:\n\n• **Strength Training** — Build muscle & raw power (60–90 min, 4–5x/week)\n• **Cardio Training** — Boost endurance & heart health (45–60 min, 3–5x/week)\n• **Fat Burning** — HIIT & metabolic conditioning (45–75 min, 4–5x/week)\n• **Health Fitness** — Flexibility, balance & wellness (45–60 min, 3–4x/week)\n\nWant details on any of these? Just ask!",
  },
  strength: {
    keywords: ["strength", "muscle", "bulk", "weight lifting", "weights", "powerlifting", "bodybuilding"],
    response:
      "Our **Strength Training** program is designed to build muscle mass and increase raw strength through progressive resistance training. Sessions are 60–90 min, 4–5x per week, best suited for Intermediate to Advanced athletes. Equipment includes barbells, squat racks, cable machines, and more! 🏋️",
  },
  cardio: {
    keywords: ["cardio", "running", "endurance", "heart", "stamina", "treadmill", "cycling"],
    response:
      "Our **Cardio Training** program delivers high-energy workouts to boost your endurance, burn calories, and strengthen your heart. Sessions are 45–60 min, 3–5x per week, and it's open to All Levels! 🏃‍♂️",
  },
  fatburn: {
    keywords: ["fat", "burn", "lose weight", "weight loss", "slim", "lean", "hiit", "shred", "cut"],
    response:
      "Our **Fat Burning** program combines HIIT, metabolic conditioning, and nutrition guidance for maximum fat loss. Sessions are 45–75 min, 4–5x per week, great for Beginners to Intermediate! 🔥",
  },
  health: {
    keywords: ["health", "wellness", "yoga", "flexibility", "balance", "mobility", "stretch", "mindfulness", "relax"],
    response:
      "Our **Health Fitness** program takes a holistic approach — focusing on flexibility, balance, mobility, and mental well-being. Sessions are 45–60 min, 3–4x per week, open to All Levels! 🧘",
  },
  pricing: {
    keywords: ["price", "cost", "how much", "plan", "membership", "subscribe", "pay", "fee", "afford", "money", "dollar", "pricing", "cheap", "expensive"],
    response:
      "Here are our plans:\n\n• **Basic** — $25/mo → 2hr exercises, free consultation, community access\n• **Premium** — $30/mo ⭐ → 5hr exercises, consultation, minibar & lounge\n• **Pro** — $45/mo → 8hr exercises, private coach, free fitness merch\n\nAll plans include access to our world-class facilities!",
  },
  hours: {
    keywords: ["hour", "open", "close", "time", "when", "schedule", "available", "operating"],
    response:
      "We're open:\n\n• **Monday – Friday:** 5:00 AM – 11:00 PM\n• **Saturday – Sunday:** 7:00 AM – 9:00 PM\n\nPremium members get extended access beyond regular hours! ⏰",
  },
  location: {
    keywords: ["location", "where", "address", "find you", "directions", "map", "located"],
    response:
      "You can find us at **123 Fitness Avenue, Downtown District, NY 10001**. We're right in the heart of downtown — easy to reach by subway or car! 📍",
  },
  contact: {
    keywords: ["contact", "email", "phone", "call", "reach", "talk", "speak", "get in touch", "message"],
    response:
      "You can reach us anytime:\n\n• 📧 **Email:** hello@apexathletics.com\n• 📞 **Phone:** +1 (555) 123-4567\n• 💬 Or visit our **Contact page** on the website!\n\nWe usually respond within 24 hours.",
  },
  coaches: {
    keywords: ["coach", "trainer", "instructor", "staff", "expert", "personal trainer", "pt"],
    response:
      "We have over **140+ expert coaches** ready to help you reach your goals! All our trainers are certified and passionate about fitness. Pro Plan members get private 1-on-1 coaching sessions included! 🎯",
  },
  cancel: {
    keywords: ["cancel", "quit", "stop", "leave", "end", "terminate", "refund"],
    response:
      "You can cancel your membership with a **30-day notice** — and there are **zero cancellation fees**. We also offer a freeze option if you just need a break! No strings attached. 👍",
  },
  freeze: {
    keywords: ["freeze", "pause", "hold", "break", "vacation", "suspend", "temporary"],
    response:
      "Yes! You can **freeze your membership for up to 3 months per year**. Perfect if you're traveling or need a break. Just let us know and we'll pause your billing — no penalties! ❄️",
  },
  beginner: {
    keywords: ["beginner", "start", "new", "first time", "never", "experience", "newbie", "join", "sign up", "register", "get started"],
    response:
      "Absolutely no experience needed! We welcome all fitness levels. When you join, our coaches will assess your fitness and create a **personalized plan** just for you. Your first program is free! 🌟",
  },
  greeting: {
    keywords: ["hi", "hello", "hey", "sup", "yo", "what's up", "good morning", "good evening", "bonjour", "salut"],
    response:
      "Hey there! 👋 Great to see you! I'm your APEX Coach — ask me about our programs, pricing, hours, or anything else. Let's crush some goals!",
  },
  thanks: {
    keywords: ["thank", "thanks", "thx", "appreciate", "helpful", "great", "awesome", "perfect"],
    response:
      "You're welcome! 😊 If you have any other questions, I'm always here. Let's get you started on your fitness journey!",
  },
  goodbye: {
    keywords: ["bye", "goodbye", "see you", "later", "cya", "gotta go", "peace"],
    response:
      "See you at the gym! 💪 Remember — every rep counts. Feel free to come back anytime you have questions!",
  },
  // ─── Facilities & Amenities ──────────────────────────────────
  pool: {
    keywords: ["pool", "swim", "swimming", "aqua", "water", "lap"],
    response:
      "We don't currently have a swimming pool, but we do have an incredible range of cardio equipment, a fully-stocked minibar & lounge (for Premium+ members), and top-tier strength training facilities. We're always expanding though — stay tuned! 🏊‍♂️",
  },
  sauna: {
    keywords: ["sauna", "steam", "spa", "jacuzzi", "hot tub", "recovery room"],
    response:
      "We don't have a sauna or spa at the moment, but our **Health Fitness** program includes dedicated recovery sessions with foam rolling, stretching, and mindfulness. For specific facility questions, reach out at **hello@apexathletics.com**! 🧖",
  },
  shower: {
    keywords: ["shower", "locker", "changing room", "towel", "bathroom", "restroom", "change"],
    response:
      "Yes! We have clean, modern **locker rooms** with showers, changing areas, and secure lockers available for all members. Come straight from work — we've got you covered! 🚿",
  },
  parking: {
    keywords: ["parking", "park", "drive", "car", "garage", "lot"],
    response:
      "We have **free parking** available for members right next to the facility. There's also street parking and public transit access nearby (we're in Downtown District, NY). Easy to get to! 🅿️",
  },
  wifi: {
    keywords: ["wifi", "wi-fi", "internet", "wireless"],
    response:
      "Yes, we have **free high-speed WiFi** throughout the entire facility! Perfect for streaming your workout playlist or catching up between sets. 📶",
  },
  // ─── Subscriptions & Billing ─────────────────────────────────
  annual: {
    keywords: ["annual", "yearly", "year", "long term", "discount", "12 month", "commitment", "contract"],
    response:
      "Currently we offer **monthly plans** with no long-term commitment required — you can cancel anytime with 30 days notice! If you're interested in an annual package with a discount, contact us at **hello@apexathletics.com** and we can work something out for you. 📅",
  },
  trial: {
    keywords: ["trial", "free trial", "try", "test", "demo", "sample", "free day", "day pass", "guest pass"],
    response:
      "We'd love for you to try us out! New members get their **first program absolutely free**. Just stop by the gym or reach out through our Contact page to book your trial session! 🎉",
  },
  guest: {
    keywords: ["guest", "friend", "bring", "visitor", "plus one", "companion", "partner"],
    response:
      "You can bring a friend for a guest visit! **Pro Plan** members can bring a guest once per week. Just check in at the front desk together. It's a great way to share the APEX experience! 🤝",
  },
  payment: {
    keywords: ["payment", "credit card", "debit", "cash", "billing", "invoice", "charge", "method"],
    response:
      "We accept **credit/debit cards** and digital payments. Billing is automatic on a monthly cycle — no surprises. You can manage your payment method anytime through the front desk. 💳",
  },
  // ─── Other Common Questions ──────────────────────────────────
  age: {
    keywords: ["age", "old", "kid", "child", "teen", "minor", "young", "senior", "elderly", "requirement"],
    response:
      "Members must be **16 years or older** to use the gym. Ages 16–17 can join with a signed parental consent form. We also offer senior-friendly programs through our **Health Fitness** track! 🎂",
  },
  nutrition: {
    keywords: ["nutrition", "diet", "meal", "food", "eat", "protein", "supplement", "shake", "calorie"],
    response:
      "Our **Fat Burning** program includes nutrition guidance! For personalized diet plans, our Pro Plan coaches can create a meal strategy tailored to your goals. We also have a minibar with healthy shakes and snacks for Premium+ members! 🥗",
  },
  equipment: {
    keywords: ["equipment", "machine", "gear", "barbell", "dumbbell", "squat rack", "cable", "treadmill"],
    response:
      "We're fully stocked with **world-class equipment** including barbells, squat racks, cable machines, dumbbells, treadmills, rowing machines, yoga mats, resistance bands, and much more. Everything you need under one roof! 🏋️‍♀️",
  },
  dresscode: {
    keywords: ["wear", "dress", "clothes", "clothing", "attire", "outfit", "shoes", "sneaker"],
    response:
      "Wear comfortable **athletic clothing** and clean indoor sneakers. We recommend moisture-wicking fabrics. Jeans, sandals, and open-toed shoes are not permitted on the gym floor for safety reasons. 👟",
  },
  group: {
    keywords: ["group", "class", "together", "team", "community", "social", "people"],
    response:
      "We have a thriving **community** of fitness enthusiasts! All plans include community access, and our programs feature group sessions where you can train alongside others. It's one of the best parts of APEX! 🤜🤛",
  },
  results: {
    keywords: ["result", "how long", "progress", "transform", "before after", "lose", "gain", "how fast"],
    response:
      "Most members see noticeable results within **4–8 weeks** of consistent training! Our coaches track your progress and adjust your program as you improve. Consistency is key — and we're here to keep you motivated! 📈",
  },
  // ─── Safety & Health ─────────────────────────────────────────
  injury: {
    keywords: ["injury", "injured", "hurt", "pain", "doctor", "medical", "condition", "disability", "disabled", "knee", "back", "shoulder", "physical therapy"],
    response:
      "Your safety is our top priority! If you have any medical conditions or injuries, please inform your coach before starting. Our trainers are experienced in **modified exercises** and can adapt any program to your needs. We recommend consulting your doctor before starting a new fitness routine. 🩺",
  },
  pregnancy: {
    keywords: ["pregnant", "pregnancy", "prenatal", "postnatal", "baby", "expecting", "maternity"],
    response:
      "Congratulations! 🎉 We offer modified exercises suitable for prenatal and postnatal fitness through our **Health Fitness** program. Always consult your doctor first, and let your coach know — they'll tailor a safe routine for you!",
  },
  // ─── Timing & Crowd ──────────────────────────────────────────
  peakhours: {
    keywords: ["busy", "crowded", "peak", "quiet", "empty", "best time", "rush", "crowd", "wait"],
    response:
      "**Peak hours** are typically 7–9 AM and 5–8 PM on weekdays. For a quieter experience, try visiting during **midday (11 AM–2 PM)** or late evening. Weekends tend to be less crowded overall! ⏳",
  },
  holiday: {
    keywords: ["holiday", "christmas", "new year", "thanksgiving", "closed", "special hours", "easter", "public holiday"],
    response:
      "We may have adjusted hours on major holidays. We always post updates on our social media and at the front desk ahead of time. For specific holiday hours, contact us at **hello@apexathletics.com**! 🎄",
  },
  // ─── Special Plans ───────────────────────────────────────────
  student: {
    keywords: ["student", "university", "college", "school", "academic", "student discount"],
    response:
      "We love supporting students! 🎓 Contact us at **hello@apexathletics.com** with your student ID and we can discuss special student-friendly options. Fitness is an investment in your future!",
  },
  corporate: {
    keywords: ["corporate", "company", "business", "office", "team building", "employer", "work", "enterprise"],
    response:
      "We offer **corporate wellness packages** for businesses! Group rates, team-building sessions, and employee wellness programs are available. Email **hello@apexathletics.com** for a custom proposal! 🏢",
  },
  couple: {
    keywords: ["couple", "partner", "boyfriend", "girlfriend", "husband", "wife", "together", "duo", "pair"],
    response:
      "Training together is a great idea! 💑 Each person needs their own membership, but you can train together in all our programs. **Pro Plan** members can also bring a guest once per week!",
  },
  family: {
    keywords: ["family", "son", "daughter", "parent", "mom", "dad", "mother", "father"],
    response:
      "We'd love to have your family! Members must be **16+** (16–17 with parental consent). There's no family bundle at the moment, but each member gets full access to all facilities and programs! 👨‍👩‍👧‍👦",
  },
  upgrade: {
    keywords: ["upgrade", "downgrade", "switch", "change plan", "move up", "better plan"],
    response:
      "You can **upgrade or downgrade** your plan anytime! Just visit the front desk or email us. Changes take effect on your next billing cycle — seamless and hassle-free! 🔄",
  },
  // ─── Experience & Culture ────────────────────────────────────
  firstday: {
    keywords: ["first day", "what to expect", "first visit", "first time coming", "what do i bring", "what happens", "orientation", "tour"],
    response:
      "On your **first day**, just bring a water bottle, comfortable workout clothes, and clean sneakers! You'll get a facility tour, meet your coach, and do a fitness assessment. No stress — everyone starts somewhere! 🌟",
  },
  atmosphere: {
    keywords: ["music", "vibe", "atmosphere", "loud", "noise", "environment", "culture", "feel"],
    response:
      "The APEX atmosphere is **energetic but welcoming**! We play motivating music throughout the gym, and the vibe is supportive — no judgment, just people crushing their goals together. Come feel it for yourself! 🎵",
  },
  clean: {
    keywords: ["clean", "hygiene", "sanitize", "disinfect", "wipe", "covid", "safe", "protocol", "health protocol"],
    response:
      "We take hygiene seriously! Our facility is **cleaned throughout the day**, with sanitizing stations at every equipment zone. We follow all health and safety protocols to keep you safe. 🧹✨",
  },
  accessibility: {
    keywords: ["accessible", "wheelchair", "ramp", "elevator", "handicap", "special needs", "mobility"],
    response:
      "Our facility is **fully accessible** with ramps, wide doorways, and adapted equipment areas. We're committed to making fitness available to everyone. Let us know if you need any accommodations! ♿",
  },
  photo: {
    keywords: ["photo", "picture", "selfie", "camera", "record", "video", "film", "instagram", "social media", "tiktok"],
    response:
      "You're welcome to take **photos and videos** for personal use! We just ask that you be respectful of other members' privacy. Tag us **@apexathletics** — we love seeing your progress! 📸",
  },
  // ─── Extras & Perks ──────────────────────────────────────────
  merch: {
    keywords: ["merch", "merchandise", "shop", "store", "buy", "apparel", "t-shirt", "hoodie", "gear", "branded"],
    response:
      "We have awesome **APEX branded merchandise** — tanks, hoodies, shakers, and more! Pro Plan members get free merch included. Visit the front desk to check out what's available! 🛍️",
  },
  referral: {
    keywords: ["referral", "refer", "invite", "recommend", "tell a friend", "bring someone"],
    response:
      "We love referrals! 🎁 When you refer a friend who signs up, you both get perks. Ask at the front desk about our current **referral rewards program**!",
  },
  giftcard: {
    keywords: ["gift", "gift card", "voucher", "present", "birthday", "surprise"],
    response:
      "Looking for the perfect gift? We offer **gift cards** for memberships and merchandise! A great way to give someone the gift of fitness. Available at the front desk or by emailing **hello@apexathletics.com**! 🎁",
  },
  app: {
    keywords: ["app", "mobile", "application", "download", "track", "online", "digital"],
    response:
      "We're working on an **APEX mobile app** for tracking workouts, booking sessions, and managing your membership! Stay tuned by following us on social media for the launch announcement! 📱",
  },
  virtual: {
    keywords: ["virtual", "online class", "remote", "home workout", "zoom", "live stream", "at home"],
    response:
      "Currently, all our programs are **in-person** at our facility for the best experience. We're exploring virtual options for the future! Follow our socials for updates. 🏠",
  },
  bodyanalysis: {
    keywords: ["body composition", "body fat", "bmi", "measurement", "assessment", "weigh", "scale", "inbody", "analysis"],
    response:
      "We offer **body composition assessments** as part of your onboarding! Your coach will track key metrics like body fat %, muscle mass, and more to tailor your training. Progress check-ins are included with all plans! 📊",
  },
  warmup: {
    keywords: ["warm up", "warmup", "cool down", "cooldown", "stretch before", "pre workout", "post workout", "recovery"],
    response:
      "Every session at APEX includes a proper **warm-up and cool-down**! Our coaches guide you through dynamic stretches before training and recovery stretches after. It's all built into your program! 🔥",
  },
  motivation: {
    keywords: ["motivat", "inspire", "lazy", "don't feel like", "hard", "difficult", "give up", "tired", "can't"],
    response:
      "We ALL have those days! 💪 Remember: **showing up is 90% of the battle**. Our coaches and community are here to push you through the tough moments. You're stronger than you think — let's go!",
  },
  whyapex: {
    keywords: ["why apex", "what makes you different", "why should i", "better than", "compared to", "vs", "unique", "special about"],
    response:
      "What sets APEX apart? **140+ expert coaches**, world-class equipment, 4 specialized programs, a supportive community, and flexible plans starting at just $25/mo. Plus, no contracts and no cancellation fees. We're built for results! 🏆",
  },
  events: {
    keywords: ["event", "competition", "tournament", "challenge", "workshop", "seminar", "meetup"],
    response:
      "We host regular **fitness challenges, workshops, and community events**! From transformation challenges to nutrition seminars. Follow us on social media or check the front desk for upcoming events! 🏅",
  },
  drinks: {
    keywords: ["water", "drink", "fountain", "bottle", "hydration", "juice", "smoothie", "bar"],
    response:
      "Stay hydrated! 💧 We have water fountains throughout the gym, and our **minibar** (Premium+ members) serves protein shakes, smoothies, and healthy drinks!",
  },
  lostfound: {
    keywords: ["lost", "found", "forgot", "left", "missing", "belongings"],
    response:
      "Lost something? Check with the **front desk** — we keep a lost and found! We recommend using our secure lockers during your workout to keep your belongings safe. 🔐",
  },
  complaint: {
    keywords: ["complaint", "complain", "problem", "issue", "bad", "terrible", "worst", "disappointed", "unhappy", "angry", "rude"],
    response:
      "We're sorry to hear that! Your experience matters to us. Please reach out to **support@apexathletics.com** with details and we'll address it right away. Your feedback helps us improve! 🙏",
  },
  compliment: {
    keywords: ["love", "amazing", "best gym", "fantastic", "excellent", "incredible", "wonderful", "10 out of 10", "recommend"],
    response:
      "That means the world to us! 🥰 We're so glad you love APEX. If you'd like to share your experience, leave us a review or tag us on social media — it helps others find us too!",
  },
  // ─── Gym Rules & Access ──────────────────────────────────────
  gender: {
    keywords: ["gender", "mixed", "men", "women", "separate", "ladies", "guys", "only"],
    response:
      "Our facility is **mixed-gender** and open to everyone! We do have separate, private locker rooms and shower facilities for men and women. Everyone is welcome at APEX! 🤝",
  },
};

// ─── Intent Matcher ─────────────────────────────────────────────
function matchIntent(userInput) {
  const input = userInput.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const [intent, data] of Object.entries(knowledge)) {
    let score = 0;
    for (const keyword of data.keywords) {
      // Use a leading word boundary (\b) so "gender" doesn't match the word "end"
      // But we omit the trailing \b so that "hour" still matches "hours"
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKeyword}`, 'i');
      
      if (regex.test(input)) {
        // Longer keyword matches are worth more (more specific)
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  // Require a minimum score to avoid false matches
  if (bestScore >= 2 && bestMatch) {
    return knowledge[bestMatch].response;
  }

  return null; // No match found
}

// ─── Gemini Fallback (non-streaming, simple) ────────────────────
const SYSTEM_PROMPT = `You are APEX Assistant for APEX Athletics gym. Be concise (2-3 sentences max), energetic, use 1 emoji.
Key data: Hours Mon-Fri 5AM-11PM, Weekends 7AM-9PM. Plans: Basic $25/mo, Premium $30/mo, Pro $45/mo. 
Programs: Strength, Cardio, Fat Burning, Health Fitness. 140+ coaches. Location: 123 Fitness Ave, NY 10001.
Contact: hello@apexathletics.com, +1(555)123-4567. Never reveal you are AI.`;

async function geminieFallback(userText, chatHistory) {
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  if (!apiKey || apiKey === "your_api_key_here") return null;

  try {
    const contents = chatHistory
      .slice(1)
      .map((msg) => ({
        role: msg.role === "model" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));
    contents.push({ role: "user", parts: [{ text: userText }] });

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 200 },
        }),
      }
    );

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch {
    return null;
  }
}

// ─── Public API ─────────────────────────────────────────────────
export { matchIntent, geminieFallback };
