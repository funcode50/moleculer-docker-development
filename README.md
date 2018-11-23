# Moleculer Services Development Environment

Moleculer is a very powerful microservice development tool, but getting up to speed if you've never built microservices before can be a bit complex.

This repo is designed to short cut your ability to get up to speed by giving you a simple local development enviroment to get started using Moleculer with Docker.

# What's in this repo:
* Two simple Moleculer services.
* The official Moeleculer API gateway to route calls to the appropriate service.
* A full docker-compose example that spins up containers for each service along with containers for Redis, Postgres DB, and Traefic for rapid development.
* Hot reloading of your Moleculer services for faster development.


# To get started:
* Install Docker
* Clone this repo
* npm install
* docker-compose up
* Visit http://localhost:3000/api/serviceOne/askServiceTwo to see one microservice talk to another.
* Open up serviceTwo.service.js and change the "askServiceTwo" function to return something else. Save this file.
* Revisit http://localhost:3000/api/serviceOne/askServiceTwo and see that your change has been hotreloaded. 

# What is happening at a high level:
* We've got an api gateway setup that calls our services.
* By visiting http://localhost:3000/api/serviceOne/askServiceTwo, the api gateway is calling serviceOne's function "askServiceTwo."
* serviceOne in turn calls a function from serviceTwo named "respondToServiceOne."
* When serviceOne recieves the response from serviceTwo, the api gateway returns the response to the browser.

# Moleculer's Magic:
If you've ever worked on a microservices project you'll know that "service discovery" and messaging between services are two of the most common challenges to getting started.

Moleculer solves both of these problems out of the box by using a transport mechanism for both service discovery and messaging between services. 

In this repo we use Redis, but Moleculer supports several other transport layers out of the box.




