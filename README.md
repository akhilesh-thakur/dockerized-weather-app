# Dockerized Weather App

This is a simple weather app built with Express.js and Dockerized for easy deployment.

## Prerequisites

- Docker Desktop installed
- Node.js installed

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/akhilesh-thakur/dockerized-weather-app.git
    cd dockerized-weather-app
    ```

2. Build the Docker image:

    ```bash
    docker build -t dockerized-weather-app .
    ```

3. Run the Docker container:

    ```bash
    docker run -p 3000:3000 dockerized-weather-app
    ```

4. Visit http://localhost:3000 in your web browser.

## Docker Hub

The Docker image is available on Docker Hub: [akhileshthakur/dockerized-weather-app](https://hub.docker.com/r/akhileshthakur/dockerized-weather-app)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
