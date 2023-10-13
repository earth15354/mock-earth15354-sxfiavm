## Collaborators

Sofia Vaca Narvaja (svacanar)
Jitpuwapat Mokkamakkul (earth15354)

## Github Repository

https://github.com/earth15354/mock-earth15354-sxfiavn/tree/main

## Project Description

For this project we created a command line application that allows users to load a file, view the file, and search the file. The application is written in JavaScript and uses Node.js. Since we aren't using a real database + parsing a real file, we created a mock file to test our application (mockedJson.js)

## How to run the code

- Once deployed (by running `npm start` in the 'mock' directory), the application can be accessed at `localhost:3000` in the browser.
- These are the potential commands users are able to run:
  - load_file < valid file path>: to load the file at that path
    - Example: "load_file hi" will load [["h", "i"], ["h","o"]]
  - view: to view the last file the user loaded
    - Example: "view" will display [["1-letter", "2-letter"], ["h", "i"], ["h","o"]]in table format
  - search: to search the last file the user loaded
    - Example: "search "2-letter" "o"" will display [["h","o"]] (the row containing the target character.)

## How to run the tests

## Test Coverage Report

## Potential Bugs
When a file path that was too long was passed into the load 
