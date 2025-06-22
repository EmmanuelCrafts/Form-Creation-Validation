# Form-Creation-Validation

A beginner-friendly web project that combines **form validation** and **asynchronous API data fetching** using HTML, CSS, and JavaScript.

---

##  Project 1: User Registration Form

This part of the project includes a simple registration form with real-time validation.

###  Features

- Validates user input for:
  - **Username** (minimum 3 characters)
  - **Email** (must contain "@" and ".")
  - **Password** (minimum 8 characters)
- Shows **real-time feedback** using JavaScript
- Clean, responsive design with CSS

###  Learning Goals

- Practice **DOM manipulation**
- Handle **form events**
- Implement **client-side validation**

---

##  Project 2: API User List Display

This feature fetches user data from a public API and displays the names on the page.

###  Features

- Fetches user data from:  
  `https://jsonplaceholder.typicode.com/users`
- Displays each user's **name** in a list
- Handles errors with a user-friendly message
- Automatically runs after page loads

### JavaScript Techniques Used

- `async/await` for asynchronous code
- `fetch()` to make API calls
- `try/catch` for error handling
- Dynamically creates and appends DOM elements

### 💻 Example Usage

```javascript
async function fetchUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  // Display user names in the DOM
}
