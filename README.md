## Collaborators

Sofia Vaca Narvaja (svacanar)
Jitpuwapat Mokkamakkul (earth15354)

## Github Repository

https://github.com/earth15354/mock-earth15354-sxfiavn/tree/main

## Project Description

For this project we created a command line application that allows users to load a file, view the file, and search the file. The application is written in JavaScript and uses Node.js. Since we aren't using a real database + parsing a real file, we created a mock file to test our application (mockedJson.js)

## How to run the code

- Run `cd mock` to make sure you are in the mock directory of the project and some users may need to run `npm install` once they are in the mock directory.
- Once deployed (by running `npm start` in the 'mock' directory), the application can be accessed at `localhost:3000` in the browser.
- These are the potential commands users are able to run:
  - load_file < valid file path>: to load the file at that path
    - Example: "load_file hi" will load [["h", "i"], ["h","o"]]
  - view: to view the last file the user loaded
    - Example: "view" will display [["1-letter", "2-letter"], ["h", "i"], ["h","o"]]in table format
  - search: to search the last file the user loaded
    - Example: "search "2-letter" "o"" will display [["h","o"]] (the row containing the target character.)

## How to run the tests
- Run `npx playwright test` in the terminal and if the user wants extra results, then they 
can run `npx playwright show-report`

## Test Coverage Report

## Potential Bugs
When a file path that was too long was passed into the load csv, the application wasn't able to read it in correctly.  We suspect there is a limit to the length a command line argument can store, so the program wasn't able to store the whole file path. When we changed the file path to be shorter in our mocked data file (mockedJson.ts), this error was no longer present. We have the original file path used still commented in the code.

The command line arguments are currently parsed with spaces. This is functional for most cases, but when CSV files have headers or values that contain spaces, it currently is difficult for our program to handle such inputs. We tried using regex to parse the arguments more precisely, but we were not able to get a working regex expression in time. The regex we used is commented out in "REPLInput.tsx".