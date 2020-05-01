# Salesforce Cross Platform Voice Enabled App

This application utilizes followings:
- <b>JOVO Framework</b>
    - Build and run voice enabled app that work across devices and platforms. Including Amazon Alexa, Google Assistant, mobile phones, Raspberry Pi, and more. 
    - https://www.jovo.tech/
- <b>JSforce</b>
    - Salesforce API Library for JavaScript applications (both on Node.js and web browser) 
    - https://jsforce.github.io/

## Architecture

- Node Application is hosted on Heroku Platform. 
- Jovo is the middleware between Heroku and Voice App Platform(Google Assistant, Amazon Alexa, etc.)
- Jovo builds the voice enabled app for each specified platform and deploy it via CLI commands(jovo build, jovo deploy)
- Jovo handles the requests from the voice enabled app and makes requests to Salesforce via JSForce.

![Alt text](/architecture.png?raw=true "Title")

## Demo

![Alt text](/demo.gif?raw=true "Title")

## Installation

Install the Jovo CLI globally:

```sh
$ npm install -g jovo-cli
```

Enter Your Salesforce Credentials 

```js
//src/app.js

const USER_NAME = '<YOUR SALESFORCE USERNAME>';
const PASSWORD = '<YOUR SALESFORCE PASSWORD><YOUR SECURITY TOKEN>';

```

Run Application (Local Development)
```sh
$ jovo run
```

## Useful Links
https://www.jovo.tech/docs/quickstart - Jovo Documentation

https://www.jovo.tech/blog/alexa-skill-tutorial-nodejs/ - Build an Alexa Skill

https://www.jovo.tech/blog/google-action-tutorial-nodejs/ - Build a Google Action

https://www.jovo.tech/docs/deployment - Deployment to Each Platform

https://www.jovo.tech/docs/hosting - Hosting


