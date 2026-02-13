# audena-voice-calls

# Audena Voice Calls – Full-Stack Homework

This project is a small full-stack application built as part of the Audena technical homework. It simulates an AI-powered voice call system and demonstrates how a frontend application interacts with backend APIs and a fake external provider using asynchronous workflows.

The focus of this exercise is clarity, simplicity, and reasoning about real-world integrations rather than building a production-ready system.

## Overview

The application allows a user to:

* Create a voice call request by entering:
  * Customer name
  * Phone number
  * Workflow type (Support / Sales / Reminder)
* View a list of previously created calls
* Track the status of each call (pending, completed, failed)

No real AI or telephony services are used. Instead, a simulated provider and webhook mechanism are implemented to model real-world asynchronous behavior.

## Architecture

The project is split into two parts:

audena-voice-calls/
│
├── backend/    # Node.js + Express API
├── frontend/   # React application
└── README.md

### Backend

* Node.js with Express
* In-memory data store (no database)
* REST APIs for creating and listing calls
* Simulated external telephony provider
* Webhook endpoint to update call status

### Frontend

* React (Create React App)
* Simple form to create calls
* List view to display calls and their statuses
* Periodic polling to reflect status updates

## Call Flow

1. User submits a call request from the frontend
2. Backend creates a call with status `pending`
3. Backend sends the call to a simulated provider
4. The provider waits a few seconds and randomly marks the call as `completed` or `failed`
5. Provider calls back the backend webhook
6. Backend updates the call status
7. Frontend reflects the updated status

## How to Run the Project

### Prerequisites

* Node.js (LTS)
* npm
* clone the repository

### 1. Run the Backend

Open a new terminal:

cd backend
npm install
node index.js

The backend will start on:

http://localhost:4000

### 2. Run the Frontend

Open a new terminal:

cd frontend
npm install
npm start

The frontend will run on:

http://localhost:3000

## Notes on Implementation

* Data is stored in memory for simplicity and speed of development
* External telephony behavior is simulated using timeouts and webhooks
* Status updates are asynchronous to mirror real-world systems
* The UI is intentionally minimal and functional

## Design Decisions & Trade-offs

* **In-memory storage** was chosen to keep the system simple and focused
* **Polling** is used instead of WebSockets to avoid unnecessary complexity
* **Single repository** keeps setup straightforward for reviewers

## What I Would Improve with More Time

* Persist data using a database (SQLite or Postgres)
* Add basic authentication
* Improve error handling and retries for failed calls
* Add loading and success/error states in the UI
* Replace polling with WebSockets or Server-Sent Events
* Add tests for backend APIs

## Summary

This project demonstrates:

* Clear API and data modeling
* Asynchronous workflows with external integrations
* Pragmatic trade-offs under time constraints
* Clean, readable code with a focus on product behavior

Thank you for reviewing this submission!
