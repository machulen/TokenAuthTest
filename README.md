# Token Authorization Test

This is an API written with Express that can authenticate users and store them in your db.

### Technologies used:
* Node.js
* Express.js
* Mongodb
* mongoose
* bcrypt
* JWT

* The API allows users:
   * To register
   * To Login
   * To Logout

* The API passes all integration tests: ```npm test```

# Setup

Of course, you need MongoDB installed.
Clone the repo and install its deps: ```npm i```
Then change your secret in ```config.js``` file and don't commit it with GIT :)