React js project-To Do List app

**Creating Docker image using Dockerfile and running into container**
1.	Created own react js app where used dummy api for todo
2.	Created docker file for Todo List ReactJS  application
3.	Created docker image
   docker build -t todo-list-app .
5.	Run in Container
   docker run -d -p 5177:5173 todo-list-app
7. Checked in local machine on port number 5177
 ![image](https://github.com/user-attachments/assets/531e3b21-5bd0-4eba-b03b-6a82da726bf1)

**Push docker image to docker hub**
1. Add tag to image with username of DockerHub
  docker image tag todo-list-app dockerHubUsername/todo-list-app:latest
2. Push into docker hub
   docker push dockerHubUsername/todo-list-app:latest
 
**Using Docker Compose**
1. Created docker compose file
2. Pulling docker image from docker hub
3. Genarting container on AWS EC2 instance 
 
Page will be displayed on EC2 instance ip-
![image](https://github.com/user-attachments/assets/5412db39-ce90-49a2-8020-efbb3bcf6259)
 
**Pull Docker Image from DockerHub and automated deployment using jenkins**
1. Pull image from docker hub and create container and run same on EC2 instance using Jenkins deployment
Master node Assign task to server and Worker node built and deployed the app efficiently
On worker node ip address application is running.
 
**Jenkinsfile craetion**
In Jenkins pipeline groovy syntax pipeline code we can in Jenkinsfile. Use Jenkinsfile in pipeline we don’t require to write separate pipeline
