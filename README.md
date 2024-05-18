# Event Registration App

This is a full-stack web application built with React, Express.js, and PostgreSQL. The application allows users to register for events by providing their personal details.

## Links
* https://events-registration-app-c9h5.onrender.com/events - a link to the hosted site. Due to the fact that the hosting is free - it loads slowly
* https://drive.google.com/file/d/1KYwi0s3F8Ypi8mJ0nZcsLedc6P4EZKRE/view?usp=drive_link - a link to download a video demonstrating the program's operation

## Features

* User can register for events.
* Backend API built with Express.js.
* PostgreSQL database for storing user and event data.
* Frontend built with React and Bootstrap for a responsive design.

## Technologies Used

* Frontend: React, Bootstrap
* Backend: Node.js, Express.js
* Database: PostgreSQL
* ORM: Sequelize

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js (v12.x or later)
* npm
* PostgreSQL (v12.x or later)
* Git

# Getting Started

### 1. Clone the repository

```
git clone https://github.com/yourusername/event-registration-app.git
cd event-registration-app
```

### 2. Install dependencies with `npm install` on client and server sile

### 3. Set up PostgreSQL Database. Create a PostgreSQL database and update the database configuration in the backend. You can find the configuration file at `server/config/config.json`

### 4. Create Environment Variables. Create a .env files like in examples:  `/server/.env_example` and `/crient/.env_example` 

### 5. Run Migrations. Navigate to the server directory and run the migrations and seeders: `npx sequelize-cli db:migrate`

### 6. Start the Application
