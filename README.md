# JS

เช็ค mail


npm install
npm test

git status
git add .
git commit -m "message"
git push



## Set your user and email

git config --global user.name "AomAPJJJ"

git config --global user.email "panipak.jong@kmutt.ac.th"

## Check your config list
        git config --list
## Use git clone command
        git clone https://github.com/umaporn-sup/1-2566-js-resources.git
## Check your files status 
        git status
## Add your git
        git add .
## Commit your git
        git commit –m “message”
## Push changes to remote repository (typically remote name “origin”) 
        git push –u <remote name> <local branch name>
## Git Credential Storage
### reset git credentials
        git config --global --unset credential.helper
### Make git forget credentials or to switch to another github account, it will flush any stored password from cache.
        git credential-cache exit
