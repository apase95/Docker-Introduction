# 🚀 NestJS Docker Project 1

This is a basic NestJS project deployed on Docker using **pnpm**. This project is designed for learning purposes and demonstrates how to handle **Environment Variables** within a containerized environment.

## 🛠 System Requirements
- [Docker](https://www.docker.com/products/docker-desktop/) & Docker Compose
- [Node.js](https://nodejs.org/) (Optional, if running locally without Docker)
- [pnpm](https://pnpm.io/installation)

## 📂 Project Structure
- `Dockerfile`: Configuration for packaging the application.
- `docker-compose.yml`: Manages container operations and related services.
- `.dockerignore`: Specifies files to exclude during the image build process.

## 🚀 Setup and Launch Instructions

### 1. Clone the project
```bash
git clone https://github.com/apase95/Docker-Introduction/tree/main/docker-project-1.git
cd Docker-Introduction/docker-project-1

```
### 2. Launch with Docker Compose
Run the following command to automatically build and start the application:
```bash
docker compose up -d
```
The application will be accessible at: http://localhost:3000

### 3. Common Commands
|Command|Description|
|:-:|:-:|
|`docker compose up -d --build`|Rebuild the image and start a new container|
|`docker compose logs -f`|View live logs from the application|
|`docker compose down`|Stop and remove containers|
|`docker exec -it first-project sh`|Access the terminal inside the container|

## ⚙️ Environment Variables
You can customize the welcome message by modifying the `docker-compose.yml` file or passing it directly during runtime:
```yaml
environment:
  - WELCOME_MESSAGE="Hello from Github Clone!"
```
