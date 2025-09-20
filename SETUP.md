# 🚀 Quick Setup Guide

## Step 1: Get Your DeepSeek API Key

1. Go to [DeepSeek Platform](https://platform.deepseek.com/api_keys)
2. Sign in with your account (or create one)
3. Click "Create API Key"
4. Copy the generated API key

## Step 2: Configure the App

1. Open the `.env` file in your project root
2. Replace `your_deepseek_api_key_here` with your actual API key:

```
VITE_DEEPSEEK_API_KEY=sk-your-actual-api-key-here
```

## Step 3: Install Dependencies & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Step 4: Test the Chat

1. Open the app in your browser
2. Click on the "Chat" tab at the bottom
3. Try asking: "What should I do today?" or "How do I get to my hotel?"

## 🎯 Example Questions to Try

- "What should I do today?"
- "How do I get to my hotel from the train station?"
- "What are the must-see attractions in [current city]?"
- "Where should I eat dinner tonight?"
- "What's the weather like in [current city]?"
- "Tell me about local customs in [country]"
- "How much should I budget for today?"

## 🔧 Troubleshooting

**Chat not working?**
- Check that your API key is correctly set in the `.env` file
- Make sure you have internet connection
- Check the browser console for any error messages

**App not starting?**
- Run `npm install` to ensure all dependencies are installed
- Check that you're in the correct directory
- Make sure Node.js is installed (version 16 or higher)

## 🌐 Deployment

To deploy to Vercel:
1. Push your code to GitHub (without the `.env` file)
2. Connect your repo to Vercel
3. Add your `VITE_DEEPSEEK_API_KEY` in Vercel's environment variables
4. Deploy!

## 🎉 Why DeepSeek?

DeepSeek AI offers several advantages:
- **OpenAI-compatible API** - familiar format
- **DeepSeek-V3.1** - latest and powerful model
- **Two modes**: `deepseek-chat` (fast) and `deepseek-reasoner` (thinking mode)
- **Cost-effective** compared to other premium models
- **High performance** for travel and general assistance

Your AI travel assistant is now ready! 🎉