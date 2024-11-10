# CMMS Chat API

A Next.js API for a CMMS-focused chat, responding in Hebrew with GROQ integration.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cmms-chat-api.git
   cd cmms-chat-api

Here's a concise README.md for your project:

markdown
Copy code
# CMMS Chat API

A Next.js API for a CMMS-focused chat, responding in Hebrew with GROQ integration.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cmms-chat-api.git
   cd cmms-chat-api
Install dependencies:

bash
Copy code
npm install
Environment Variables:
Set up a .env.local file with the following:

plaintext
Copy code
GROQ_API_KEY=your_private_key_here
Run the development server:

bash
Copy code
npm run dev
API Endpoint
POST /api/chat
Send chat messages with a focus on CMMS. Responds in Hebrew, limited to 20 words.
Deployment
Deploy on Vercel and add GROQ_API_KEY in Vercel environment variables.

