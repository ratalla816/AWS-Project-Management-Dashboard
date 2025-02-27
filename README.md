# AWS-Project-Management-Dashboard

  ![badge](https://img.shields.io/github/languages/top/ratalla816/AWS-Project-Management-Dashboard)
  <br> 
  ![badge](https://img.shields.io/github/languages/count/ratalla816/AWS-Project-Management-Dashboard)
  <br>
  ![badge](https://img.shields.io/github/issues/ratalla816/AWS-Project-Management-Dashboard)
  <br>
  ![badge](https://img.shields.io/github/issues-closed/ratalla816/AWS-Project-Management-Dashboard)
  <br>
  ![badge](https://img.shields.io/github/last-commit/ratalla816/AWS-Project-Management-Dashboard)
  <br>
  ![badge](https://img.shields.io/badge/license-MIT-important)

  <p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=aws,react,nextjs,nodejs,redux,express,prisma,linux,postgresql,tailwindcss,materialui" />
  </a>
</p>
  
## Description

An enterprise-grade project management application that features robust data analytics and user management capabilities. The application is built with a Next.js frontend and a Node.js backend, with a PostgreSQL database. The application is deployed on AWS using EC2, RDS, and Cognito. The application is designed to be scalable and secure, with a focus on loose coupling and high availability.


## ⚙️ Technologies

### Next.js | Material UI | PostgreSQL | Redux Toolkit | Prisma | Amazon Linux | AWS Amplify | AWS EC2 | AWS RDS | AWS Cognito | Tailwind CSS | AWS S3 | AWS Lambda Trigger | AWS API Gateway | PM2  

## Table of Contents
  - [Description](#description)
  - [Documentation](#documentation)
  - [Deployment](#deployment)
  - [Screenshot](#screenshot)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Contact](#contact)
  
## Documentation
  
 ### Diagrams
 
  AWS Architecture Diagram
  <br>
 ![Screenshot](./assets/images/AWS_Architecture_Diagram.jpg)
  <br>
  <br>
  Data Model Diagram
  <br>
 ![Screenshot](./assets/images/Data_Model_Diagram.jpg)
  <br>
  <br>
  AWS Cognito Diagram
  <br>
 ![Screenshot](./assets/images/ProjectManagement_Map_AWS_Cognito.Diagram.jpg)
  
### Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
<br>
First, make sure these are installed:

- Git
- Node.js
- npm (Node Package Manager)
- PostgreSQL ([download](https://www.postgresql.org/download/))
- PgAdmin ([download](https://www.pgadmin.org/download/))

### Installation Steps

1. Clone the repository:
   `git clone [git url]`
   `cd project-management`

2. Install dependencies in both client and server:
   `cd client`
   `npm i`
   `cd ..`
   `cd server`
   `npm i`

3. Set up the database:
   `npx prisma generate`
   `npx prisma migrate dev --name init`
   `npm run seed`

4. Configure environment variables:

- `.env` for server settings (PORT, DATABASE_URL)
- `.env.local` for client settings (NEXT_PUBLIC_API_BASE_URL)

5. Run the project
   `npm run dev`
run the development server (client & server):

```bash
npm run dev
```
<br>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js) - find more examples and tutorials.
- [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) - learn how to deploy your Next.js app.

### Additional Resources

  * React<br>
Documentation: https://react.dev/reference/react

  * Material UI<br>
Installation: https://mui.com/material-ui/getting-started/installation/<br>
Icons: https://mui.com/material-ui/material-icons/

  * Node<br>
Documentation: https://nodejs.org/docs/latest/api/

  * Express<br>
Getting Started: https://expressjs.com/en/starter/installing.html

  * Prisma<br>
Documentation: https://www.prisma.io/docs/

  * PostgreSQL<br>
Documentation: https://www.postgresql.org/docs/

  * PM2<br>
Documentation: https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/

  * AWS Amplify<br>
User guide: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

  * AWS Amplify Authenticator<br>
User guide: https://ui.docs.amplify.aws/react/connected-components/authenticator

  * Amazon EC2<br>
User guide: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html

  * Amazon RDS Database<br>
User guide: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html

  * Amazon Cognito<br>
User guide: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
<br>
Authenticate existing React application users by using Amazon Cognito and AWS Amplify UI: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/authenticate-react-app-users-cognito-amplify-ui.html

  * Tailwind CSS<br>
Documentation: https://tailwindcss.com/docs

  * Prisma<br>
Documentation: https://www.prisma.io/docs/

  * PostgreSQL<br>
Documentation: https://www.postgresql.org/docs/

  * AWS Lambda<br>
Documentation: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html

  * Lambda Trigger<br>
Documentation: https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html
Deployed Lambda script:

```javascript
import https from "node:https";

export const handler = async (event) => {
    const postData = JSON.stringify({
        username: event.request.userAttributes["preferred_username"] || event.userName,
        cognitoId: event.userName,
        profilePictureUrl: "i1.jpg",
        teamId: 1
       });
        
    const options = {
        hostname: "70nlkwfw7i.execute-api.us-east-2.amazonaws.com",
        port: 443,
        path: "/create-user",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-length": Buffer.byteLength(postData)
        }
    };
    
     return new Promise((resolve, reject) => {
         const req = https.request(options, (res) => {
             res.setEncoding("utf8");
             let responseBody = "";
             res.on("data", (chunk) => responseBody += chunk)
             res.on("end", () => resolve(responseBody));
       });
     
       req.on("error", (error) => reject(error));
          req.write(postData);
          req.end();
     })
 };

    const responseBody = await new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", chunk => body += chunk);
            res.on("end", () => resolve(body));
        });
        
        req.on("error", reject);
        req.write(postData);
        req.end();
    });

    return event; 
}; 
```

## Deployment

   * This application is deployed using AWS Amplify <https://main.d9jen3y4cqvrz.amplifyapp.com>
     
  
  ## Screenshot
  
  PostgreSQL testing via pgAdmin
  <br>
 ![Screenshot](./assets/images/pgAdmin4-task-patch.jpg)
  <br>
  <br>
  Testing via Postman
  <br>
 ![Screenshot](./assets/images/postman-task-patch.jpg)
  <br>
  <br>
  SideBar functionality
  <br>
 ![Screenshot](./assets/images/vid1.gif)
  <br>
  <br>
   Easily Export data
  <br>
 ![Screenshot](./assets/images/vid2.gif)
  <br>
  <br>
   Kanban Board
  <br>
 ![Screenshot](./assets/images/kanban.jpg)
  <br>
  <br>
   Light and Dark modes
  <br>
 ![Screenshot](./assets/images/lightdark.jpg)
  
  
  ## Acknowledgements
  
  * Build a Nextjs Project Management App & Deploy on AWS | Cognito, EC2, Node, RDS, Postgres, Tailwind https://www.youtube.com/watch?v=KAV8vo7hGAo&t=382s
  <br>
    Ed Roh
    <br>
    edroh.com
    
  ## License
  ![badge](https://img.shields.io/badge/license-MIT-important)
  <br>
  Permission to use this application is granted under the MIT license. <https://opensource.org/licenses/MIT>


   ## Contact:
   Holler at me! <a href="mailto:rob.atalla@robatalla816.com">rob.atalla@robatalla816.com</a>
