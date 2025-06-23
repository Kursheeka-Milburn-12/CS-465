# Travlr Getaways - Full Stack Web Application

**Title:** 8-1 Journal: Portfolio  
**Name:** Kursheeka Milburn  
**Instructor:** Jerome DiMarzio  
**Course:** CS-360-10986-M01 Mobile Architect & Programming  
**Date:** June 29, 2025  

---

## Architecture

For this project, I worked on the frontend and backend of a full stack web application. The frontend started with Express HTML and JavaScript, which were used to render basic static and server-driven pages. Later, I moved to Angular and built a single-page application (SPA). This gave the app a more dynamic and interactive experience for users. The Angular router made it easier to switch between views like trip listing, add trip, and edit trip without reloading the page.

The backend used a NoSQL database, MongoDB. This choice was made because:
- MongoDB stores data in a flexible, JSON-like format.
- It works well with JavaScript and Node.js.
- It makes it easy to scale the app and manage collections of trip data without needing strict table structures like in SQL.

---

## Functionality

JSON (JavaScript Object Notation) is different from JavaScript itself. It’s just a way to store and format data. I used JSON to send and receive data between the frontend Angular components and the backend Express API. For example, when a user adds or edits a trip, that data is sent as JSON to the backend, and the response is also in JSON format.

Throughout development, I refactored several parts of the code:
- I created reusable components like trip cards, which display each trip’s details.
- I used services like TripDataService to centralize HTTP requests.
- Reusable UI components made the app easier to manage, saved time, and reduced bugs.

This helped make the app more organized and easier to maintain.

---

## Testing

To test the API endpoints, I used Postman. I tested:
- GET requests to check if trip data loaded correctly.
- POST requests to add a new trip.
- PUT requests to update trip data.

After adding user authentication, I had to make sure that only logged-in users could access protected actions like adding or editing trips. This involved testing security features, including the use of JWTs (JSON Web Tokens).

To handle these secure requests in Angular, I created a JWT interceptor. This automatically attached the token to every HTTP request going to the backend. It made the app more secure and avoided writing extra code in every API call.

---

## Reflection

This course taught me a lot about how full stack applications work. I learned how to build both the frontend and backend and connect them smoothly. I also learned how to:
- Set up Angular routing and forms
- Connect to a MongoDB database
- Create and secure RESTful APIs
- Implement login/logout functionality
- Use JWT tokens to protect routes and data

These skills are very useful in the real world and will help me in my future career. I now feel more confident working with modern web technologies and developing complete applications on my own.

This project gave me real hands-on experience that I can show to future employers in my portfolio.
