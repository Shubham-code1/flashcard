
### Project Title

FlashCard Generator


### Project Features  

### Navbar:-
        The application features a navigation bar with two links:
        Create Card: Allows users to create new flashcards.
        My Flashcards: Navigates to a page displaying all the created flashcards.

### Flashcard Creation:-
        Group Section: Users are required to fill out the primary group details, including group name and description.
        Term Card Section: Allows users to dynamically add term cards to the group.
        Optional Photos: Users can optionally add photos to the group and term cards.
        Alert Message : - An alert message will be shown for successfull card creation.
        
### Validation:-
        The flashcard creation process includes validation rules to ensure data integrity:
        Group name and term name must have a minimum of 5 characters.
        Group description should be between 50 and 160 characters.
        Term description should be between 50 and 400 characters.

### My Flashcards Page:-
        Displays all the created flashcards with their associated group name, description, and number of term cards.
        View Button: Navigates to a page showing all the term cards associated with the selected flashcard.
        Delete Button: Allows users to delete the flashcard from the list.
        Confirm message: After clicking the delete button an confirm box will be pop-up to ensure the user's final desire to delete the particular card.

### Show More / Show Less button:-
        This button is always positioned beneath the top right corner of NavBar.
        This button will only be present in FlashCards Component. 
        While scrolling button itself will hide automatically to give a good user experience by avoiding its permanent presence over the card, which can be noticed in mobile view.
        This enables the user to show the more or less card, regardless of where the user is on the page.

### Term Card Page:-
        Displays the selected flashcard's group name and description.
        Lists all the term cards associated with the flashcard.
        Selecting a term card shows its associated photo, name, and description.
        Share Button: Opens a modal window for copying the flashcard link.
        The modal includes clipboard copying functionality to copy the link.

### Modal :- 
        Share button available in TermCard Page will open a Modal structure containing different buttons with social media icons.
        by clicking on buttons it will display a link in input box, this link can be copied to clipboard by clicking the button right to the input box.
        An alert message will be displayed after succesfull copy of the link.


## Technologies Used:-

- HTML5 and CSS3: Markup and styling of the application.
- JavaScript: Programming language used for client-side functionality.
- React: JavaScript library for building user interfaces.
- npm: Package manager for installing and managing project dependencies.

## Dependencies:-

The following dependencies were used in the project:

- Formik: Library for building forms in React.
  - Version: 2.4.1

- React: JavaScript library for building user interfaces.
  - Version: 18.2.0

- React DOM: Entry point for working with the DOM in React.
  - Version: 18.2.0

- React Icons: Library for using icons in React applications.
  - Version: 4.9.0

- React Redux: Official Redux bindings for React.
  - Version: 8.0.7

- React Router: Library for routing in React applications.
  - Version: 6.12.1

- React Router DOM: DOM bindings for React Router.
  - Version: 6.12.1

- Yup: JavaScript schema builder for value parsing and validation.
  - Version: 1.2.0

- "@reduxjs/toolkit": A comprehensive set of Redux utilities and abstractions for simplified state management.
  - Version : 1.9.5

## Dev-Dependencies:-

-  "gh-pages":  simplifies the process of deploying React applications to GitHub Pages
  - Version : "^5.0.0"

# React-Router components used
- Hashrouter
- Routes
- Route
- NavLink

# React-Router hook used - 
- useNavigate

# React-Redux hook used - 
- useDispatch 
- useSelector 

# React hooks used -
- useState
- useEffect

# Data-storage - 

# LocalStorage API

- The project utilizes the Local Storage API, a browser-based data storage mechanism, to store and retrieve the     flashcard data locally within the user's browser.

# for deployment 

 gh-pages 

 

