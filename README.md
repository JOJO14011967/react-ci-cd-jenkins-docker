React CI/CD Pipeline with Jenkins & Docker


This repository contains a sample React application configured with a full CI/CD pipeline using Jenkins and Docker. It demonstrates how to automatically build, test, containerize, and deploy your React app on every code change using a Jenkins pipeline and Docker images. The pipeline integrates with GitHub and can be extended to push to registries like Docker Hub or Amazon ECR.

The goal of this project is to show a production-ready CI/CD workflow that you can reuse or customize for real applications.

📌 Table of Contents

📁 Project Structure

🚀 Features

🛠 Prerequisites

⚙️ Setup & Installation

🔁 CI/CD Workflow

🐳 Docker

📦 Deployment Pipeline (Jenkins)

🧪 Testing

📈 Monitoring & Logs

🧾 License

📁 Project Structure
react-ci-cd-jenkins-docker/
├── public/                # Static public files
├── src/                   # React application source code
├── .gitignore             # Git ignore settings
├── Dockerfile             # Docker image build instructions
├── Jenkinsfile            # CI/CD pipeline definition for Jenkins
├── package.json           # Node project config & dependencies
├── README.md              # This file
├── vite.config.js         # Vite build config
└── ...


🚀 Features

This project demonstrates:

✅ React front-end built with Vite
✅ Automated build & test stages
✅ Docker containerization
✅ Jenkins CI/CD pipeline triggered on GitHub pushes
✅ Easy to extend to deploy to Docker Hub / AWS / Kubernetes

🛠 Prerequisites

Make sure you have the following installed and configured:

T| Tool                        | Purpose               |
| --------------------------- | --------------------- |
| GitHub                      | Source control        |
| Jenkins                     | CI/CD automation      |
| Docker                      | Container build & run |
| Node.js & npm               | Local development     |
| (Optional) Docker Hub / ECR | Image repository      |
| (Optional) AWS / Hosting    | Deployment target     |


⚙️ Setup & Installation
1. Clone the Repository
git clone https://github.com/JOJO14011967/react-ci-cd-jenkins-docker.git
cd react-ci-cd-jenkins-docker

2. Install Dependencies
npm install

3. Local Development

Start the development server:

npm start


Your React app should be running on http://localhost:3000
.

🐳 Docker Image
Build Docker Image

This creates a Docker image of your React app.

docker build -t react-ci-cd-app .

Run Docker Image
docker run -p 80:80 react-ci-cd-app


Now, navigate to **http://localhost**—your
 containerized app should be running.

🔁 CI/CD Pipeline (Jenkins)

The Jenkinsfile in this repo defines an automated pipeline with the following stages:

1. Checkout

Pull the code from GitHub on every push.

2. Install & Build

Install dependencies and build the React app.

stage('Build') {
  steps {
    sh 'npm install'
    sh 'npm run build'
  }
}

3. Docker Build & Tag

Build a Docker image using the Dockerfile.

stage('Docker Build') {
 steps {
   sh 'docker build -t react-ci-cd-app:${env.BUILD_NUMBER} .'
 }
}


Push to a registry (optional):

sh 'docker push myregistry/react-ci-cd-app:${env.BUILD_NUMBER}'

4. Deploy

Deploy the Docker image to your deployment target (EC2, ECS, Kubernetes, etc.).

Note: You can customize the “Deploy” stage based on where you want to host the app.

🧪 Testing

Before build and deploy steps run, you can include a test stage:

stage('Test') {
  steps {
    sh 'npm test'
  }
}


This helps ensure that only quality code gets deployed.

📈 Logs & Monitoring

Jenkins provides a build console log for each pipeline run.

You can also integrate:

SonarQube for code quality

Prometheus / Grafana for metrics

Trivy / Clair for Docker image scanning

🧾 License

This project is open-source — feel free to adapt it for learning or production use.

🔍 Additional Resources

To learn how similar CI/CD workflows are built for Docker and ECS, see the AWS sample project: Continuous Delivery Pipeline for Amazon ECS Using Jenkins, GitHub, and Amazon ECR 
GitHub
