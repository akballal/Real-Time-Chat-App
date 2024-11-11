# Real-Time Chat App
This project demonstrates the implementation of security using Spring Boot 3.0 and JSON Web Tokens (JWT). It includes the following features:

## Features
* Create chat rooms.
* Join existing chat rooms.
* Real-time messaging with WebSocket.
* Multi-user support for each chat room.

## Tech Stack
* Frontend: React
* Backend: Node.js, Express
* Real-time communication: WebSocket
 
## Getting Started
Follow these steps to set up the project locally for development and testing.

### Prerequisites
Make sure you have the following installed:

* Node.js
* npm or yarn

### Installation
1. Clone the Repository
```bash
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

2. Install Dependencies
In both the frontend and backend directories, install the required packages:

```bash
cd client
npm install
```
```bash
cd ../server
npm install
```

3. Start the Development Servers
Open two terminal windows or tabs for the frontend and backend servers.

Backend:
```bash
cd serevr
npm start
```
Frontend:
```bash
cd client
npm run dev
```
By default, the frontend should be running at http://localhost:3000.


### Usage
Open the frontend URL in your browser (http://localhost:3000).
Create a new chat room or join an existing room.
Invite others to join the room for real-time messaging.

### Contributing
We welcome contributions! To get started:

    1.Fork the repository.
    2.Clone your fork locally.
    3.Create a new branch for your feature/fix.
    4.Commit your changes with descriptive messages.
    5.Push to your fork and submit a pull request.
