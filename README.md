# HackerNewsApiChallenge
Coding challenge for Nextech

# Hacker_News_App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Running Locally

Navigate to the directory below this one, Hacker-News-App/, and run:
 
> dotnet run

This will kick off the dotnet app, and tell you which port on localhost it's running (should be 5001)

## The Breakdown

The Angular frontend uses the dotnet app it's running on to hit the hackernews api. It first gets the 500 newest stories, then gets information for those stories, 10 at a time.

Each story sits in its own component, and 10 story components are shown in the News component.

Pages can be cycled through to get more information. To get the latest set of 500 new stories, the page will need to be refreshed.

## Testing

Note: This was my first time to really work in Angular, and to use Karma/Jasmine for testing. I strugged to get providers working, so these tests will fail... That being said, I am looking forward to learning more about this tech, and with more time, I have no doubt I can master this testing.

Navigate to Hacker-News-App/ClientApp/ and run:

> npm run ng test

This will run the tests created.
