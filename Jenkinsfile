pipeline {
    agent any
    tools{
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
                sh 'zip -r $GIT_COMMIT.zip /dist'
            }
        }
        stage('upload to s3') {
            steps {
                sh 'aws s3 cp $GIT_COMMIT.zip s3://erp-server-node.js/'
            }
        }
    }
}
