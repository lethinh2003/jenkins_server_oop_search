pipeline {
    agent any
    
    tools {nodejs "NodeJS"}
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Packages') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    bat 'npm run test'
                }
            }
        }
    }
}