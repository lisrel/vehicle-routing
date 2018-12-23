

1.Restoring the database
-create a database planning_engine in postgres and add the postGIS extension(CREATE EXTENSION postgis)(use "admin" as password)
-Right click the created database and click restore + navigate to the file planning_engine.backup
 
2.Install Node.js
NodeJS is an event-driven I/O server-side JavaScript environment that allows for JavaScript to operate on the server. In practice, for us, when you install on your development or production server, it allows a more seamless interface with your backend, allowing for connections to databases, creation of APIs, and data-driven maps and visualizations.

A NodeJS app has the basic following workflow.

*   _Import required modules_ - We use require directive to load a Node.js module.
*   _Create server_ - A server which will listen to client's request similar to Apache HTTP Server.
*   _Read request and return response_ - server created in earlier step will read HTTP request made by client which can be a browser or console and return the response. With these requests, various tasks can run. This can be page creation, content manipulation, database queries, and the creation of maps or visualizations.

To install Node, download it from the [Downloads page on the NodeJS homepage](https://nodejs.org/en/download/). Choose the operating system you are working on. You can install the most current version.


3.Setup for use in a PC
-unzip the package
-open the cmd and navigate to the unzipped folder
- run npm install

4.testing the app
To test your application, in your project folder (i.e. the base level that contains **app.js**), start your application using:

```
npm start
```

Navigate then to [http://localhost:3000](http://localhost:3000). You should see a basic 'Welcome to Express' page. If so, you are in business and we have a working application!

Stop your Node Server in terminal using **CTRL-C**.
-to view independent .ejs views, use  http://localhost:3000/"name".ejs

