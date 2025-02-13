# Real-Time Chat App
A real-time chat application where users can create chat rooms, and others can join for live messaging. Built using React on the frontend and Node.js on the backend, with WebSocket for real-time communication.

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

Frontend:
```bash
cd client
npm run dev
```
Backend:
```bash
cd serevr
npm start
```
By default, the frontend should be running at http://localhost:3000.

4. Running the Application with Docker Compose
You can use Docker Compose to build and run both the client (frontend) and server (backend) services for this chat application. Make sure you have Docker and Docker Compose installed.

### Steps to Start the App
1. Build and Start Services
In the project root directory, where your docker-compose.yaml file is located, run:
```bash
docker-compose up --build
```
This command will:
* Build the Docker images for both the client and server services.
* Start both services, mapping them to your local ports.
You can access the application at http://localhost:3000.

### Usage
Access the application at http://localhost:3000.
Create a new chat room or join an existing room.
Invite others to join the room for real-time messaging.

### Contributing
We welcome contributions! To get started:

    1.Fork the repository.
    2.Clone your fork locally.
    3.Create a new branch for your feature/fix.
    4.Commit your changes with descriptive messages.
    5.Push to your fork and submit a pull request.