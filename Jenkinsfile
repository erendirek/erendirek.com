pipeline {
    agent any

    stages {
        stage ("Build") {
            steps{
                withCredentials([usernamePassword(credentialsId: "docker-hub-creds", usernameVariable: "DOCKER_USER", passwordVariable: "DOCKER_PASS")]) {
                    sh """
                    echo '$DOCKER_PASS' | docker login -u '$DOCKER_USER' --password-stdin
                    docker build -t $DOCKER_USER/erendirek.com:latest .
                    docker push erendirek/erendirek.com:latest
                """
                }
            }
        }
    }
}