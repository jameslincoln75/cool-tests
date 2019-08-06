# PS-get-deep-property exercise

## Instructions

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
- After you complete the exercise, provide any notes on your code below such as how to run your example

## Candidate Notes:

Load the html file in a browser. Type in the dot-separated path you wish to search. Hit enter to activate the search.

- I created a simple interface to present the recursive search functionality required to search throw 
the nested object.

- I also added a second nested object to the original in order in sure the search can take multiple paths.
