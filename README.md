# 🐳 Docker-Introduction

Welcome to my **Docker-Introduction** repository! This repository serves as a personal learning archive where I store various projects to practice and master Docker containerization. Throughout these projects, I am focusing on building, deploying, managing containerized applications, and understanding core Docker concepts.

## 🛠 Technology Stack
| Category | Description |
|:-:|:-:|
| **Containerization** | Docker, Docker Compose |
| **Backend Framework** | NestJS |
| **Runtime Environment** | Node.js |
| **Package Manager** | pnpm |

---

## 📂 Projects Overview

Currently, this repository contains the following mini-project. More projects will be added as my learning journey progresses.

### 1. NestJS Docker Project 1 (`docker-project-1`)
This is a basic NestJS application deployed on Docker using **pnpm**.
- **Goal:** To learn the fundamentals of Dockerizing a Node.js/NestJS application and demonstrate how to handle **Environment Variables** within a containerized environment.
- **Key Features:**
  - **`Dockerfile`**: Configuration for packaging the NestJS application into a lightweight, deployable image.
  - **`docker-compose.yml`**: Manages container operations, making it easy to spin up the service with a single command.
  - **`.dockerignore`**: Specifies files and directories to exclude during the image build process to keep the final image optimized.
  - Exposes the application on port `3000` and allows customization of a welcome message via the `WELCOME_MESSAGE` environment variable.

---

## 🚀 How to Run the Projects

### 1. Clone the repository:
```bash
git clone [https://github.com/apase95/Docker-Introduction.git](https://github.com/apase95/Docker-Introduction.git)
cd Docker-Introduction/docker-project-1
```

### 2. Launch with Docker Compose:
Run the following command to automatically build the image and start the application container in detached mode:
```bash
docker compose up -d
```
The application will be accessible at: http://localhost:3000

### 3. Common Docker Commands:
Command Description
docker compose up -d --build Rebuild the image and start a new container
docker compose logs -f View live logs from the application
docker compose downStop and remove containers
docker exec -it first-project shAccess the terminal inside the container

### 4. Environment Variables Configuration:
You can customize the application's welcome message by modifying the docker-compose.yml file or passing the variable directly during runtime:
```yaml
environment:
  - WELCOME_MESSAGE="Hello from Github Clone!"
```

---
## 📬 Contact
Email: hodtduy.work@gmail.com
LinkedIn: hodangthaiduy

---
Thank you for checking this repository!
Happy coding!