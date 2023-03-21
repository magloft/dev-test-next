The [repository](https://github.com/magloft/dev-test-next) for the assignment is public and Github does not allow the creation of private forks for public repositories.

The correct way of creating a private frok by duplicating the repo is documented [here](https://help.github.com/articles/duplicating-a-repository/).

For this assignment the commands are:

1. Create a bare clone of the repository.
    (This is temporary and will be removed so just do it wherever.)
    ```bash
    git clone --bare git@github.com:magloft/dev-test-next.git
    ```

2. [Create a new private repository on Github](https://help.github.com/articles/creating-a-new-repository/) and name it `dev-test-next`.
    > Make sure you set the repository to **private**

3. Go to Settings > Access > Collaborators and add my github handle **tobiasstrebitzer** with Read access.

4. Mirror-push your bare clone to your new `dev-test-next` repository.
    > Replace `<your_username>` with your actual Github username in the url below.

    ```bash
    cd dev-test-next.git
    git push --mirror git@github.com:<your_username>/dev-test-next.git
    ```

5. Remove the temporary local repository you created in step 1.
    ```bash
    cd ..
    rm -rf dev-test-next.git
    ```

6. You can now clone your `dev-test-next` repository on your machine.
    ```bash
    git clone git@github.com:<your_username>/dev-test-next.git
    ```
7. Create a new branch for your assignment work.
    ```bash
    git checkout -b test/<your_username>
    ```

8. You are now ready to work on your assignment. Once completed, make sure to push your changes / commits.
    ```bash
    git push origin test/<your_username>
    ```

9. Finally, create a pull request and shoot me an email so I know I can start reviewing your assignment.
    ```
    https://github.com/<your_username>/dev-test-next/compare/test/<your_username>?expand=1
    ```
