<h1 align="center">Your Best 11</h1>

[Link to Project Page]()

This is my submission for MS2 in the Code Institute Full Stack Developer diploma. This website is for a football dream team 11, allowing the user to read up about legends of the game before submitting a list of players, selected via dropdown, through emailJS. This website was built with using the 'mobile first' principle and is fully responsive across all devices.

<h2 align="center"><img src="https://imgur.com/aFXnvXF"></h2>
<h2 align="center"><img src="https://imgur.com/MGMrDu0"></h2>
<h2 align="center"><img src="https://imgur.com/O80vfr2"></h2>

## User Experience (UX)

-   ### User stories

    -   #### Visitor Goals

        1. As a visitor, I want to understand the purpose of this site and site functionality.
        2. As a visitor, I want to be able to explore the site easily using clearly identified links whilst always be able to quickly return to the homepage.
        3. As a visitor, I want to be receive feedback from interaction with the site.
        4. As a visitor, I want to be able to view the company's online profile on social media platforms to view their previous work.

    -   #### Owner Goals

        1. As the site owner, I want to provide users with a good UX which will allow them to suggest the site to other users.
        2. As the site owner, I want to be able to provide users with information for the players shown.
        3. As the site owner, I want customers to be able to submit their selections and supply them feedback on succesful submissions.

    -   ### Design
        #### Colour Scheme and Site Theme
        -   The site was designed using contrasting blacks and whites to give the appearance of a floodlit football stadium.
        #### Typography
        -   The Ubuntu, Anton and PT Sans fonts were imported from Google Fonts for use throughout the site with sans-serif used as a fallback font. Ubuntu was chosen for it's style as it was in keeping with the design and feel of the site. Anton was used in the form in the site logo to stand out with a bolder style.
        #### Imagery
        -   The various images built into the site have been chosed and styled to grab the attention of the user while still remaining subtle enough to provide a good UX.

-   ### Wireframes

    -   Wireframes created using Balsamiq

    -   Home Page Wireframe - [View](https://imgur.com/g1BbhqO)

    -   Legends Page Wireframe - [View](https://imgur.com/bJk7BXA)

    -   Your 11 Page Wireframe - [View](https://imgur.com/bJk7BXA)


## Features

-   Site contains several active links designed to allow the user to easily navigate through the site. 
-   All images in the 'Legends' page are styled with circular border. All images of players, when clicked, will open a pop up modal window detailing the players bio and statistics.
-   Legends page contains google maps API with marker showing players place of birth.
-   Your 11 page allows the user to select their own 11 from dropdown menus and submit these selections to the owner via email JS.
-   Site was built with using the 'mobile first' principle and is fully responsive across all devices.

## Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JS](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 5.0.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Ubuntu, Anton and PT Sans' fonts into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [JQuery:](https://jquery.com/)
    - jquery was used to link data from legends.js to the modal pop up in legends.html

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   HTML: All pages successfully tested using W3C HTML Validator with no errors
-   CSS: All pages successfully tested using W3C CSS Validator with no errors

### Testing User Stories from User Experience (UX) Section

-   #### Visitor Goals

    -   1. As a visitor, I want to understand the purpose of this site and site functionality.

        -   The site instantly lets you know it's purpose due to the imagery provided in both the header and opening text below the nav bar.
        -   The "Get Started!" button helps the flow of the site as it immediately takes the user onto the Legends.html page where again, the opening text is clear in describing the sites purpose.

        2. As a visitor, I want to be able to explore the site easily using clearly identified links whilst always be able to quickly return to the homepage.

        -   The site contains well laid out links in the navigation bar and the header logo is also a clickable link which returns the user to the 'Home' page regardless of what page they are on.
        -   The majority of the text on the page contains a link inside which can redirect the user to the page they wish to visit.

        3. As a visitor, I want to be receive feedback from interaction with the site.

        -   The form will return an alert upon submission informing the user of a successful submission.

        4. As a visitor, I want to be able to view the company's online profile on social media platforms to view their previous work.

        -   The footer on all pages contains links to the company social media platforms.


    -   #### Owner Goals

        1. As the site owner, I want to provide users with a good UX which will allow them to suggest the site to other users.

        -   The site is laid out in a simplistic style to avoid confusion of the sites purpose for the user.
        -   The site uses various links to improve the flow of the site for a user.

        2. As the site owner, I want to be able to provide users with information for the players shown.

        -   The images of players on the legends.html page will open a pop up modal window when clicked giving information on the players shown.

        3. As the site owner, I want customers to be able to submit their selections and supply them feedback on succesful submissions.

        -   The player selection in the Your 11 page is wrapped in a form which will be submitted to the owner upon completion. Once submitted the form will open an alert box notifying the user of a successful submission. 


### Further Testing

-   The website was tested on Google Chrome, Microsoft Edge, Firefox, Safari (mobile) and Samsung Internet (mobile).
-   Testing was performed on a range of devices (laptop, tablet, phone) to verify succeful deployment.
-   Testing completed by family members to review site and notify of any bugs/improvements to be made.

#### Testing Specifics

1. All navigation links across all 3 pages were tested and found to be working. 
2. Any anchor links tested to ensure they open in new tab - successful.
3. Responsive testing done using Chrome Developer tools. Site shown to be working correctly.
4. User testing done by family. Grammatical errors and improvements completed.
5. User stories put to test using family members. Answers satisfactory.
6. Form on Your 11 page tested to show alert on submission and successful email sent to emailJS  

### Bugs

#### Fixed Bugs

1. Installing Bootstrap 5.0.0 issues
    - After installing Bootstrap 5.0.0. any anchor tags inherited a text-decoration border. All anchor tags containing text had to be targeted and the text-decroation set to none.
2. Dropdown List readover
    - The dropdown lists of players in the your_eleven page would not repeat for multiple items. I had to rename every position with an individual id to solve this.
    
3. Navbar issue
   - The navbar toggler function was causing styling issues when switching to mobile. This was removed and replaced with a standard navbar.



#### Known Bugs

1. Firefox Desktop and Mobile Browser
    - The font family and weight seem to fall over on Firefox desktop and mobile.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. In the side bar,click on the Pages nav button.
4. Under "Source", click the dropdown called "None" and select "Master" and ensure folder is set to "Root"
5. Click Save and new page will open.
6. The published site is shown in the blue text bar [link](https://dmallon1983.github.io/MS1-Project/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [Bootstrap 5.0.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Bootstrap Library used throughout the project. Bootstraps built in grid system used for layout purposes.

-   Code snippets and methods used from Code Institutes Full Stack Web Developer course material

-   Stack Overflow assistance from several users giving guidance on how to correct JS issues.

### Content

-   Majority of content written by developer with external sources credited in comments on files.

-   README.md file created by formatting Code Institute example and ammending and expanding to suit project

-   Forking and cloning process taken from this example as not covered to date in the course.

### Media

-   Site header image taken from [Shutterstock](https://www.shutterstock.com/)
-   Pitch images used in background on legends.html and your_eleven.html taken from [Pexels](https://www.pptback.com/)
-   Google Maps API taken from google.com
-   Player images taken from various sites on google image. Whole images not used, screengrabs of heads only.

### Acknowledgements

-   Code Institute for the fantastic course material and media

-   Slack community for support throughout the whole project.

-   Stack Overflow community for the same assistance.