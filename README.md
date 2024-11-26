# Car Management Application 🚗

## Project Overview

The **Car Management Application** is a web-based platform that allows users to manage their car inventory. Users can create, view, edit, and delete car entries, each of which can have up to 10 images, a title, a description, and tags like `car_type`, `company`, or `dealer`. It also includes user authentication and a global search functionality.

---

## Features

### Core Features
1. **Authentication**:
   - Users can register and log in to access their car inventory.
2. **Car Management**:
   - Add a car with up to 10 images, a title, description, and tags.
   - View a list of all cars created by the logged-in user.
   - Update a car’s title, description, tags, or images.
   - Delete cars from the inventory.
3. **Search**:
   - Global search across all car entries (title, description, and tags).
4. **Detail View**:
   - Click on a car to view its details.

---

## Tech Stack

### Frontend
- **React.js**: User interface.
- **Tailwind CSS**: Styling framework for responsive design.
- **React Router**: Client-side routing.

### Backend
- **Node.js**: Server-side runtime.
- **Express.js**: Backend framework for API creation.
- **PostgresSQL**: Database for storing car and user data.
- **Multer**: Middleware for handling file uploads.
- **JWT**: Authentication via JSON Web Tokens.

---

## Setup Instructions

### Prerequisites
- Node.js (>= 16.x)
- PostgresSQL instance
- Basic knowledge of React and REST APIs

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/car-management-app.git
   cd car-management-app/backend
