pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t devops-app .'
      }
    }
stage('Push Image') {
  steps {
    sh 'docker push localhost:5000/devops-app:v1'
  }
}

  }
}

