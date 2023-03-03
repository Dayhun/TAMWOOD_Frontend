# 1. git

### - Initialise a git tracking in your project folder

$ git init .

### - Check the list of untracked or modified files in that folder/project

$ git status

### - Set the repository you will start working

$ git remote add origin <github_repository_link>

### - Set the First and your last name when pushed

$ git config --global user.name "First and Last Name"

### - Set your github account email

$ git config --global user.email youremail@email.com

### - Check your account

$ git config --list

### - Check the list of branches available

$ git branch

### - Get the whole list of branches

$ git branch -a

### - Create a new branch

$ git checkout -b <branch_name>

### - Switch between branches (both commands do the same thing)

$ git checkout <branch_name>

$ git switch <branch_name>

### - Delete the branch with history

we have to leave the branch which is gonna be deleted.

$ git branch -D <branch_name>

### - Delete a branch with not history

$ git branch -d <branch_name>

### - Add the file or directory to a Git screenshot. That way, Git will see the differences

$ git add <file_name>

$ git add <directory_name>

### - Add everything that is modified or untracked

$ git add .

### - Commit your changes after adding and before pushing. Screenshot!

$ git commit -m "Your message is mandatory"

### - Push your changes to your GitHub repository

$ git push origin <branch_name>

### - Pull update your local branch

$ git pull origin <branch_name>

### - Make a copy of the repository

$ git clone <git_repository_url>

### - Removes the files or directory added to the staging

$ git restore --staged <directory>/<file>

### - Make a copy of the repository from a specific branch

$ git clone -b <branch_name> <git_repository_url>

### - List all the Commits

$ git log

### - Go back to a specific commit

$ git reset --soft <commit_hash>

### - Make a copy of the repository from a specific branch

$ git clone -b <branch_name> <git_repository_url>

# 2. branch

In main branch, we should not fix sth there.

# +

-   command + shift + . : show the hidden files
-   after commit message, the hash has meaning of everything of these files.
-   .gitignore : sth written there, git wont tracked it anymore.
-   hash number : after commit message, every data will be placed there. (such as username, useremail, project name, file size, date, time of commit, github repository, code, file type...)
-   sign

    -   caret ^ = attribute starts with
    -   dollar sign $ = ends with
    -   star sign \* = contains
    -   ```css
        /* example */
        .contact [class^="fa-"] {
            color: var(--mainColor);
            font-size: 18px;
        }

        [alt*="cloud"] {
            width: 10%;
        }
        ```

-   git vs github
    -   Git is a version management system that helps you record and manage your own code and history.
    -   GitHub is a cloud-based hosting service that manages Git repositories.
-   pull vs clone

    -   pull : we can get every update from the branch.
    -   clone : make a full copy from the github. Kind of download.

-   why do we need git commit message?
    -   if we have some problems, we can check git log and find the comment that problem came.

# CSS

when the positon is absolute, we can use top, right, left, bottom to move.

## Keyframes

-   animation: name duration timing-function delay iteration-count direction fill-mode;

```css
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

[alt="sun"] {
    width: 5%;
    top: 5%;
    right: 5%;
    /* give name of the keyframe name */
    animation-name: rotate;
    /* how long it will take time */
    animation-duration: 5s;
    /* Where to move */
    animation-timing-function: linear;
    /* start as soon as start */
    animation-delay: 0;
    /* moving endless */
    animation-iteration-count: infinite;
    /* reverse */
    /* animation-direction: reverse; */
    /* move to the back */
    animation-direction: alternate;
}
```

-   animation-timing-function

    -   #1 ease: It starts the transition slowly and then increases the speed until the middle of the animation.
    -   #2 ease-in: It starts the transition slowly and then keeps increasing the speed until the end of the animation.
    -   #3 ease-out: It starts the transition quickly and keeps decreasing the speed until the end of the animation.
    -   #4 ease-in-out: It starts the transition and keeps increasing the speed towards the middle of the animation.

-   transform
    -   translate
        ```css
        @keyframes wind {
            from {
                transform: translate(1000px);
            }
            to {
                transform: translate(-1500px);
            }
        }
        ```
    -   rotate
        ```css
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        ```

# How to do teamwork with GitHub

1. ‘Settings’ > ‘Collaborators’ > ‘Add people’ => invite teammate
2. ‘Pull requests’ > ‘create new pull request’
    1. ‘Create pull request’
    2. Leave a comment in detail. What is this branch, what is it for..
    3. Reviewers : choose the reviewers for review my code.
    4. Assignees : who have power to merge.
    5. ‘Create pull request’
    6. Leave a comment that you reviewed.
    7. ‘Merge pull request’ => it will change to purple icon(merged)
