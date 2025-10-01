## DEPENDENCIES INSTALLED
### CLIENT
- react-router-dom
- styled-components
### SERVER
- express
- cors
- dotenv

### MISTAKES
- `server/.env` was committed with sensitive information

### FUTURE FEATURES
- Favorite movie indicator on MovieCard on the home page
- 'Save as favorite' button disabled and text converted to already a favorite in MovieDetails
- 
-------------------------------------------------------------------------------------------
### REQUIREMENTS ###
[x] Movie List Display:
  Retrieve and display a list of trending movies from the TMDB API.
[x] Movie Details Navigation:
  Implement navigation to a detailed information page for a selected movie using the /movie/{movie_id} endpoint.
[x] Favorite Movies:
  Enable users to mark movies as favorites, storing this information
  locally and ensuring persistence across sessions.

### CACHING (nice to have) ###
[x] Implement caching for the trending movie lists to ensure movies are
fetched once and stored locally, improving performance.

### ERROR HANDLING ###
[] Gracefully handle API errors by displaying appropriate error
messages or fallbacks when the network is unavailable, or the API returns an invalid response.

### SOFTWARE ARCHITECTURE ###
[x] Adhere to SOLID principles and demonstrate sound software
architecture throughout the implementation.
-------------------------------------------------------------------------
### GUIDELINES ###
### DESIGN FLEXIBILITY ###
[?] Use the provided mocks as guidance and feel free to adapt as
needed.
[x] You may use any third-party libraries you deem necessary but
avoid overuse. Be prepared to explain your choices.
[x] Ensure that your TMDB API key is securely handled. Avoid
hardcoding the key in your codebase.
-------------------------------------------------------------------------
### API ENDPOINTS ###
[x] Fetch popular or trending movies: '/trending/movie/{day or week}'.
[x] Fetch movie details: '/movie/{movie_id}'

* Refer to poster path guide for images, "poster_path" in the TMDB API response for each movie to prepend the base URL.
"https://developer.themoviedb.org/docs/image-basics"
-------------------------------------------------------------------------
### WORK PACKAGE ###
[] Send a zip file with the entire project.
[] A video record with a step-by-step process to setup the program and a quick demo on the program.
-------------------------------------------------------------------------
### TECH REQUIREMENTS ###
[x] Application must be developed using React JS, adhering to best practices.
[] Utilize a modern, declarative approach for building the UI with smooth transitions.
[x] Application can be developed using one of Node JS / Python / Java / Go (preferred)
-------------------------------------------------------------------------
### EVALUATION CRITERIA ###
Required:
[] The solution compiles successfully. Any additional steps necessary for compilation should be clearly documented in the README.md.
[] The solution is free from crashes, bugs, and compiler warnings.
[] The code follows SOLID principles and demonstrates sound software architecture.
[] The code is clear, well-structured, and easy to understand.
[] Unit testing should be included.
[] The commit history is well-organized, consistent, and easy to follow.
-------------------------------------------------------------------------
### NICE TO HAVE ###
[] Caching mechanisms to improve performance.

### HINTS ###
[] Keep it as simple as possible!
[] Be clear in the solution and documentation.
[] Send any questions you may have, via your recruiter, with your name.