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

### - Add the file or directory to a Git screenshot. That way, Git will see the differences

$ git add <file_name>

$ git add <directory_name>

### - Add everything that is modified or untracked

$ git add .

### - Commit your changes after adding and before pushing

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

# 2. branch

In main branch, we should not fix sth there.

# +

-   command + shift + . : show the hidden files
-   after commit message, the hash has meaning of everything of these files.
-   .gitignore : sth written there, git wont tracked it anymore.
