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
                    def commitInfo = bat(script: 'git log -1 --pretty=format:"%%H%%n%%an%%n%%ae%%n%%s"', returnStatus: true).trim()

                    // Check if the bat command was successful
                    if (commitInfo == 0) {
                        // Split the commit information into separate variables
                        def commitHash
                        def authorName
                        def authorEmail
                        def commitMessage

                        [commitHash, authorName, authorEmail, commitMessage] = readFile('git-log-output.txt').trim().split('\n')

                        echo "Commit Hash: ${commitHash}"
                        echo "Author: ${authorName} <${authorEmail}>"
                        echo "Commit Message: ${commitMessage}"
                    } else {
                        error "Failed to retrieve commit information."
                    }
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