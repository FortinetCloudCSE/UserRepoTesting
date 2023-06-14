var relearn_search_index=[{content:`Welcome! This site will explain how to use the Hugo Web Framework \u0026 the “reLearn” Theme to effectively organize \u0026 deliver Fortinet TEC Workshops \u0026 Product demos in a consistent, simple, and visually appealing format.
The beauty of this framework lies in its simplicity. Within approx 30 mins, anybody can have a site up and running. Content is created via Markdown files, and the workshop guide layout is simply a directory structure.
Follow along on this simple tutorial to get up and running with a Hugo formatted site for your TEC Workshop/training/demo content today!
Learning Objectives Setup UserRepo on your system \u0026 Build container with Hugo \u0026 CentralRepo Learn to work in Hugo to create your content to display proper information flow for your TEC Workshop/demo/training Publish your Hugo site to GitHub pages via a CI/CD model Hugo and Fortinet TECWorkshops - Visually The purpose of this workflow is to simplify creation of Fortinet TECWorkshop guides while providing an example CI/CD development environment with maximum re-usability Here’s a visual representation of our process which will be fully explained in each chapter \u003c!DOCTYPE html\u003e FTNT-hugoFlow `,description:"",tags:null,title:"Fortinet TECWorkshop Template - MVP1",uri:"/index.html"},{content:`Hugo Build When you’re satisfied with Hugo view of your content in Hugo virtual server, issue a Hugo ‘build’ in the container CLI
hugo --minify --cleanDestinationDir This command “builds” your Hugo site into the container’s /public folder. We used a docker disk mount to map this folder back to your local /docs folder, so the Hugo website will automatically be copied back into your local repo flag ‘–cleanDestinationDir’ tells hugo to re-write the entire output directory with its build, so it will clear out template files/anything else that may be in there You can now exit the container with ctrl + cd, or command: ’exit’ When you exit the container, any files stored or changes you made to the container will be lost and cannot be recovered Remember we edited the /content folder on our local OS, so those changes were not made to the container and will not be lost Further, the disk mount from local’s /docs to Container’s public AUTOMATICALLY writes the hugo build to your local OS, so those changes will not be lost If you need to continue editing, just run a new container from your built image, and run hugo’s webserver. Everything is linked properly so it should just work `,description:"",tags:null,title:"Task 1 - Build Hugo page",uri:"/03chapter3/2_task1.html"},{content:`Create a Folder structure correlating to the major topics/sections of the demonstration Browse to the content directory within your TECWorkshop repo (Locally on your machine) The Left Hand navigation menu is driven by the folder structure you create Chapters are ordered according to the number prefix on the folder Folder Naming doesn’t appear on the published site, it only helps the content creator organize the chapters \u0026 remember what’s in each Chapter Within each folder there is an _index.md file which is used to create the content of the Chapter header page The _index.md is used to
title the Chapter header page in left hand navigation display chapter introduction content on the chapter heading page Notice the folder structure and file naming on the left and the resulting display on the right Info Note that the file and folder names only matter for ordering in your directory listing. Lower numbered folders will appear first. Only the “title” tags within each Markdown file will impact the resulting page view Subsequent Markdown pages under each folder are used to explain tasks/steps within each chapter `,description:"",tags:null,title:"Task 1 - Chapter Directory Structure",uri:"/02hugo/2_task1.html"},{content:`Repo creation request Request a new repo for your TECWorkshop (this will be referred to as your UserRepo)
Send an email to fortinetcloudcse@fortinet.com to request a new GitHub repo and Jenkins Pipeline. Providing the following: Repo Name GitHub Usernames of collaborators Your Fortinet email address that you use to log in to FortiCloud Behind the scenes, a script is used to create your TECWorkshop repo with appropriate protections, features, and collaborators. Additionally a Jenkins pipeline will be setup to monitor changes to the repo and run things like publishing the web site FortiDevSec scanning. To facilitate this, administrators will send you an application id that you must paste into fdevsec.yaml in order for the scans to run and tests to pass. Jenkins tests must pass in order for your feature branch to be merged into the main branch. Along with the FortiDevSec application id, you will also be sent an account number which you can use to navigate to the FortiDevSec console to view the results of your scan. To do so, head to FortiCloud and click IAM Login on the left hand side of the page. Enter the provided account number along with your FortiCloud login credentials. You will use this repo to create and modify MD chapters \u0026 tasks to create your workshop Guide in Hugo format. Repo Restrictions, Jenkins interactions, GitHub Actions The only approved method to create repos in FortinetCloudCSE org is via request to mailto:fortinetcloudcse@fortinet.com You can clone UserRepo into your own GitHub Account, but not into FortinetCloudCSE Only Authorized collaborators and admins are allowed to push to repos in FortinetCloudCSE org We require pushes be made to a feature branch Upon push to feature branch: Jenkins clones the repo into its workspace on EC2 and runs FortiDevSec Scan which performs SAST Scan check for vulnerabilities in code, 3rd party libraries, and libraries pulled into Dockerfile secrets scan IaC Scan for misconfig GitHub Pages deploys only on the main branch. Requirements for merging feature to main branch: FortiDevSec Tests Pass PR request submitted and approved by FortiCloudCSE admins (manual intervention) Git repo setup Once your TECWorkshop repo is created, clone the repo and change your working directory to the cloned repo
git clone \u003cprovided link\u003e cd \u003ccloned repo directory\u003e The first thing you’ll want to do with the repo is create a Feature branch. There are branch protections in place on the repo preventing you from pushing to main, so you’ll have to follow our workflow described in Ch3
git checkout -b Feature-\u003cuserid\u003e-\u003cshortDescr\u003e You’re now working in a local branch so you can proceed to building Hugo content Full GitFlow \u0026 additional tips are available here
MVP0 (LEGACY STEPS only do this if MVP1 steps don’t work) Info You won’t be able to clone this repo into the FortinetCloudCSE Org, so using this route, you’ll have to clone to your own repo Step 1 Clone this git repo git clone https://github.com/FortinetCloudCSE/UserRepo.git `,description:"",tags:null,title:"Task 1 - Repo Creation",uri:"/01gettingstarted/userrepo.html"},{content:`Create or copy Markdown pages for each task within the chapter Each Chapter can have 1 or more tasks which should be completed by the participants Naming of the task Markdown pages doesn’t matter, and is only used to aid the content author in organizing the content. Info Note that the filename doesn’t matter other than to help organize content. The Title and Weight dictate the leftnav visual and ordering of the pages. Lower weight pages are displayed first Warning Because the file and folder names are very similar in our example repo, it can become confusing to know where to make edits. Make sure you’re editing the correct file in your IDE/editor This page contains several useful markdown shortcodes you can use for visual pop-outs on the the site Lots of shortcodes \u0026 Features available here Badges:
Important Version6.6.6 Captain InfoNew Awesome
Icons:
⭐ Tips this is a star 💡 this is a lightbulb Notices
Note this is a note box Tip this is a tip box Info this is a tip box Warning The examples and sample code provided in this workshop are intended to be consumed as instructional content. These will help you understand how various Fortinet and Azure services can be architected to build a solution while demonstrating best practices along the way. These examples are not intended for use in production environments without full understanding of how they operate. Expandable sections":
Expand me… Thank you! Buttons:
Get Hugo Get Hugo Mermaid (diagrams \u0026 charts):
graph LR; If --\u003e Then Then --\u003e Else %%{init:{"theme":"forest"}}%% graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two] %%{init:{"fontFamily":"monospace", "sequence":{"showSequenceNumbers":true}}}%% sequenceDiagram Alice-\u003e\u003eJohn: Hello John, how are you? loop Healthcheck John-\u003e\u003eJohn: Fight against hypochondria end Note right of John: Rational thoughts! John--\u003e\u003eAlice: Great! John-\u003e\u003eBob: How about you? Bob--\u003e\u003eJohn: Jolly good! `,description:"",tags:null,title:"Task 2 - Create/Modify MD pages",uri:"/02hugo/3_task2.html"},{content:`Push your content to GitHubo repo Finally, from your local workstation CLI, push the newly created Hugo site up to GitHub to automatically publish your Hugo Site
git add . git commit -m "\u003cmy commit message\u003e" git push Remember we’re always working in a Git Branch, so you should get in the habit of issuing a Pull request and merge using our GitFlow procedure
Info This is mostly applicable when working in a collaborative environment where multiple people may be pushing to the repo with different branches/PR to main. Strictly speaking, if you’re the only person working on this repo and/or it’s your first push, this step isn’t 100% necessary # locally checkout the main branch git checkout main # pull the latest version of main from GitHub to your local repo git pull # locally checkout your feature branch git checkout \u003cbranch\u003e # locally perform an interactive rebase which locally pull commits from main into my branch git rebase main -i # push my local branch (which now includes the latest changes from GH main) up to GitHub remote git push --force ########### WAIT FOR PR APPROVAL Create a PR on GitHub, being sure to select your branch to merge with main. Wait for approval
Info You will not be able to merge the the PR until receiving approval from Jeff or Rob. They will receive an email for review, but it’s a good idea to ping them as a reminder. Once your PR is approved, checkout the main branch and perform a fast-forward merge and force push to complete the workflow.
# locally checkout the main branch git checkout main # locally merge myFeatureBranch into main with a fast-forward merge scheme git merge \u003cfeature branch name\u003e --ff-only # push local main (which now has myFeatureBranch merged into it) up to GitHub remote # because this push includes the merge it will auto close the PullRequest git push Once your PR has been approved and your code is in the main branch, GitHub actions will automatically publish the contents of /docs folder to GitHub Pages Tip Remember, Hugo’s build wrote the static html pages to the /public directory in the container, which is mapped to your /docs folder in your local repo `,description:"",tags:null,title:"Task 2 - Push content to your repo",uri:"/03chapter3/3_task2.html"},{content:`Adjust the Site’s Frontmatter in config.toml file Note Config.toml must be modified for each new repo as it controls overall parameters for the site Open the config.toml file under the repo root to change a few parameters of the site Edit the baseUrl parameter to match the GitHub Page for your site (it will match your TECWorkshop reop name) Edit the themeVariant parameter depending on the type of TEC Content you’re using Info Currently available themeVariants are:
Workshop Demo UseCase Spotlight Optionally Edit the logoBannerText parameter, if you want to override the themeVariant Text under Fortinet Logo Optionally Edit the logoBannerSubText parameter, if you want to add description under Banner Text Add additional resource URL’s to the bottom of the left menu bar with [[menu.shortcuts]] menu.shortcuts are displayed lowest to highest according to their weight Additional customizations can be made with themeVariants, so email fortinetcloudcse@fortinet.com to request global site changes `,description:"",tags:null,title:"Task 3 - Adjust config.toml site settings",uri:"/02hugo/4_task3.html"},{content:"Image Storage Option 1: use externally fully qualified absolutely path (this can be a pain) Option 2: if you have a directory with all your images…. put it in “/content/images” MD usage(from a chapter page in “content/chapter01”) ![Magic](../images/magic.gif) Option 3: I find it easier to organize images with the pages they go with (this is how the template repo is setup put images in the chapter directory e.g. images in “/content/chapter1/” MD Usage: ![Magic](magic.gif) ",description:"",tags:null,title:"Task 4 - image storage",uri:"/02hugo/images.html"},{content:`GitHub Repo Getting Started (General Workflow for GitHub Repos) Once your repo and pipeline have been created, you will be provided with the GitHub repo link which you can use to clone and begin content creation. First, navigate to a desired local directory and clone the repo with the provided link:
cd \u003cdesired parent directory\u003e git clone \u003cprovided link\u003e cd \u003ccloned repo directory\u003e Create a feature branch to begin working on your desired changes.
git checkout -b \u003cFEATURE-username-ShortDescr\u003e Check the repo status to verify the changes to be staged.
git status When you have changes, Stage the desired files (or issue -A (or .) for all), commit, and push.
git add -A {or} git add . git commit -m "\u003cadd a commit message here\u003e" git push If this is your first push to the branch, GitHub upstream doesn’t know about it. Just go ahead and use the provided command in this case to perform the push, which will create the upstream branch
To auto create new branches when you first push, update Git global config
git config --global --add --bool push.autoSetupRemote true Tip: If you have a number of small commits and don’t want them and their associated commit messages polluting the git log, you can squash your commits by performing a soft reset:
git reset --soft \u003chash of the last commit you want to keep as is\u003e git add -A git commit -m "\u003cnew commit message\u003e" git log You will see the new commit on top of the one you referenced in the git reset command. When you have completed your work and are ready to merge your changes into the main branch, ensure your branch is up-to-date with the main branch.
# locally checkout the main branch git checkout main # pull the latest version of main from GitHub to your local repo git pull # locally checkout your feature branch git checkout \u003cbranch\u003e # locally perform an interactive rebase which locally pulls commits from main into my branch git rebase main -i # push my local branch (which now includes the latest changes from GH main) up to GitHub remote git push --force Create a PR on GitHub, being sure to select your branch to merge with main. Wait for approval
You will not be able to merge the the PR until receiving approval from Jeff or Rob Once your PR is approved, checkout the main branch and perform a fast-forward merge and force push to complete the workflow.
# locally checkout the main branch git checkout main # locally merge myFeatureBranch into main with a fast-forward merge scheme git merge \u003cfeature branch name\u003e --ff-only # push local main (which now has myFeatureBranch merged into it) up to GitHub remote # because this push includes the merge it will auto close the PullRequest git push Branch cleanup - generally you can reuse your branch while actively developing. If you want to close your branch, use the following commands # delete the branch locally git branch -D feature-branch # tell GH remote about branch deletion git push origin --delete feature-branch `,description:"",tags:null,title:"Git Flow",uri:"/03chapter3/gitflow.html"},{content:`Task 2 Build a FortinetHugo container You only need to build the container when you’re starting development
Container rebuild is necessary when: CentralRepo has changed You removed/deleted the previously built container Once Built, you can re-run the container whenever you wish to keep creating content and reviewing your Hugo site
Warning You can choose your own container name and it MUST be lowercase only . Our example uses Tip The Full commands and explanation for building and running docker are listed below. We’ve also included a shell script in this repo to perform the build ./scripts/docker_build.sh
docker build -t fortinet-hugo . --target=prod Info If you get build errors, check you’re on a recent version of docker and upgrade if necessary The container image is a point-in-time Ubuntu OS including a Hugo installation and a copy of CentralRepo so your Hugo formatting/themes/branding will always be up-to-date CentralRepo contains necessary files, directories, and Fortinet-specific customizations to configure Hugo, it won’t change often Command Line arguments (You can view our Docker build file here) ‘-t’: container_image_name, must be lowercase ‘.’: build the container in this folder ‘–target=prod’: Prod is for general usage. We’re using a single Dockerfile for both dev and prod container images. Dev is used for testing changes to CentralRepo. If you would prefer local Hugo install/development follow these directions Container advantages: no need to install/maintain Hugo locally no need to clone/maintain Hugo “supporting files/directories”….your repo will be much larger and will get out-of-date quickly same container can be used to preview and build EVERY TECWorkshop, and you could build/move it anywhere no need to rename/modify Hugo’s public folder after builds `,description:"",tags:null,title:"Task 2 - Container build",uri:"/01gettingstarted/containerbuild.html"},{content:`Task 3: Run FortinetHugo container Run the container with local disk mounts so you review your markdown TECWorkshop Guide as you’re creating the content (repeat this procedure for any TECWorkshop you’re creating) Tip The Full commands and explanation for running your pre-build docker are listed below. We’ve also included a shell script in this repo to run your container image ./scripts/docker_run.sh
docker run --rm -it -v $(pwd)/content/:/home/CentralRepo/content -v $(pwd)/config.toml:/home/CentralRepo/config.toml -v $(pwd)/docs:/home/CentralRepo/public -v $(pwd)/layouts:/home/UserRepo/layouts -p 1313:1313 fortinet-hugo:latest shell ‘-rm’ flag removes the container after it’s closed…freeing up resources ‘-it’ flag runs the container interactively providing prompt into the Container ‘-v’ flag creates a disk mount to the local file system available within the container OS ‘-p’ publishes container ports to the local OS (used to view the local Hugo Webserver) ‘shell’ subcommand for Hugo container to access the shell directly ‘server’ subcommand for Hugo container to run the local/test webserver ‘build’ subcommand for Hugo container to build the static website the above command runs the container and logs you into the container Alpine Linux OS CLI (general Linux commands will work, but this is a lean image so doesn’t include everything)
Note the $(pwd) in Container OS, and list files. You’ll see you have everything needed to create your Hugo site!
pwd ls -la Note Notice the folders from your local repo are available in the container, from the disk mounts
/content /docs –\u003e /public (hugo builds to public by default, but GitHub pages wants to use /docs by default) /layouts config.toml These disk mounts allow bidirectional read/write between container and local file system, and these disk mounts are the only directories that will be maintained when the container shuts down
Run Hugo virtual server to get a live view of Hugo’s output
hugo server --bind 0.0.0.0 In your local machine, browse to http://localhost:1313/UserRepo
You’ll see a template hugo site served by Hugo’s local webserver. Now you’re ready to proceed building your TECWorkshop content in the next chapter!
To exit out of the Container OS: use ’exit’ or CTRL+d
exit Tip We’re including some helpful docker commands here for reference. Use these if you’ve built LOTS of images and you need to get rid of the mess
Notes: Inside the container, Central Repo (which is where we’ll make any template changes) is cloned and integrated with your repo.
Container (ideally) displays local version of Hugo site updating near real time as you create content
To run a container interactively (for troubleshooting or to see how they function)
Comment out any offending lines in the dockerfile Build again using commands above. to run the container interactively use the ‘-it’ flag: docker run --rm -it fortinet-hugo:latest Container outputs /public folder which is the result from “Hugo build”
This /public(/docs) folder can be hosted anywhere. We’ll still use GH Pages to host the actual page. Useful Docker Commands to Know docker images #List all images docker ps -a #List all containers, both running and stopped docker rmi \u003cimage-id\u003e #Remove an image docker rmi $(docker images -aq) #Remove all images docker rmi $(docker images -filter dangling=true -aq) #Remove all images with tag \u003cnone\u003e docker rm \u003ccontainer-id\u003e #Remove a container docker rm $(docker ps -aq) #Remove all containers docker builder prune #Remove build cache When running any of the above commands, if you get an error message indicating an image or container is being used or referenced in another image or container, you can issue the ‘-f’ flag to force remove.
`,description:"",tags:null,title:"Task 3 - Run Container",uri:"/01gettingstarted/containerrun.html"},{content:"Setting up your Hugo environment (15 min) Prereqs Docker - older installs won’t work, so if you need to upgrade/reinstall, follow this procedure GitHub keys Follow the instructions here to generate a new SSH key pair Warning DO NOT USE A PASSPHRASE when you create the keys Once created follow these directions to add the newly created Key to your GitHub account. What is Hugo and how easy can this be? The site you are viewing right now is built with Hugo. You can navigate to specific chapters and tasks with the Left Navbar or the top banner table of contents For a sequential step by step flow through this workshop, use the arrows in the upper right corner to go through each step individually Development Environment Options To start, you’ll request a new repo which is a clone of User Repo. you’ll create the content for your TECWorkshop guides in this repo, and ultimately publish the Hugo built website to GitHub Pages Once you have UserRepo, you can choose how to use Hugo Option 1: build a container with Hugo installed on it and a copy of all Fortinet specific customizations to the Hugo reLearn theme Beyond providing an opportunity to learn the basics of container development, this option: streamlines and simplifies the Hugo content creation process minimizes local storage/upkeep of reusable componentry reduces complications of version dependencies in devlopment environment for Hugo or the reLearn theme future-proofs the content created for any given TECWorkshop so that any Fortinet branding changes can be easily re-applied to all guides Option 2: Install Hugo locally on your laptop/workstation and clone CentralRepo You’ll have to maintain CentralRepo including submodules on your local workstation ensure your final site is published to the /docs folder in your UserRepo ",description:"",tags:null,title:"Ch 1 Getting Started with Repos, Containers, and Hugo",uri:"/01gettingstarted.html"},{content:` Tip Hugo is installed on the container so it’s best to use it there. These instructions are included for legacy learning purposes Hugo Local install If you’re using a Mac, run the following brew install from your terminal
brew install hugo If you’re using Windows, install chocolatey for windows (follow directions here). Once installed run the following
choco install hugo -confirm Run Hugo webserver locally to see a local version of the rendered website
From within the root of the repo you copied onto your system
hugo server Click on the URL presented after the above command finishes to view a local version of your first Hugo formatted website Clone Central Repo if not using a container Because you’re not using a contianer, you need to clone and maintain fresh copy of CentralRepo git clone https://github.com/FortinetCloudCSE/CentralRepo.git --recursive LocalCopyCentralRepo To pull updates later cd LocalCopyCentralRepo git pull -r Running Hugo locally w/ CentralRepo + UserRepo Start in Central Repo, and use hugo webserver, pointing to proper content directory and config files
cd LocalCopyCentralRepo hugo server --contentDir $(PWD)/../UserRepo/content --config $(PWD)/../UserRepo/config.toml -p 8080 Flags: ‘–contentDir’: tell Hugo where the /content folder is ‘–config’: tell Hugo where the frontmatter config file is ‘-p’: tell Hugo webserver what port to use Hugo will serve up a local version of the page at: http://localhost:8080/UserRepo/ Now that you have Hugo running locally, you can proceed to content creation with Hugo
When you’re ready to perform a final ‘hugo build’ on your site, be sure to use the ‘-d’ flag to write files back into your UserRepo
hugo --minify -d $(PWD)/../UserRepo/docs --contentDir $(PWD)/../UserRepo/content --config $(PWD)/../UserRepo/config.toml --cleanDestinationDir Warning The examples and sample code provided in this workshop are intended to be consumed as instructional content. These will help you understand how various Fortinet services can be architected to build a solution while demonstrating best practices along the way. These examples are not intended for use in production environments without full understanding of how they operate. `,description:"",tags:null,title:"Optional - Install Hugo",uri:"/01gettingstarted/localhugoinstall.html"},{content:`CentralRepo CentralRepo contains all of the stuff Hugo needs to build a static website, including Fortinet Customizations to themes.
How it’s used Generally TEC Program participants creating content for Workshops, Demos, User Cases, or Spotlights don’t need to worry about Central Repo at all When you build your container, it inherently grabs the latest copy of CentralRepo:main from github, via this command in Dockerfile: ADD https://github.com/FortinetCloudCSE/CentralRepo.git#main /home/CentralRepo This means that you can re-use the same container for every TEC workshop guide you create. Tip If you haven’t used your container in awhile, it’s a good idea to rebuild it so it will grab the latest version of CentralRepo Repo Maintenance CentralRepo is maintained by the Fortinet Cloud CSE team, so work with us to make any changes necessary.
Review, modification, and testing process:
Anyone can fork CentralRepo and modify as necessary. Once you’ve tested your modifications, submit a PR to Central Repo Fortinet Cloud CSE team will merge your PR changes into branch ]CentralRepo:prreviewJune23](https://github.com/FortinetCloudCSE/CentralRepo/tree/prreviewJune23) Test using HugoDevContainer pointing to the merged branch rather than main ./scripts/docker_tester_build.sh ./scripts/docker_tester_run.sh Warning IMPORTANT If there is collaborative work while testing a PR, be sure to always pull latest from the PR Branch before starting new work!
git checkout PRBranch git remote add \u003cPR Label\u003e git@github.com:FortinetCloudCSE/CentralRepo.git git pull prreviewJune23 Upon successful testing, Fortinet Cloud CSE team will merge the branch to main and close PR git checkout prreviewJune23 git remote add \u003cPR label\u003e \u003cremote Github ssh URL\u003e git pull \u003cPR label\u003e \u003cPERFORM TESTIGN ON CONTAINER, and make any changes as necessary on this branch\u003e \u003cUPON SUCCESSFUL TESTING\u003e git checkout main git merge prreviewJune23 --ff-only git push \u003cManually Close PR\u003e `,description:"",tags:null,title:"Background Procedures - CentralRepo Maintenance",uri:"/01gettingstarted/centralrepo.html"},{content:`Learn to organize and create content in Hugo- estimated duration 20min You now have a container running hugo webserver and tracking changes to the /content directory in your repo.
Create your TecWorkshop Guide including Chapers and tasks. You can use your favorite editor/IDE to create the markdown pages Depending on several factors, you may or may not see LIVE changes to the http://localhost:1313/UserRepo page If you’re not seeing live changes… re-run hugo server command on container (ctrl+C to end the running hugo process on container CLI) Note You will ultimately need to make a minor change to the config.toml file in this repo, and when you do, the Hugo Local Webserver directory will change to the name of your repo With your FortinetHugo Container running, you can proceed to creating and editing your demonstration content.
Hugo is incredibly powerful and allows many customizations, and we won’t cover most of theme here as they’ve already been set for Fortinet’s standard template
Generally, you only need to do 3 things:
Set the folder structure for left hand menu bar navigation/topic structure, according to your chapters and tasks Create Markdown files for each Chapter and and discrete Task task therein Adjust the site’s frontmatter settings via config.toml to reflect your TECWorkshop repo name Click the right arrow to go through each step individually
`,description:"",tags:null,title:"Ch 2 Hugo Content Structure",uri:"/02hugo.html"},{content:`Publish your content to GitHub pages via a GitHub action Now that you have your content first draft, push your repo to github, there’s already a GitHub action to automatically publish your content anytime you upload to the repo
Click the right arrow to go through each step individually
`,description:"",tags:null,title:"Ch 3 - Hugo Publish ",uri:"/03chapter3.html"},{content:"",description:"",tags:null,title:"Categories",uri:"/categories.html"},{content:"",description:"",tags:null,title:"Tags",uri:"/tags.html"}]