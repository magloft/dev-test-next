# @magloft/dev-test-next

> MagLoft Developer Test for React / Next.JS

## Project Introduction
* This project uses NextJS/React, GraphQL (Apollo) and (S)CSS Modules
* The pulic GraphQL API for www.themoviedb.org is used to list movies
* The GraphQL API client is already configured in `src/graphql/`

## Tasks

### Task 1: On-Scroll Pagination
* New Movie entries should be loaded then reaching the bottom of the page.
* A placeholder should be rendered while new content is being loaded

### Task 2: Movie Search
* Implement a feature that allows users to search for movies
* The search bar is located in the top navbar (right-hand side)
* The search should run automatically after 1s of debounce
* Routing should be implement via query parameters, e.g. `http://localhost:8080/search?keyword=starwars`

### Task 3: Movie Detail Page
* Clicking on a Movie should navigate to the detail page, e.g. `http://localhost:8080/movie/{id}/`
* The Detail page should show backdrop, poster, title, overview and Actor list
* The Design / Styling of the Detail Page is not important
