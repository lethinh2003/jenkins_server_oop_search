pipeline {
    agent any
    
    tools {nodejs "NodeJS"}
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Get Commit Information') {
            steps {
                script {
                    // Get the commit message using GIT_COMMIT
                    def commitMessage = bat(script: 'git log -1 --pretty=format:%s', returnStdout: true).trim()

                    echo "Commit Message: ${commitMessage}"
                }
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