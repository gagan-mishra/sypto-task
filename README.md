# Sypto Task

## Note
Please note that while this project has been set up and programmed to function correctly, I was unable to perform final testing and debugging due to the lack of an access token. I am confident in the setup and the implementation; however, the final testing phase could not be completed. Access to the necessary token would enable me to verify and fine-tune the functionalities.
I have provided dummy_api_key in the .env file, but project might not work as expected. If you have the access_token then paste it on the first line (comment the last line, and uncomment the first one ofcourse), and then I hope the project will work correctly.

## Overview
This repository contains a full-stack application with a React-based frontend and a Node.js backend, all housed within a single project directory. The project is structured into two main folders: `client` for the React application and `server` for the Node.js backend.

## Prerequisites
Before you start, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation
To get the application running, you need to install dependencies for both the client and the server.

### Setting up the Server
Navigate to the server directory from the project root and install its dependencies:
```bash
cd server
npm install

```
### Configuring CORS
The server uses CORS to restrict resources to the web page from another domain. If your client is running on a different port, replace the origin in the CORS configuration which is in `server/app.js`:
```bash
app.use(
  cors({
    origin: "http://localhost:3001" // Replace with the port where your React app is running
  })
);
```

### Setting up the Client
Open a new terminal, navigate to the client directory from the project root, and install its dependencies:
```bash
cd client
npm install
```

### Running the Application
You need to run both the client and the server simultaneously in different terminal windows for the application to work fully.

### Starting the Server
In the server directory:

```bash
npm start
```

### Starting the Client
In the client directory:

```bash
npm start
```
