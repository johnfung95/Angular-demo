# Description to app
- It is a simple form app that allows user to input data from the contact form and send to the database.
- It provides instant feedback in the browser through add and delete button function.
- The data schema is stored under the "models" folder.

---

# Pre-requisite
1. Mongodb-community
  - to start the mongodb database
2. Node Js
3. Nodemon
  - to start the app.js act as server
4. Express Js
5. Angular cli
  - to run the angular client app

---

# Procedures
- The following procedures are used in the mac os environment only.
1. With homebrew, run `brew services start mongodb-community`.
2. Once mongodb is started, go into the "mean-app" folder and start the server with `nodemon`. The port 3000 is used.
  - if the connection is sucessful, the log should present with "Server started at port: 3000" and "Mongo Db connected successfully".
3. After the connection successful, go to the "client" folder and start the app by `ng serve --open`, it would open the port at 4200.
