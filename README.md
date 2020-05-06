<h1 align="center">
    MICROSERVICES - EXAMPLE
</h1>

## What is a microservice ?
#### It is a small service, which has very little responsibility, within a context that is normally large, which is our solution. The great advantage of microservices is that these systems each play their part, communicating with each other, to generate a final result. Each microservice has its own infrastructure and its own database, so each micro has to work independently.

## Warning
#### This project is just a small example, microservices is much more than that.

## System architecture

![system-architecture](https://user-images.githubusercontent.com/40550247/80425353-da3d5000-88b9-11ea-81eb-9dfb1722aae6.png)

### Prerequisites
* Docker Compose version (1.25.4)
* Docker version (19.03.8)
* Node version (12.16.1)
* Npm version (6.14.4)

## Getting Started
1. Fork this repository and clone on your machine
2. Change the directory to `microservices-example` where you cloned it;
3. Run docker, :

```bash
/* container up */

$ docker-compose up -d

/* List container names */

$ docker ps

/* Access containers of microservices. [product-api-container, order-api-container, auth-api-container] */

$ docker exec -it [name_container] /bin/bash

/* Database migrates */

$ npm run migrate
```

