pipeline {
    agent any

    environment {
        NODE_VERSION = '20'
        APP_NAME = 'my-first-react-project'
        REGISTRY = 'docker.io'
        IMAGE_NAME = "${REGISTRY}/${APP_NAME}"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    echo 'Checking out code from repository...'
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing project dependencies...'
                    sh 'npm ci'
                }
            }
        }

        stage('Lint') {
            steps {
                script {
                    echo 'Running ESLint...'
                    sh 'npm run lint'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building the React application...'
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                script {
                    echo 'Archiving build artifacts...'
                    archiveArtifacts artifacts: 'dist/**', 
                                     allowEmptyArchive: false,
                                     onlyIfSuccessful: true
                }
            }
        }

        stage('Build Docker Image') {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo "Building Docker image: ${IMAGE_NAME}:${IMAGE_TAG}"
                    sh '''
                        docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                        docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME}:latest
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo "Pushing Docker image to registry..."
                    withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                            docker push ${IMAGE_NAME}:${IMAGE_TAG}
                            docker push ${IMAGE_NAME}:latest
                            docker logout
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo 'Deploying application...'
                    // Add your deployment commands here
                    // Examples:
                    // - Deploy to Kubernetes cluster
                    // - Deploy to cloud services (AWS, GCP, Azure)
                    // - Deploy to container orchestration platforms
                    sh 'echo "Deployment step - customize based on your environment"'
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Cleaning up...'
                // Clean workspace after build
                cleanWs()
            }
        }
        success {
            script {
                echo 'Pipeline completed successfully!'
                // Send success notification (email, Slack, etc.)
            }
        }
        failure {
            script {
                echo 'Pipeline failed!'
                // Send failure notification (email, Slack, etc.)
            }
        }
    }
}
