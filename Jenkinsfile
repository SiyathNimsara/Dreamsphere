pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Jenkins to download the latest code from GitHub
                git branch: 'main', url: 'https://github.com/SiyathNimsara/Dreamsphere.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Jenkins runs the build command 
                sh 'docker build -t dreamsphere-website -f docker/Dockerfile .'
            }
        }

        stage('Deploy Website') {
            steps {
                // Stop the old website (the "|| true" prevents an error if it's not running)
                sh 'docker stop live-website || true'
                sh 'docker rm live-website || true'
                
                // Start the brand new website
                sh 'docker run -d -p 80:80 --name live-website dreamsphere-website'
            }
        }
    }
}