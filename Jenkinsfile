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
                    // Get the commit details using git command
                    def commitInfo = sh(script: 'git log -1 --pretty=format:"%H%n%an%n%ae%n%s"', returnStdout: true).trim()

                    // Split the commit information into separate variables
                    def commitHash
                    def authorName
                    def authorEmail
                    def commitMessage

                    [commitHash, authorName, authorEmail, commitMessage] = commitInfo.split('\n')

                    echo "Commit Hash: ${commitHash}"
                    echo "Author: ${authorName} <${authorEmail}>"
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