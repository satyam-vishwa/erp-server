pipeline {
    agent any
    tools {
        nodejs 'nodejs'
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
                script {
                    def currentDateTime = sh(returnStdout: true, script: 'date +%Y%m%d-%H%M%S').trim()
                    sh "zip -r build_${currentDateTime}.zip dist/"
                }
            }
        }
        stage('upload to s3') {
            steps {
                script {
                    def currentDateTime = sh(returnStdout: true, script: 'date +%Y%m%d-%H%M%S').trim()
                    sh "aws s3 cp build_${currentDateTime}.zip s3://erp-server-node.js/"
                }
            }
        }
    }
}
