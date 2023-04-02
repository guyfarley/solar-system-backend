# Team Intergalactic Presents: Intergalactic Planetary - Backend

<p>A full-stack application which teaches students about our solar system.  The Homepage lets the user flip through all the planets within the solar system (which includes Pluto), gives the user other resources to extend their knowledge (we recommend checking out the solar system rap!), and a few fun facts about our solar system.  </p>
<p>The planet cards on the home page have a 'Learn more' section where the user is directed to the individual page for that planet.  The planet cards also have a locate button and when selected the planet is located on the solar system within the banner on the homepage.</p>
<p>Each planet has it's own planet page.  The planet page includes basic information about the planet, 3 identifying facts on the specific planet, and the moons for the specific planet.  Up to 10 moons for each planet are shown with the name of the moon, the size, and the name history for that moon.</p>
<p>The application if fully responsive in mobile, tablet, and desktop.</p>
<p>The project is a week long hackathon with a team consisting of three developers who came together through the Hackathon discord channel, wireframed an idea, planned tickets/tasks through a Trello board, and communicated daily via Discord. </p>

## Created by Team Intergalactic 🚀

- <a href="https://github.com/guyfarley" target="_blank">Guy Farley</a>
- <a href="https://github.com/revyrob" target="_blank">Kayle Robson</a>
- <a href="https://github.com/madxb98" target="_blank">Madison Brown </a>

## Hackathon Parameters

This application was developed for a Dear Junior Dev Hackathon, between March 24 and April 2, 2023. Requirements:

**Frontend:**

- Each planet of the solar system must have its own profile page.
- Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)
- ***NOTE:*** *No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.*
- If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size).
- Planet pages must include at least two different component styles.
- If a planet has more than one moon, the moon information must be displayed in repeating elements.
- All planet and moon content MUST be stored in a database.

**Backend:**

- You must use foreign keys.
- Planets and Moons must be stored separate from one another.
- You must incorporate one ENUM for the planet data.
- ENUM used for the planet data is the type of planet: dwarf planet, ice, terrestrial, gas

**Homepage:**

- The homepage should be an overview of the solar system.
- The data included will be up to each team.
- The homepage must include at least two components that are NOT used on any planet page.
- Homepage content does not need to be stored in a database and can be coded into your components.

## Planning and Preparation Documentation

### 🖊️ Wireframe

<a href="https://www.figma.com/file/SKLo9xQkuOUE3LnJN2Jczx/SolarSystemHackathon?node-id=0%3A1&t=TJt5GIPi0GyAOFmV-1" target="_blank">WireFrame</a>

### 📝 Trello board for tickets/tasks

<a href="https://trello.com/b/HAw11w0p/quackathon" target="_blank">Ticket board</a>

## 📸 Visual Presentation

![galaticgif](https://user-images.githubusercontent.com/66695865/229334794-a15d6902-6e5a-4317-98a5-fbb3de0197aa.gif)

## Deployed Site

<p>We deployed using Netlify and Heroku</p>
<p>Check it out 👉 <a href="https://intergalactic-planetary.netlify.app/" target="_blank">HERE</a></p>

## ⚒️ Tools Used

- React
- Express
- Axios
- Sass
- MUI
- MySQL
- AWS

## 👩‍💻 Local Installation : Backend

1. To start using this app you first need to clone the repository: `git clone git@github.com:guyfarley/solar-system-backend.git`
2. Then you will need to install all the required packages for the application. Run this command (if you're using npm): `npm i`
3. Create a `.env` while the following labels.  After each '=' you will need to have required information in single quotes

```
DB_HOST = 'solar-system-project.cbweyfkwj9c9.us-east-2.rds.amazonaws.com'
DB_PASS = 'marchquackathon'
DB_USER = 'admin'
DB_NAME = 'solar-system-project'
```

4. Run the backend by the following command: `npm start`
5. Clone and run the frontend by going to the following repo:
<https://github.com/guyfarley/solar-system-frontend>

5. Following the `README` file within the frontend repo to clone and run the frontend.

## Development Information

<p>Our backend consists of a MySQL database running on Amazon Web Services Relational Database Service and an express server running on Node.JS.</p>
<p>Our MySQL database consists of two tables, one for the planets and one for the moons.</p>

### Planet Table

<li>A unique planet id</li>
<li>The planet name</li>
<li>The planet size</li>
<li>The planet's distance from the sun in miles</li>
<li>The planet's number of moons</li>
<li>An enum representing the planet's type (terrestrial, ice giant, dwarf planet, or gas giant)</li>
<li>The length of the planet's moon in earth days</li>
<li>A description of the planet's atmosphere</li>

### Moon Table

<li>A unique moon id</li>
<li>A foreign key linking it to the planet it belongs to (planet id)</li>
<li>The moon's name</li>
<li>The history behind the moon's name</li>

<p>On the server side we start an express app and have it listen to the port specified in the .env file or it defaults to listening to 8080.</p>
<p>We establish the endpoints we listen to using an express router and a controller. For this project we listen to two main endpoints, one for the home page and one for the specific pages for each planet.</p>
<p>These routes can be found in the routes.js folder as:</p>

- `router.get("/", routeController.home);`
- `router.get('/planet/:planet_id', routeController.planet)`

<p>The first route is the home page, the second uses the specific planet id as a route parameter.</p>
<p>When these two routes are sent a get request from our frontend, they call their respective controller to handle the request.</p>
<p>In response to the home page, the controller sends a sql query to get the information of all the planets from the planet table so they can be rendered in the planet carousel.</p>
<p>In response to the second route, the controller queries for the planet specified in route parameter, as well as all the moons associated with that moon. If the planet has no moons (Mercury and Venus), it sends another query to grab only the specified planet's information.</p>

## 🔨 Things to Work On

- Getting the Solar System Banner in mobile to move around on touch so the user can see all the planets
