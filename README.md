# @magloft/dev-test-next

> MagLoft Developer Test for React / Next.JS

## Project Introduction
* This project uses NextJS/React, GraphQL (Apollo) and (S)CSS Modules
* The pulic GraphQL API for www.themoviedb.org is used to list movies
* The GraphQL API client is already configured in `src/graphql/`

## Tasks

### Task 1: On-Scroll Pagination
* New Movie entries should be loaded then reaching the bottom of the page
* A placeholder should be rendered while new content is being loaded

Technical Briefing:
* Using a infinite scroll library is encouraged, e.g. `react-infinite-scroll-hook`.
* The GraphQL API uses cursor-based pagination. New records can be loaded by passing the previous `pageInfo.endCursor` as the `after` variable when making list requests.
* Make sure to handle the case when the list ends (e.g. `hasNextPage` is `false`).
* Make sure to avoid race conditions, and sending the same request multiple times.

### Task 2: Movie Search
* Implement a feature that allows users to search for movies
* The search bar is located in the top navbar (right-hand side)
* The search should run automatically after 1s of debounce
* Routing should be implement via query parameters, e.g. `http://localhost:8080/search?keyword=starwars`

Technical Briefing:
* This task doesn't require infinite scroll / loading more results. Loading the first 20 search results is sufficient.
* You can use the `search` GraphQL query, passing the `term` variable.
