
Build a Full-Stack Guestbook
Overview

This week you’ve been learning about clients and servers, and most importantly, how to get them to communicate with each other. In it’s most simple sense, a server hosts/collects data that the client will then display. You’ve been learning about the fundamentals of CRUD applications, which are a major part of being a web developer.

This week you’re going to make a ‘Guestbook’, like the ones in hotels, for users to leave a message for other users.

Make sure you take some time to look at the submission instructions, as they’re slightly different from previous weeks.
Topics

    HTTP Methods: Get
    HTTP Methods: Post
    Node.js: Express servers, routing
    JavaScript: Events, Fetch, DOM Manipulation, Async/Await Functions
    Databases: SQL, Postgres (pg)
    Server-side Packages: Express, Postgres, dotenv, CORS
    Vite: Modern Frontend Tooling for JavaScript

Resources

    Express Docs: app.get()
    Express Docs: app.post()
    Express Routing
    MDN: Event Listeners
    W3: HTML DOM Element appendChild()
    MDN: appendChild() method
    MDN: Using the Fetch API
    MDN: fetch() Method
    MDN: async Functions
    SQL Cheat Sheet
    W3: SQL Tutorial
    Express Docs
    PostgreSQL Tutorial
    Node: dotenv
    MDN: Cross-Origin Resource Sharing (CORS)
    Vite: Getting Started

Instructions
User Stories

    🐿️ As a user, I’d like to fill out a working form so that I can submit my information effectively and without issues.
    🐿️ As a user, I want the application to work as expected on my mobile device so that I can access and use it conveniently on the go.
    🐿️ As a developer, I want to create a working API GET route so that I can retrieve data from the server and display it to the users.
    🐿️ As a developer, I want to create a working API POST route so that users can send data to the server and store it.
    🐿️ As a developer, I want to create and seed a database with dummy data so that I have realistic test data for development purposes.

Requirements

    🎯 Ensure your HTML form is working and submitting data into the database as expected.
    🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
    🎯 Create a working GET API route in your server.
    🎯 Create a working POST API route in your client.
    🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

Assignment Support

Here is some pseudo-code…
How to Deploy

Deploying a project with a client and a server is a bit more complicated than it has been in previous weeks. We can’t rely on GitHub pages as we have been previously. Today, we will use Render to deploy the client and the server individually. Aim to deploy on Render early, so that you have enough time afterwards to debug any potential problems, which will be listed in the production logs.

To begin, ensure your project has been pushed to GitHub. Then, go to Render. You should already have an account at this point, but if not, make an account (or sign-in through GitHub).

The following is for deploying a mono-repo, meaning both the client and the server files are in one folder together. If you’ve not made a mono-repo, the deployment instructions are the same, except you don’t have to alter the ‘root directory’.
Deploying the Server

    Click ‘+ New’ and choose ‘Web Service’.
    If you haven’t already, connect your GitHub repositories to Render. Select the intended project and click ‘Connect →’.
    Now, we should see a page with a few sections. Here’s what we need for the server side:
        Root Directory: server (or whatever you named the server)
        Start Command: node server
        Environment variables: add anything in your server-side .env file in here.
    Now, you can ‘Deploy Web Service’!
    Check your server is working as expected, and make sure to change any localhost links in your client-side code for the render server URL.

Deploying the Client

    Click ‘+ New’ and choose ‘Static Site’.
    Select the same project and click ‘Connect →’.
    Here is what we need in the section page for the client side:
        Root Directory: client (or whatever you named the client)
        Build Command: npm install && npm run build (this is assuming you’ve created a Vite client-side)
        Publish Directory: dist
        Environment variables: add anything in your client-side .env file in here.
    Now, you can ‘Deploy Static Site’!

Stretch Goals

To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.
Stretch User Stories

    🐿️ As a user, I want additional functionality on the form such as form validation so that I can have a more interactive experience when submitting my information.
    🐿️ As a user, I want the website to be visually impressive and user-friendly so that it provides a pleasant browsing experience.
    🐿️ As a user, I would like to be able to delete posts.
    🐿️ As a user, I would like to be able to like messages so I can show my appreciation to other users.

Stretch Requirements

    🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
    🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
    🏹 Add a delete button to each message and a DELETE route in the server.
    🏹 Create an option for users to like others’ posts.

Submission Instructions

Please submit the server URL, client URL, your GitHub repository link and a screenshot of your Database Schema (and Query Editor, if it was used).
How to send your database schema:

    In Supabase, select the project you have connected to this application.
    In the menu, go to ‘Database’.
    Then, go to ‘Schema Visualiser’.
    Take a screenshot of the tables you’ve used and save it in your files.
    On Moodle, in your submission, click the image icon and follow the instructions.

Please note that from this week onwards, the mark scheme will now be split into 2 sections: Web Fundamentals and Programming Logic. Each section is worth 4 marks each, totalling 8 marks overall.


REFLECTION
------------------------------------------------------------
Please also provide an assignment reflection in your project README.md file.
Required

    🎯 What requirements did you achieve?
    🎯 Were there any requirements or goals that you were unable to achieve?
    🎯 If so, what was it that you found difficult about these tasks?

Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

    Requesting feedback about a specific part of your submission.
    What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
    What errors or bugs did you encounter while completing your assignment? How did you solve them?
    What went really well and what could have gone better?
    

REFERENCES
-----------------------------------------------------------
