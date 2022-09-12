Task: Using Angular Routing and  the HttpClient to create an app that shows information from APIs with more formatting and navigation than previous labs.

What does the application do? 
You’ve heard of Dungeons and Dragons? Well, Donuts and Devs is… nothing like that. This application allows bored individuals in lockdown to learn more about important figures in computing history, or gaze longingly at donuts.

Build Specifications:
Create two services to provide data from APIs:
One gets from the GC Donut API (3 points)
This needs a function to get the whole list of donuts and another to get detailed information on one donut
The other gets from GC Computer Science Hall of Fame API. (4 points)
This service just needs to provide the “complete” portion—that array of people.
Both can be found at https://grandcircusco.github.io/demo-apis/  
Both are really flat json files, not APIs, but you can GET them like APIs.
Create the interfaces you need for this data. (2 points)
For Donuts, you’ll need a Donuts component and a DonutDetail component. Donuts should show a list of names, and each name should link to the DonutDetail for it—like People and PersonDetail in the routing demo. DonutDetail should show the photo, namd, and calories. (4 points)
For the Hall of Fame (Devs), you’ll need a FamousPeople component and a FamousPersonDetail component. Use the Spark Design System accordion for this—show the person’s first and last name in the unexpanded accordion and their innovation and year in the collapsible part. (4 points)
Use angular routing to navigate between Donuts and Devs. (3 points)
