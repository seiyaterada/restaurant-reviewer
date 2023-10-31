# restaurant-reviewer
This is a restaurant review application where users can submit their reviews for a restaurant and the review will be saved and classified as either positive or negative using Cohere's classification AI. The user can then view all the reviews for a restaurant and see the overall sentiment of the reviews.

The application was built so that it can be used by my families business to help them get feedback from their customers and see what they can improve on.

## Getting Started
This application can be run locally using docker. To run the application locally, you will need to have docker installed on your machine. You can find instructions on how to install docker [here](https://docs.docker.com/get-docker/).

Once you have docker installed, you can run the following command to start the application:
```bash
docker-compose up
```

This will start the application and you can access it at http://localhost:3000

## Architecture
The application is built using a microservice architecture. The frontend is built using React and the backend is built using Node.js and Express. The frontend and backend are separate services and are containerized using docker. The frontend and backend services are connected using a docker network.

The frontend service is built using React and uses the [Material-UI](https://material-ui.com/) library for styling. 

The backend service is built using Node.js and Express. The backend service uses the [Cohere](https://cohere.ai/) API to classify the reviews as either positive or negative. The backend service also uses a [MongoDB](https://mongodb.com) database to store the reviews.

## Future Works
In the future this application is going to be integrated into my families business website. The application will be used to get feedback from customers and see what they can improve on. The application will also be used to display reviews from customers on the website.

