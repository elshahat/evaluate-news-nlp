# Evaluate news articles/blog posts with "Natural Language Processing"

## Project Summary

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Tools used to run and develop the App:
* NodeJS for the Webserver.
* ExpressJS for routing.
* Webpack as the build tool and configured for the development and production environments.
* Jest to test our app functionality.


## How to run the App?
cd into your App directory and then run:

`npm install` or `sudo yarn`

### Run the App in development mode:
To start the webpack dev server at port 8080

` $ npm run build-dev`

### Run the App in production mode:
Generate the dist files and then start server at port 8081

` $ npm run build-prod`

` $ npm run start`

### Testing the App:
You can test the functionality of the app by running

` $ npm run test`

## Setting up the API

### Step 1: Signup for an API key
You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK.

### Step 2: Update the App with the API Key
Create a new .env file in the root of your project and  fill it with your onw API Key
```
API_KEY=**************************
PORT=8081
```
