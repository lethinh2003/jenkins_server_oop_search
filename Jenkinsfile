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
        stage('Review and Merge') {
            steps {
                script {
                    def prDetails = httpRequest(
                        acceptType: 'APPLICATION_JSON',
                        authorization: 'Bearer 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',
                        contentType: 'APPLICATION_JSON',
                        httpMode: 'GET',
                        url: "https://api.github.com/repos/lethinh2003/jenkins_server_oop_search/pulls/${env.CHANGE_ID}"
                    )

                    def reviewers = prDetails.requested_reviewers
                    def approvals = prDetails.reviews.findAll { it.state == 'APPROVED' }

                    if (reviewers.size() >= 2 && approvals.size() >= 2) {
                        // Both reviewers have approved the pull request
                        echo 'All reviewers approved. Merging pull request...'
                        // Add your merge steps here
                    } else {
                        echo 'Not enough approvals or reviewers yet.'
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