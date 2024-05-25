# Marvel Characters App

Welcome to the Marvel Characters App! This project is a React application that allows users to discover Marvel characters, view their details, and manage a list of favorite characters. 

## Live Site

Check out the live site [here](https://main--marvel-characters-vault.netlify.app/).

## **Example**
![](https://github.com/Katterina71/MarvelCharacterVault/blob/main/react-characters-vault/public/MarvelVault.gif)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation within the application.
- **Axios**: For making HTTP requests to the Marvel API.
- **CryptoJS**: For generating secure hashes for API requests.
- **localStorage**: For persisting the list of favorite characters.
- **CSS**: For styling the application.

## Approach Taken

1. **Component-Based Architecture**: The application is built using a modular approach with reusable components, making the codebase easy to manage and extend.
2. **State Management**: The `useReducer` hook is used in conjunction with `useContext` to manage the application state, providing a centralized state management solution.
3. **API Integration**: Axios is used to fetch data from the Marvel API. Secure hashes are generated using CryptoJS to authenticate requests.
4. **Routing**: React Router is used to handle navigation between different views, including the home page, character detail pages, and the favorites list.
5. **Local Storage**: Favorites are persisted across sessions using `localStorage`, ensuring that users don't lose their favorite characters when they close the browser.
6. **Deployment**: The application is deployed on Netlify, providing continuous deployment and hosting services for the app.




## Usage Instructions

1. [**Home Page**](https://main--marvel-characters-vault.netlify.app/): Browse Marvel characters by selecting a letter from the alphabet. Click on a character's name to view their details.
2. [**Search**](https://main--marvel-characters-vault.netlify.app/search): Use the search bar to find characters by name. Press Enter or click the search button to initiate the search.
3. [**Character Details**](https://main--marvel-characters-vault.netlify.app/character/1009351): View detailed information about a character, including their series, stories, and events.
4. [**Favorites**](https://main--marvel-characters-vault.netlify.app/favorites): Add characters to your list of favorites by clicking the heart button. View and manage your favorites by navigating to the Favorites page.

## Unsolved Problems

- **API Rate Limits**: The Marvel API has rate limits that can affect the application's performance during heavy usage.
- **Incomplete Data**: Some characters may have incomplete data in the Marvel API, leading to empty fields in the character details view.
- **Mobile Responsiveness**: While the application is designed to be responsive, there may be edge cases where the layout does not display perfectly on all devices.

## Future Improvements

- **Pagination**: Implement pagination to handle large sets of characters and improve loading times.
- **Advanced Search**: Enhance the search functionality to include filters for series, stories, and events.
- **User Authentication**: Add user authentication to allow users to save their favorites across different devices.

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/marvel-characters-app.git
   cd marvel-characters-app
