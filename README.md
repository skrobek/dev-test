# Currency API Task

## Prerequisites
* Install [Docker](https://www.docker.com/) on your system.
* Install [Docker Compose](http://docs.docker.com/compose/) on your system.


## Setup
Run `docker-compose build`. It will pull a base image from the Docker registry and install dependencies from npm.


## Start
Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 3000 (On OS X you can use `boot2docker ip` to find out the IP address).

### Available endpoints
* `/api/ratio/:currenyCode1/:currencyCode2`
 * method: `GET`
 * params: `currenyCode1` and `currencyCode2` must be a string from available currency codes
 * response:
   * `200`: `JSON` with the ratio between currencies
   * `500`: in case of wrong currency codes
 * example request: `/api/ratio/PLN/EUR`

## Tests
To run tests use: `docker-compose run web mocha app/test`


# Technical Task
* Add new controller with new routing path (for currencies codes),
* Load it in `server.js` file,
* Load `.csv` (from `assets` folder) file inside controller,
* Expose results as a `JSON` response
 * `200` - currency name
 * `500` - wrong currency code
