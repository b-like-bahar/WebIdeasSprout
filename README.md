# Project Title
WebIdeasSprout

## Overview

WebIdeasSprout is a dynamic platform designed to help innovators share and discover web application ideas. It fosters collaboration by allowing users to submit their websites, and explore a diverse collection of other projects. With features like real-time search, authentication, and user profiles, it creates an engaging community for brainstorming and inspiration.

### Problem Space

Coming up with web app ideas, finding inspiration for new projects, or showcasing work-in-progress applications can be challenging for developers and entrepreneurs. WebIdeasSprout solves this by providing a dedicated platform where users can explore, submit, and discuss web application ideas, fostering collaboration and innovation in the development community.

### Features

- **Dynamic Content Display**:Showcases the most recent Web Application ideas on the homepage utilizing Sanity's Content API.
- **GitHub Login Integration**: Enables users to effortlessly sign in using their GitHub credentials.
- **Web Application Submission Portal**: Allows users to enter their Website info, including title, description, category, and image link.
- **Browse Web Applications**: Enables users to explore submitted Web apps with category-based filtering options.
- **Detailed Web Application View**: Provides comprehensive information for each web app idea, displaying image and descriptions.
- **User Dashboard**: Offers users an overview of their submitted Web apps.
- **Top Visited Web Apps**: Displays the most viewed web applications, ensuring the best projects get highlighted dynamically.
- **View Tracking**: Monitors the number of live views for each submitted web application, replacing the traditional upvote system.
- **Efficient Search Functionality**: Provides a search feature to quickly load and view web app ideas.

## Implementation

### Tech Stack
- React 19
- Next.js 15
- Sanity
- TailwindCSS
- ShadCN
- TypeScript

## Full Project Setup 

1. **Clone this repository:**
   ```bash
   [git clone https://github.com/b-like-bahar/WebIdeasSprout.git]
2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**  
Create a .env.local file in the root directory of your project and add the following:
   ```bash
    AUTH_SECRET= 
    AUTH_GITHUB_ID=
    AUTH_GITHUB_SECRET=
    NEXT_PUBLIC_SANITY_PROJECT_ID=
    NEXT_PUBLIC_SANITY_DATASET='production'
    NEXT_PUBLIC_SANITY_API_VERSION='vX'
    SANITY_TOKEN=

### 📌 How to Obtain These Variables

#### **1️⃣ GitHub Authentication Variables**
- Go to [GitHub Developer Settings](https://github.com/settings/developers).
- Create a new **OAuth App**.
- Use `http://localhost:3000/api/auth/callback/github` as the **callback URL** for local development.
- After creation, GitHub will provide:
  - **Client ID** → Set this as `AUTH_GITHUB_ID`.
  - **Client Secret** → Set this as `AUTH_GITHUB_SECRET`.
- Generate a secure `AUTH_SECRET` using:
  ```bash
  npx auth secret
  ```

#### **2️⃣ Sanity API Variables**
- Sign up or log in to [Sanity.io](https://www.sanity.io/).
- Create a new project and select a dataset (`production` is recommended).
- Find your **Project ID** in **Sanity's dashboard** and set it as `NEXT_PUBLIC_SANITY_PROJECT_ID`.
- Set `NEXT_PUBLIC_SANITY_API_VERSION` to the latest stable Sanity API version.
- Generate an API Token:
  - Go to **Sanity Dashboard → Settings → API → Tokens**.
  - Create a new token with **appropriate permissions**.
  - Use this token as `SANITY_TOKEN`.

4. **Run the development server:**
   ```bash
    npm run dev

# Inspiration
This project was inspired by the **Next.js 15 Crash Course** by [JavaScript Mastery](https://www.youtube.com/watch?v=Zq5fmkH0T78&t=2s&ab_channel=JavaScriptMastery). The video provided a great foundation for building modern full-stack applications using Next.js 15, Sanity, and authentication with NextAuth.js.





















   
