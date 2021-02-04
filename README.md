# Customise

Interactive Frontend Development Milestone Project

## Description

* Customise is a website development business website that lets the user contact customise so that customise can make them a website. The main theme of the website is that it is customisable. The website will have a dark and light mode which can be changed by the user of the website. It will also have a menu of 4 colours that when clicked change all the secondary colour styles on some of the buttons and certain headings and borders. The website will also have a form that the user can fill out and receive a message that me "the customise team " will be in touch. The website will also have a map that shows the user where customise is based and some of its hubs around the world. 

## What it does

* To create dark and light mode I will be creating a button that toggles from dark to light mode.

* I will create a button that onclick opens a navigation where you can choose a colour theme for the website.

* I will use the local storage API to remember how my website was customized

* I will use the google maps API to create my map and add clusters which show where customize is based

* I will use the mail.js API to allow the user to fill out the form and receive a confirmation email and notify me "the customise team" about their needs.

## How it will work 

* to create the dark to light mode feature I will add two CSS files that have different styles then using the link in my HTML and creating a JavaScript function based on the CSS style sheet link thats present I will onclick change the link URL from the light mode style sheet URL to my dark mode style sheet URL this will be updated to the local storage API so its remembered for next time. 

* to create my side nav color changer I will use the local storage to create an initial colour that all the buttons and other objects are styled with then using a loop I will access these classes and replace them with a new class that consists of new CSS changing the colour and also updating the local storage API.

* to connect my google maps API I will use the google maps CDN and connect it to my website then create my clusters and map style.

* to create my form I will use email.js and use their CDN to allow the user to receive a confirmation email that I received the information about their project

## UX

1. Project Goals

* The main goal for Customise.ie is to provide the user with a customisable website that shows off what customize are capable of doing while also allowing the user to contact the Customise team and also with the google map api the user can see where the companys many hubs are based. Also the website will be customisable with a dark and light mode feature and a side nav which can change the colour theme of many of the buttons and features throughout the website. most important these changes will be saved to the local storage so next time the custom set is remembered 

2. Goals of Business

* The main goal for the business is to direct the user to the contact section where they can pick a package and get in touch with a member of staff at Customize and organize creating a website togeather. 

* client stories

    1. As a new visitor to the website I want to navigate the site with ease and no confusion.

    2. As a new visitor to the website I want to be able to contact customise about a project and recieve an email of confirmatrion that I contacted them.

    3. As a new visitor to the website I want to be able to view where customise is based and see where there situated on the map.

    4. As a new visitor to the website I want to be able to read about customise in thier about section.
    
    5. As a new visitor to the website I want to be able to click the Change colour button and be shown the colour selection.
    
    6. As a new visitor to the website I want to be able to click the close colour selection and the colour section disapears.
    
    7. As a new visitor to the website I want to be able to click one of the change colour buttons and customise the website also if I reload the page the website remembers how I left it 
    
    8. As a new visitor to the website I want to be able to  switch from dark to light mode with ease and when I reload the page the website remembers what mode I was in.
    
    9. As a new visitor to the website I want to be able to recive feedback if I incorrectly or correctly fill in the contact form.
    
    10. As a new visitor to the website I want to be able to use the nav and any contact buttons that direct me to places on the website.

4. Wireframes

    * Computer size: https://github.com/robertc181/Customise/blob/main/assets/wireframe/computer-size.jpg
    
    * Ipad size: https://github.com/robertc181/Customise/blob/main/assets/wireframe/ipad-size-.jpg
     
    * Ipad size: https://github.com/robertc181/Customise/blob/main/assets/wireframe/ipad-size-2.jpg
      
    * Phone size: https://github.com/robertc181/Customise/blob/main/assets/wireframe/phone-size.jpg
       
    * Phone size:  https://github.com/robertc181/Customise/blob/main/assets/wireframe/phone-size-2.jpg
    
5. fonts

    * use of Montserrat and Expletus Sans
    * all from Google fonts
    
6. colours

    * Ive mainly used the colour shades of white and black for both dark and light mode then for secondery colours I used green purple red and plue which all look good with both light and dark colours
    
7. styling

    * In this website I have tried to create a plain design that looks good in both dark and light modes
    * also using a simplistic designs so that they are easily customiseable.

## Features

1. Navigation changes from transparent to colour.
 
    * this allows for a nice look on the header of the page and when scrolled there is no text flowing over eachother.
    
2. When you fill out the contact form you recieve a confimation email to the email that You filled in.

    * allows the user to recive feedback about thier project.

3. In the location section of the website you can use the map to see where customise is located and some of its hubs around the world.

    * this allows the user to see where customimse is based and allow them to connect with the business more.

4. In the about section the user can read about customise and about the company. 

    * this allows the customer to see what customise is all about and what they do.

5. When the Change colour button is clicked it opens up the colour selection.

    * This creates a nav that the user can use to change the style of the secondary colours across the website also a close solour section button closes the colour selection.

6. When any of the colour selection buttons are clicked the page replaces all the existing secondary colours with the newly clicked colours

    * this means that the user can customise the page as they want 

7. When the toggle button bellow the nav is clicked the theme of the page changes from light to dark mode

    * allows the user more customisation

8. If the contact form is filled in incorectly the user is notified and asked to fill it out again  

    * provides feedback to the user

9. If the contact form is filled in correctly the user is notified and thanked 

    * provides feedback to the user
    
10. When any nav links or buttons on the page are clicked the website smoothly takes the user to that section of the page

    * no confusion of placement on the website 
    


## Technologies

1. HTML5
2. css
3. Bootstrap 4
4. JavaScript
5. JQuirey


## Credits

1. Media

   * white theme header pic
    * pinterest
    
   * dark theme header pic
    * pinterest
    
   * surfboard pic
    * pinterest
     

## Testing

1. As a new visitor to the website I want to navigate the site with ease and no confusion.

    * No matter what page the new visitor lands on they can easily find the navigation menu 
    * The logo image always leads back to the front page 
    * all the buttons that link to places on the website send the user there onclick

2 .As a new visitor to the website I want to be able to contact customise about a project and recieve an email of confirmatrion that I contacted them.
    * after the user has put in thier information and clicked the send button they will recive a message thanking them for enetering thier details and they will recieve an email from customise like shown bellow.

3. As a new visitor to the website I want to be able to connect with the artist by looking at the about section.

    * A clearly labeled about page is displayed on the nav at all times and title on the about us page.
    * The about us section goes through DAFT PUNKS past and present in the recent section 
    * the recent section is also located on the nav and has a title of recent on its page.

3. As a new visitor to the website I want to be able to smoothly scroll through the website 

    * each button and nav link that locates the user to another part of the website is connect with anchor ID tags
    * I've set the HTML in the CSS file to scroll-behavior to smooth to allow for the smooth transitions

4. As a new visitor to the website I want to be able to press play and view the audio player 

    * After the play button is clicked using JavaScript I created a popup that covers most of the page and allows the user to play the audio 
    * I've also connected a close button to the popup so that it can be closed easily.

5. As a new visitor to the website I want to be able to be sent to Spotify if the Spotify icon is clicked 

    * After the Spotify icon is clicked it locates the user in a new window where they can view the album in Spotify


6. As a new visitor to the website I want to be able to be linked to the official daft punk shop when I click view under the merch product

    * after the view button is clicked the user is brought to the daft punk website 
    * also the user is brought to the exact product which they clicked to view on in the website.

7. As a new visitor to the website I want to be able to link to each social media in the footer.

    * after any of the font awesome icons are clicked the user is sent to the daft punk social media account in a new window.

## Deployment

## Fixes

