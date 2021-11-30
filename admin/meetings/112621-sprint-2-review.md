# Team 22x Group 22 Meeting Notes

## Meeting Type: Sprint Review 2 Meeting

## Date: 11/16/21

## Location/Time of Meeting: Zoom 2:32 pm

### Attendance

- David Em-Yinn
- Emily Ekaireb
- Fangqi Yuan
- Samantha Lin
- Mitchell Herbert
- Justin Lee
- Elliot Chung
- Egor Pustovalov

### Not in Attendance
- Dennis Zhao
- Joey Dang


### Agenda

- Unresolved business
- New Business
- Sprint Review
- Items on the agenda that are not discussed

### Sprint Review / Status Update by page

#### Home Page / Explore  (Dennis, Fangqi, Samantha, Emily)

- What was done
  - Made an interface with the local storage that stored the recipe id and holds the lists for favorites
  - Created a side bar skeleton
  - Made the hearts colored correctly 
- What we planned to complete that we did not yet get to
  - Add filters on the side bar
  - Refactor and change what we store in local storage (objects containing the recipe card preview info)
- Challenges faced
  - Trying to store objects in the local storage

#### Recipe Page (Fangqi, Elliot)

- What was done
  - Added next step and highlight current step
  - Styled ingredients and equipment sections
  - Made the drop down work
  - Added the favoriting functionality on the recipe page
- What we planned to complete and did not yet get to
  - N/A
- Challenges faced
  - The placement of the button was hard to code

#### Search Page (Justin)

- What was done
  - Added next and previous page button
- What we planned to complete but did not yet get to
  - N/A
- Challenges
  - We had to change the scroll to a next page button because the scroll wasn't working correctly

#### Favorites Functionalty / Favorites Page (Mitchell, Egor, Fangqi, Emily, Dennis, Elliot, Samantha, Justin)

- What was done
  - Added dropdown menu HTML/CSS
  - Made the dropdown hover over other content which is why we don't need the scroll
  - Edit mode (moving and deleting recipes, currently buggy)
  - Made the dropdown menu dynamically change what is displayed based on user lists
  - Made a user list web component that shows a favorites list on a page
  - Entire favorites functionality works on other pages
  - Unhearting deletes recipes (buggy)
  - Created a service worker
- What we planned to complete and did not yet
  - Move mode
  - Deleting a list
  - Fix bugs with unhearting
- Challenges faced
  - Working with local storage 
  - Have to be unstyled to work correctly for dropdown
  - State machine for all buttons

#### CI/CD Pipeline (Emily, David, Joey)

- What was done
  - Deployed the website on Netlify
  - Fixed all the styles with linting and prettier scripts
  - Started writing E2E test cases (homepage and searchpage)
  - Redesigned our diagram
- What we planned to complete and did not yet
  - All the E2E tests
- Challenges faced
  - Figuring out how to deploy with API key hidden
  - Accessing elements through the testing environment

### When the meeting finished

3:10 pm
