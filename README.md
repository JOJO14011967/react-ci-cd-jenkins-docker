React CI/CD with Jenkins & Docker

This project demonstrates a complete CI/CD workflow for a React application, integrating GitHub, Jenkins, and Docker to automate build, containerization, and deployment processes. 
GitHub

🚀 Overview

This repository includes a sample React application configured to:

Build and package the React app with Docker

Automate CI/CD via Jenkins on each commit/push

Deploy updated container images automatically

This setup helps streamline development workflows by minimizing manual build/deploy steps, ensuring that changes are automatically tested and deployed.

| Technology  | Purpose                          |
| ----------- | -------------------------------- |
| **React**   | Front-end application            |
| **Vite**    | Fast development & build tooling |
| **Docker**  | Containerization of the app      |
| **Jenkins** | CI/CD orchestration              |
| **GitHub**  | Source control                   |

📁 Repository Structure
├── public/                   # Static files
├── src/                      # React source code
├── .gitignore                # Files ignored by git
├── Dockerfile                # Instructions to build Docker image
├── README.md                 # Project documentation (this file)
├── package.json              # Project config & dependencies
├── vite.config.js            # Vite configuration
└── ...                       # Other config files

🔧 Prerequisites

Before running the project, make sure you have the following installed:

Node.js & npm

Docker & Docker CLI

Jenkins server configured with Docker permissions

GitHub repository linked to Jenkins for webhook triggers

🛠 Setup & Run Locally

Clone the repository

git clone https://github.com/JOJO14011967/react-ci-cd-jenkins-docker.git
cd react-ci-cd-jenkins-docker


Install dependencies

npm install


Start the React app locally

npm start


— Your app should be available at http://localhost:3000 (default).

📦 Building with Docker

Build the Docker image

docker build -t react-ci-cd-app .


Run the image

docker run -p 80:80 react-ci-cd-app


You should see your React app running inside a Docker container.

🤖 Jenkins CI/CD Pipeline

To fully automate build and deployment:

Configure your Jenkins server

Install required plugins: Docker Pipeline, GitHub Integration, NodeJS, etc. 
Medium

Add GitHub webhook

Trigger Jenkins build on push events

Create a Jenkinsfile

Add stages for:

Checkout code

Install dependencies

Build app

Build Docker image

Push Docker image (optional)

Deploy to environment

Run the CI/CD pipeline

Jenkins will now build & containerize the app on each GitHub push automatically.

(Tip: Use a Jenkins Blue Ocean interface for easier pipeline visualization.) 
Yatis

📝 Notes

Vite is used for faster bundling & dev server.

You can expand this to multi-environment deployment (e.g., staging, production).

Use Docker Hub / AWS ECR to store built images for production workflows.

📄 License

This project is open-source — feel free to adapt it for learning or production use.

📌 References

Learn more about setting up CI/CD for React with Docker and Jenkins:

Streamlining React Deployment with Docker & Jenkins – (Medium guide)
