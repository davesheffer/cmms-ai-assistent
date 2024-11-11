# CMMS Chat API

A Next.js API for a CMMS-focused chat, responding with GROQ integration.

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

4. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Add Environment Variables:
After initializing , you can add the required environment variables:

   - `GROQ_API_KEY`: Your GROQ API key value.
   - `SMTP_SERVER_HOST`: Your SMTP server host.
   - `SMTP_SERVER_USERNAME`: The SMTP server username.
   - `SMTP_SERVER_PASSWORD`: The SMTP server password.
   - `SITE_MAIL_RECIEVER`: The email address to receive the site mail.

## API Endpoint

- **POST /api/chat**  
  Send chat messages with a focus on CMMS. Responds in English, limited to 30 words.



---

**Note:** The API key should not be prefixed with `NEXT_PUBLIC_` to keep it private.
