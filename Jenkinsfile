pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    environment {
        // Get the current date and time when the pipeline starts
        CURRENT_DATETIME = sh(returnStdout: true, script: 'date +%Y%m%d-%H%M%S').trim()
    }
    stages {
        stage('print versions') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('zip Artifacts') {
            steps {
                sh "zip -r build_${env.CURRENT_DATETIME}.zip dist/"
            }
        }
        stage('upload to s3') {
            steps {
                sh "aws s3 cp build_${env.CURRENT_DATETIME}.zip s3://erp-server-node.js/"
            }
        }
    }
}
