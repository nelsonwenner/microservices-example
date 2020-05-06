<h1 align="center">
    MICROSERVICES - EXAMPLE
</h1>

## What is a microservice ?
#### It is a small service, which has very little responsibility, within a context that is normally large, which is our solution. The great advantage of microservices is that these systems each play their part, communicating with each other, to generate a final result. Each microservice has its own infrastructure and its own database, so each micro has to work independently.

## Warning !
#### This project is just a small example.

## System architecture

![system-architecture](https://user-images.githubusercontent.com/40550247/81175908-b42f4400-8f7a-11ea-9bb5-b23a7d07e929.png)

### Prerequisites
* Docker Compose version (1.25.4)
* Docker version (19.03.8)
* Node version (12.16.1)
* Npm version (6.14.4)

## Getting Started
1. Fork this repository and clone on your machine
2. Change the directory to `microservices-example` where you cloned it;
3. Run docker:

```bash
/* container up */

$ docker-compose up
```

4. Run migrate on microservices

```bash
/* Access containers of microservices. [product-api-container, order-api-container, auth-api-container] */

$ docker exec -it name_container /bin/bash

/* Database migrates */

$ npm run migrate
```

5. Run frontend catalog, Change the directory to `frontend-catalog`.

```bash
/* Install dependencies */

$ npm install

/* Run frontend */

$ npm start
```

6. Open frontend: The host [localhost:3333](http://localhost:3333) and start using it. Credentials.

 ```bash
 email: nelsonwenner@gmail.com 
 password: test@123
 ```

7. Open robbitMQ: the host [localhost:15672](http://localhost:15672) and start using it. Credentials.

 ```bash
 user: rabbitmq 
 password: rabbitmq
 ```

## About the project
#### The project is a small demonstration of the purchase of the product. At checkout, he initiated several communications between microservices and some checks between them. One is authentication, the other is whether the product is available from stock, keeping the data on the microservice order and validating the payment for the product, which simply changes a pending order attribute to approved. The most interesting of this example is the communication between microservices through queues. In this part, you can bring down any server connected to the queue, because the data will not be lost, you can even bring down the queue itself, because the data persists and, when it comes back, it sends messages to consumers.

## Example
#### In this example, we simulate a microservice that is connected to the queue, which in this case is micro payment service the, so when the customer checks out and checks their orders, the product will be pending. However, when we run the micro payment service again, it will process the data for that order and ultimately have an approved status.

```bash
/* Disabling the micro payment service */

$ docker stop payment-api-container

/* Starting the payment microservice */

$ docker start payment-api-container
```
---

