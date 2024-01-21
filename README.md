# Bloom - Your Personal Reading Companion

Live demo: [Bloom Demo](https://your-live-demo-link)

## Table of Contents

* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

## General Info

Bloom is a personalized reading companion that brings you a curated collection of articles, inspiring stories, and a platform to share your own thoughts with the community.

- **Problem it Solves:** Helps users discover interesting articles tailored to their preferences and provides a platform for sharing and connecting with like-minded readers.
- **Purpose:** Foster a community of readers, writers, and thinkers by creating a space for meaningful content.
- **Why Undertake It:** To provide a seamless and enjoyable reading experience, encouraging users to explore diverse topics and engage in discussions.

## Technologies Used

- React.js - version 17.0
- Node.js - version 14.0
- Express.js - version 4.17
- MongoDB - version 4.4
- Axios - version 0.21
- Other dependencies listed in the `package.json` file.

## Features

- Personalized article recommendations based on user preferences.
- User authentication for personalized content and community engagement.
- User-contributed articles and comments.
- Clean and intuitive user interface.

## Screenshots

![Profile details](https://github.com/kasiul/bloom_app/blob/bloom_app_backend/uploads/Zrzut%20ekranu%202024-01-21%20214419.png "Optional Title")


## Setup

### Project Requirements/Dependencies

- Node.js (version 14.0 or higher)
- MongoDB (running locally or hosted)

These dependencies are listed in the `package.json` file.

## Usage

### Getting Started

1. **Visit the Website:**

   Open your web browser and go to `http://localhost:3000`.

2. **Explore Articles:**

   Browse through the available articles on the home page. Click on any article to view its details, including the author, publication date, and content.

3. **User Authentication:**

   - **Log In:**
     If you have an account, click on the "Log In" button in the top-right corner. Enter your credentials (email and password) to log in.

   - **Sign Up:**
     New users can click on the "Sign Up" link to create an account. Provide the required information, including your name, email, and password.

   - **Log Out:**
     Users can log out by clicking on the "Log Out" button, ensuring a secure logout experience.

### User Profile

1. **View Profile:**

   - Once logged in, click on your profile picture or username to access your profile.

2. **Edit Profile:**

   - From your profile page, click on the "Edit Profile" button to update your profile details. You can change your name, email, and profile picture.

3. **Change Profile Picture:**

   - While editing your profile, click on the profile picture area to upload a new image. Choose an image from your computer to set it as your profile picture.

### Article Interaction

1. **Write an Article:**

   - Logged-in users can contribute by writing their articles. Click on the "Write an Article" button, fill in the details, and submit your article.

2. **Leave Comments:**

   - Engage with the community by leaving comments on articles. Scroll to the comments section, enter your comment, and submit.

### Code Examples

Here are some code examples demonstrating how to use certain features:

#### User Authentication (Frontend - React)

```jsx
// Example of logging in
const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', {
      email: 'your-email@example.com',
      password: 'your-password',
    });
    // Handle successful login
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};

## Project Status

The project is currently in development. New features and improvements are being actively worked on.

## Room for Improvement

### Improvements to be Done

1. **Enhance User Authentication:**
   Improve the user authentication system for better security and user experience.

2. **Optimize Performance:**
   Optimize the application's performance, especially when loading a large number of articles.

### To Do

1. **Feature to be Added:**
   Implement a search functionality to allow users to search for specific articles.

2. **Feature to be Added:**
   Integrate a recommendation system to suggest articles based on user preferences.

Feel free to contribute to the project by addressing these improvements and adding new features.

## Acknowledgements

- Icons provided by FontAwesome.
- Special thanks to the open-source community for their valuable contributions.

## Contact

For inquiries or feedback, contact Bloom Team at team@bloom.com.



