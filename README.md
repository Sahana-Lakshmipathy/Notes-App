# Todo List Web Application

This is a Dockerized Todo List web application. You can run it locally using Docker by pulling the pre-built image from Docker Hub.

---

## **Steps to Run the Application**

### **1. Prerequisites**
- Ensure you have [Docker](https://www.docker.com/get-started) installed on your system.

---

### **2. Pull the Docker Image**
Run the following command to pull the image from Docker Hub:

```bash
docker pull sahanalakshmipathy/todolist:latest
```
### **3. Run the Docker Image**

Run the subsequent command to run the application.

```bash
docker run -d -p 5173:5173 --name todolist sahanalakshmipathy/todolist:latest
```
---

### **4. Access the Webapage**
Once the container is running, open your browser and navigate to:
```bash
http://localhost:5173
```
---
