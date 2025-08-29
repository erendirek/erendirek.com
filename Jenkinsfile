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
        stage ("Deploy") {
            steps {
                sshagent(["erendirek.com-pipeline-ssh-key"]) {
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@18.184.86.69 /home/ec2-user/Desktop/erendirek.com/compose-down.sh'
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@18.184.86.69 /home/ec2-user/Desktop/erendirek.com/compose-up.sh'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}