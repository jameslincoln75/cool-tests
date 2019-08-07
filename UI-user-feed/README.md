# UI-user-feed exercise

## Instructions

- Using any UI framework (or none) create a social media user feed component using the data.json file provided and the requirements below
    - Component should use data.json file to mock initial feed list items. The data is a list of feed objects that describe a user's comment or tweet.
    - Component should display each feed value and the number of likes it has in a list of feed items.
    - Component should provide a button around the number of likes for users to click an increment the number of likes for that item.
    - Component should provide a text box for a user to add another item to the feed by pressing enter
    - Component should display a count above the list of feed items of the number feed items. If new items are added this number should increment.
- After you complete the exercise, provide notes below on how your code can be ran whether it be by simply opening a index.html file or through an npm command

## Candidate Notes:
I decided to use ReactJS with Redux for this project. It seemed to be the proper 
tool for the job.

###
To run this code, you must be in the `ui-user-feed` directory:
- Run `npm install` to get the create-react-app installation going.
- After everything is installed, start the json-server: 

```npm run json:server```
 
- Finally, there was no time to debug some cross-origin issues. The script will have to be run in dev mode.

```npm start``` 

You should get a browser window the functioning app inside.


### Issues With Data
- The data elements had the same id which causes errors with ReactJS
- The Unix timestamp on the records seem to be off.

### Thinks that could be added
Of course the interface could be made to be a lot prettier. However, I'm not sure that's required for this exercise.
But there are some features it would definitely put in place if this were a real feed going into production:
 
- Debouncing to prevent accidental repeat submissions
- Animation on newly added boxes.


