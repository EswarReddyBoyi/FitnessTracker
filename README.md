# Fitness Tracker 

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) for tracking fitness activities. It allows users to record their fitness activities, calculate calories burnt, view their fitness history, and manage their records.

## Features

- **Authentication**: Sign up, sign in, and sign out functionality with JWT token-based authentication.
- **Fitness Activity Recording**: Users can record their fitness activities including type of exercise, duration, and calories burnt.
- **Calorie Calculator**: Calculate calories burnt based on exercise type and duration.
- **View Fitness History**: View a history of recorded fitness activities.
- **Update/Delete Records**: Edit and delete fitness records.

## Technologies Used

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT for authentication

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (and npm)
- MongoDB (local or Atlas instance)
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/22BCE8093-Eswar/FitnessTracker.git

   cd fitness-tracker
Install dependencies:

bash
Copy code
# Install server dependencies
cd server
npm install

# Install client dependencies
cd client
npm install

Set up environment variables:

Create a .env file in the server directory based on .env.example and configure your MongoDB connection URI, JWT secret, and any other necessary variables.
Start the development server:

bash
Copy code
# Start the backend server (from the server directory)
npm run dev

# Start the frontend development server (from the client directory)
npm start
# npm packages used in this project:
express,
body-parser,
bcryptjs,
jsonwebtoken,
express-validator,
mongoose,
cors,
axios,
react,
react-dom,
react-router-dom,
react-scripts


# Frontend deployment done on platform vercel & Open in your browser:
Visit https://fitness-trackkzz.vercel.app/signin to see the application running.

# Backend deployment done on platform glitch: 
https://fitness-trackerrzz.glitch.me


Frontend(React): Used Vercel for Frontend(client) deployement
Backend(Node.js): Used Glitch for Backend(server) deployement


# Dashboard for Vercel:
https://vercel.com/eswars-projects-6f8f8203/fitness-trackkzz/DZ5PfvRHHDS7zGVpKNQisXy2en3B

For Edit on glitch platform: 
https://glitch.com/edit/#!/fitness-trackerrzz





we can also use others sites for Deployment 
Frontend (React): Deploy using Vercel, Netlify, or your preferred hosting service. Build the React app (npm run build) and deploy the generated build folder.

Backend (Node.js): Deploy your Node.js server on platforms like Heroku,Glitch, AWS, DigitalOcean, etc. Ensure environment variables are set in your deployment environment.



Contributing
Contributions are welcome! Here's how you can contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
