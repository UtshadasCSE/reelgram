# Reelgram

Reelgram is a modern reel upload platform built using **Next.js, MongoDB, and DaisyUI**. Users can log in to their accounts, upload reels with a title and description, and interact with video content.

## Features

✅ **User Authentication** – Secure login system for users.  
✅ **Reel Uploading** – Add a title, description, and video to upload reels.  
✅ **Interactive UI** – Clean and responsive design with DaisyUI.  
✅ **Database Integration** – Uses MongoDB for storing user data and reels.  
✅ **Performance Optimized** – Efficient caching and optimized API calls.

## Tech Stack

- **Frontend:** Next.js, React, DaisyUI
- **Backend:** Next.js API routes, MongoDB
- **Database:** MongoDB (Mongoose for ORM)
- **Authentication:** NextAuth.js

## Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/reelgram.git
   cd reelgram
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URL=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Sign Up / Log In** to access the platform.
- **Upload a Reel** by adding a title, description, and video.
- **View and interact** with uploaded reels.

## Folder Structure

```
reelgram/
├── components/        # Reusable UI components
├── pages/            # Next.js pages (routes)
│   ├── api/          # API routes (backend logic)
├── models/           # Mongoose models
├── utils/            # Helper functions
├── public/           # Static assets
├── styles/          # Global styles
└── .env              # Environment variables
```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the **MIT License**.
