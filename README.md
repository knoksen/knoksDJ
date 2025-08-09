<!-- One-Click Start -->
<p align="center">
  <a href="https://knoksen.github.io/knoksDJ/">
    <img alt="Launch App" src="https://img.shields.io/badge/LAUNCH%20APP-%F0%9F%9A%80-brightgreen?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="https://codespaces.new/knoksen/knoksDJ"><img alt="Open in Codespaces" src="https://github.com/codespaces/badge.svg"></a>
  <a href="https://vercel.com/new/git/external?repository-url=https://github.com/knoksen/knoksDJ"><img alt="Deploy with Vercel" src="https://vercel.com/button"></a>
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/knoksen/knoksDJ"><img alt="Deploy to Netlify" src="https://www.netlify.com/img/deploy/button.svg"></a>
  <a href="https://heroku.com/deploy?template=https://github.com/knoksen/knoksDJ"><img alt="Deploy to Heroku" src="https://www.herokucdn.com/deploy/button.svg"></a>
</p>

# PromptDJ 🎧

PromptDJ is an innovative web application that puts you in the conductor's seat, allowing you to shape a continuous stream of music in real-time using simple text prompts. Powered by Google's generative music models, PromptDJ offers an interactive and creative experience for music lovers and creators alike.

![Screenshot of the PromptDJ application.](https://storage.googleapis.com/generative-ai-devsite/doc-img/cb2/promptdj-screenshot.png)

## ✨ Features

*   **Real-Time Music Generation**: Instantly hear changes as you add, remove, or adjust the weight of your text prompts.
*   **Multi-Prompt Control**: Blend multiple musical ideas—from "Minimal Techno" to "Lush Strings"—and control the influence of each with intuitive weight sliders.
*   **Advanced Tuning**: Fine-tune the musical output with advanced settings like Temperature, Guidance, BPM, Scale, and more.
*   **"Surprise Me"**: Feeling uninspired? Let the AI generate a fresh set of creative prompts for you with a single click.
*   **Persistent Sessions**: Your carefully crafted set of prompts is automatically saved, so you can pick up right where you left off.
*   **Progressive Web App (PWA)**: Optimized for a seamless mobile experience with quick launch and offline capabilities.

### Add to Home Screen

On your mobile device, you can add PromptDJ to your home screen for an app-like experience.

1.  Open your deployed app in a mobile browser (e.g., Chrome or Safari).
2.  Tap the **Share** or **Settings** icon.
3.  Select **"Add to Home Screen"**.

The app will now be available on your home screen, launching instantly and even working offline!

## 💻 Local Development

To run PromptDJ on your local machine, this project uses [Vite](https://vitejs.dev/) for a fast and modern development experience.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/knoksen/knoksDJ.git
    cd knoksDJ
    ```
2.  **Set up your API Key:**
    You will need a Google Gemini API key. Create a `.env` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Now, open the `.env` file and add your API key:
    ```
    API_KEY="YOUR_API_KEY_HERE"
    ```
3.  **Install dependencies and run:**
    This project uses Node.js. Make sure you have it installed.
    ```bash
    npm install
    npm start
    ```
    This will start the development server, usually at `http://localhost:5173`.