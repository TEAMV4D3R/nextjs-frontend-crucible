# Crucible Next.js Frontend

This is a Next.Js React Application Styled with Tailwinds CSS. This site is deployed at https://mycrucible.netlify.apwhp/

Included pages are the Dashboard, and About The Devs which un-authenticated users can access.

To see more background information on this project, please visit the project prep library here: https://github.com/TEAMV4D3R/project_prep

## Component Architecture

Included Components include the App component which is the root component in the application. Children of the App component are the header (which wraps all of the components and stores the user authentication) and the Crucible Admin component. Inside the Crucible component, there are routes which allows the users to visit the utility pages, related to the React-Drawer component which allows the user to see the items for the pages they can visit in a hamburger menu and allows the user to access the Dashboard(homepage), MyJobs, JobSearch, and AboutTheDevs pages. The Dashboard is the parent to the BarChart and DonutChart components for handling the data visualization. MyJobs has children components CreateJobModal, MyJobsTable, and UpdateJobsModal for rendering the page components. 

## Local Setup

To get this application set up in a local terminal, the developer would need to create an env file from the sample.env file. To test running this frontend with one of the backends in the project, the user would need to put the following paths at the end of the deployment links: 
NEXT_PUBLIC_API_URL_TOKEN: /api/token/
NEXT_PUBLIC_API_URL: api/v1/jobsdata/
NEXT_PUBLIC_API_URL_2: /activejobs/
NEXT_PUBLIC_API_URL_3: api/v1/scraped_jobs/

After setting up the .env file, the developer will need to run the commands: npm install, npm run build, npm run dev to have the program wun locally.
