Project 1: Fridge Raider





About:

Our task for Project 1 was to develop an application from scratch and make use of third-party API's to populate and incorporate data retrieved from said APi's into our website making it directly accessible to the user.

We decided to make an application with the average dorm-room college student in mind. As a college student, you often find yourself very hungry with very little in your refridgerator to work with so you can make yourself a decent meal with the ingredients you have which usually wouldn't work well together.

Our application is the solution to this very problem. The user has the ability to input three items they have in their fridge and press search. Once the search button is clicked, the app will auto-magically generate a list of recipes (user can choose 1, 5, or 10) that each contain what was included in the search criteria. Simultaneously, with each food item entered into a search field, a picture of the specific item or dishes cooked using the inputted item will subsequently appear in a carousel on the right side of the user's screen.

If the user has collected what they need to make their meal, or if they'd like to run another search, they can clear the list of recipes returned from a previous search, or they can clear what they entered in the search fields. This can be done by clicking one or both of the two clear buttons in the application. These two search buttons work independent of each other. One will clear only what they've entered, and the other will clear only the list of recipes that have been returned. If the user clears just the search fields and runs another search, the new list of recipes will be prepended to the original list, making one long, concatenated list of ideas they can use to make their meal.





Technologies:

The technologies used to create our web application are as follows:

- HTML
- CSS
- Bulma CSS Framework
- JavaScript
- jQuery
- AJAX
- Postman
- Google (of course)





Challenges:

- Many challenges were faced in the development of this application. Learning how to use and implement a brand new CSS framework (Bulma) was difficult at first but after reading the documentation extensively, our team now has the confidence to successfuly use any CSS framework.

- Understanding how to use Github was intimidating at first, but got better with practice. Mark Younan is still a little shaky but his teammates always pick him up when he's down and he's thankful for that.

- We had trouble with the first API we tried to use (Spponacular) to display images. After reading its documentation, we figured out how to correctly add search queries to the URL to make it work, but later found that we've maxed out the number of requests we could make to the API. This forced us to resort to using a different API (Pixabay) and had better luck with it.

- Making AJAX calls to the API's was overall not very difficult. However, we did come across a few syntactical speed bumps when targeting specific items and indexes within the object of arrays in each API. For example, we were able to get the URL appended to the list of recipes and not the name of the recipe as a hyperlink. After reading documentation we were able to figure out the solution.

- We came across a rather hilarious bug when getting data from the Pixabay API. Since our website is about food and recipes, we expected the images returned to be of food and recipes. When we entered the word 'fish' into one of the search field, a picture of a dolphin appeared on the page. Obviously this wasn't acceptable for our application, even though no one on our team seemed to have a problem with it. We had to specify how we made the AJAX call to target only images of food when entering a search and not something else. We did come across some very funny pictures when entering some very basic food items.

- Another difficulty we faced was grabbing input value from our drop down menu, and using whatever was selected from the drop down with the API to populate a list of recipes with that exact same number. We had to do a lot of testing in the console and manipulate both our HTML and JS files countless times before we were finally able to figure out why it wasn't working. A very specific combination of quotation marks and jQuery syntax in both files finally helped us achieve our goal. Google, Youtube, Stack Overflow, and W3 Schools were our best friends in this process.

- Similarly, we had an issue with the Edamam API in generating a search result based on the search criteria in all three fields, compared to just whatever was entered in the first one. If 'chicken' was inputted in the first search field, 'cheese' in the second and 'bread' in the third, the returned recipes would only include chicken and nothing about cheese or bread. Adjusting the way the Edamam API took our HTML ID elements as parameters fixed this problem. This was a very tedious process nonetheless.





Collaborators:

This project was developed and deployed by the software engineering team of Armande Milhouse, Mark Mesina, Adrian Romero, and Mark Younan. We had additional help from our instructor Manny Jucaban, and our TA's Musa Akbari, and Amanda Crawford along with all the online resources we had utilized in fixing bugs and solving problems.

During the time it took to develop the project, we learned that teamwork is absolutely critical in software development. We worked together on every task and each person had a fair amount of contribution to the code as well as the solutions to all the problems we faced. Doing something on your own is simply a recipe for failure. Being able to talk out the code with each other and ask each other questions helped each of us gain a thorough understanding of our application and all the technologies we've learned thus far in the course. Our team worked really well together and we are looking forward to the next project to tackle. Till then, we will be working together on our homework assignments to help each other understand the new things we learn in class.