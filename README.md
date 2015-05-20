# MQTT Demo

> Architectural demo for the [IoT Workshop Budapest](http://www.meetup.com/IoT-Workshop-Budapest/) that shows how can you create an MQTT broker and an MQTT client in Node.js.

## Demo machine configuration

You can use the following steps to configure your demo machine after you have cloned this repository.

First, install [Node.js v0.12](http://nodejs.org).

To check whether node.js is installed correctly, open a command prompt and run the following command that displays the node.js runtime version number (e.g. `v0.12.2`):

```shell
node -v
```

Then, **if you are on Windows**, install Microsoft Visual Studio C++ 2012/2013 for Windows Desktop (Express version or full Visual Studio works well too).

Then, install [mqtt.js](https://www.npmjs.com/package/mqtt) as a global module, so it will be available directly from the command prompt:

```shell
npm install mqtt -g
```

Then, restore the other NPM packages required by our application (registered in the the `package.json` file) by running the following command in the root folder of the application:

```shell
npm install
```

On Windows run this command instead:

```shell
npm install --msvs_version=2013
```

## Running the demo

Run the application from the command prompt:

```shell
node index.js
```

The application will start up an MQTT broker on localhost:1883 and will subscribe to the `myTopicName` topic.
All messages that are sent to this topic will be printed to the console.

Open an other command prompt and run the following command to send a message to the broker:

```shell
mqtt publish -h localhost -p 1883 -t myTopicName -m "Hello IoT!"
```

Use the following command several times to start new subscribers in new command prompt windows:

```shell
cmd /k mqtt subscribe -h localhost -p 1883 -t myTopicName
```

Run the publish command again.