# Server Status Workshop

## How to run the project

* Set NodeJS version with NVM: `nvm use`
* Install dependencies: `npm install`
* Run the application: `npm start`
* Run the tests: `npm test`

## Workshop activity

We are going to develop a simple server that responds with the machine resources status in order to be able to monitoring it.

### 1. Clone the project, look what it's inside, and run the scripts

The first task consists of cloning the project, install the dependencies, and verify that the scripts run properly.

Expected result:

```
╭─  ~/Projects/NodeJS workshops/server-status 
╰─ npm start

> nodejs-typescript-base@0.0.0 start
> ts-node ./src/index.ts

Hello World!

╭─  ~/Projects/NodeJS workshops/server-status 
╰─ npm test

> nodejs-typescript-base@0.0.0 test
> jest

 PASS  src/index.spec.ts
  the sum operator
    ✓ Sums 2 numbers (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.116 s
Ran all test suites.
```

### 2. Create a HTTP server

In this step, we are going to create a HTTP server using the `http` NodeJS module:

* When the server starts, it must show a message indicating at what port is listening.
* When the server gets a request, it responds with `{data: 'HelloWorld'}`.

Expected result:

```
╭─  ~/Projects/NodeJS workshops/server-status 
╰─ npm start

> nodejs-typescript-base@0.0.0 start
> ts-node ./src/index.ts

Server listening at port 3001
```

```
╭─  ~
╰─ curl http://localhost:3001

{"data":"Hello World!"}
```

### 3. Add coloured logs

Now that we have the server up and running, the next step is have a nice log in order to see the incoming requests. For that, we are going to use the `chalk` package (version 4) to show the request method and url.

Expected result:

![coloured logs](/imgs/coloured-logs.png)

### 4. Add the server status in response

We are ready to get some information about the machine resources so we are going to use the `os-utils` package in order to retrieve information about:

* Total memory
* Free memory
* CPU count
* CPU usage percentage

Expected result:

![server status](/imgs/server-status.png)

### 5. Write log in a file

We are going to use another NodeJS module in order to write the information about received requests into a log file. For every request received in the server we are going to append a line to a `server.log` file with the following information:

* Date and hour
* HTTP Method
* URL

Expected result:

![log file](/imgs/log-file.png)

### 6. Crate modules for utilites

Now we have all our code in a single file like a spaghetti, so lets split it in different files. We are going to create a file for each utilitity:

* `addLogToLogFile.ts`
* `getServerStatus.ts`

### 7. Handle only /status request

Our server responds the same in all urls. In the next step we are going to make the server respond 404 unless the url is `/status`. Also, we are going to move al the code about the `/status` handling to `/routes/status.ts`.
