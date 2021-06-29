pipeline {
  agent {
    any {
      reuseNode true
    }

  }
  stages {
    stage('检出代码') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: env.GIT_BUILD_REF]],
          userRemoteConfigs: [[
            url: env.GIT_REPO_URL,
            credentialsId: env.CREDENTIALS_ID
          ]]])
        }
      }
      stage('构建') {
        steps {
          sh 'sudo docker-compose build'
          sh 'sudo docker-compose up -d'
        }
      }
    }
  }