# Travlr Getaways - Full Stack Web Application

**Course**: CS 465 - Full Stack Development  
**Project**: Final Iteration with Admin Login & Security  
**Author**: Kursheeka Milburn 
**Date**: June 2025

## 📐 Architecture

For the frontend, I implemented a Single-Page Application (SPA) using **Angular** to provide dynamic, client-side routing and a smooth user experience. Angular components like `trip-list`, `add-trip`, and `edit-trip` were rendered conditionally using the router-outlet system. This allowed modular, scalable navigation with minimal page reloads.

Earlier iterations used static **Express HTML templates** and server-side rendering, but this was replaced as Angular took over for better performance and maintainability. JavaScript played a key role in both environments, JavaScript was foundational in understanding DOM manipulation, while TypeScript (used in Angular) enhanced structure and error checking.

The backend used a **NoSQL MongoDB database**, which allowed flexible document-based storage. This was ideal for storing trip objects with nested fields like `description`, `image`, `start`, etc. Its schema-less nature worked well for rapid development, and it integrated smoothly with Mongoose, enabling CRUD operations without rigid table structures.

---

## ⚙️ Functionality

**JSON** (JavaScript Object Notation) differs from **JavaScript** in that it is a lightweight data-interchange format that is language-independent. While JavaScript is a full-fledged programming language, JSON is used to structure and transmit data. In my project, JSON served as the bridge between the frontend and backend, data was retrieved from the Express API as JSON and rendered in Angular components.

Throughout development, I **refactored** several parts of the codebase to improve efficiency. For example:
- I abstracted API calls into a `TripDataService` to centralize HTTP operations.
- I reused form components across both `add-trip` and `edit-trip` features.
- I modularized logic into Angular services and interceptors, reducing duplication and enhancing testability.

Reusable UI components like the `trip-card` and `navbar` minimized development time and helped maintain a consistent look and feel across the application.

---

## 🧪 Testing

I extensively tested API endpoints using **Postman** to validate both GET and POST/PUT/DELETE operations. During development, testing became more complex once **authentication and security layers** were added.

The app uses **JWT (JSON Web Tokens)** for authentication. Upon login, a token is generated and stored on the client side. To ensure secure communication:
- I implemented an Angular **JWT interceptor** that appends the token to protected backend requests.
- On the backend, Express verifies tokens using Passport and a custom JWT strategy.
- I validated protected routes like `addTrip` and `updateTrip` to ensure that only authenticated users could access them.

Understanding **HTTP methods** (GET, POST, PUT, DELETE) and **endpoint routing** was essential in building RESTful APIs that handled both data retrieval and secure mutation logic.

---

## 💭 Reflection

This course has significantly contributed to my professional development. I have gained real-world, job-ready skills in:
- Designing and developing full-stack applications using the **MEAN stack (MongoDB, Express, Angular, Node.js)**
- Implementing **secure authentication** with Passport, JWT, and crypto
- Using **Postman and MongoDB Compass** for backend testing and debugging
- Managing projects and branches with **Git and GitHub**

Through this project, I’ve improved my ability to structure scalable web apps and secure them properly. I’ve also learned how to bridge frontend and backend technologies through RESTful APIs and shared data models. These skills directly support my goal of moving into a technical role and make me a much stronger, more marketable candidate in the web development and IT field.

