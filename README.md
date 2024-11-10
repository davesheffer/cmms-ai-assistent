# CMMS Chat API

A Next.js API for a CMMS-focused chat, responding in Hebrew with GROQ integration.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cmms-chat-api.git
   cd cmms-chat-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**  
   Set up a `.env.local` file with the following:
   ```plaintext
   GROQ_API_KEY=your_private_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## API Endpoint

- **POST /api/chat**  
  Send chat messages with a focus on CMMS. Responds in Hebrew, limited to 20 words.

## Deployment

Deploy on Vercel and add `GROQ_API_KEY` in Vercel environment variables.

---

**Note:** The API key should not be prefixed with `NEXT_PUBLIC_` to keep it private.
