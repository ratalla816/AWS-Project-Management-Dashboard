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
    <img src="https://skillicons.dev/icons?i=aws,react,nextjs,nodejs,express,prisma,linux,postgresql,tailwindcss,materialui,dynamodb" />
  </a>
</p>
  
## Description

Enterprise level project management application
<br>
<br>
**Well Architected Framework - Loose Coupling**
<br>
Front and backend interdependencies are limited by allowing the components to interact only through specific interfaces.
<br>
This is accomplished by Leveraging AWS Services -  A backend API hosted on an EC2 instance handles requests from the frontend, the frontend is deployed with AWS Amplify, and database management via Amazon RDS.


## ⚙️ Technologies

### Next.js | Material UI | PostgreSQL | Prisma | Amazon Linux | AWS Amplify | Amazon EC2 | Amazon RDS | Amazon Cognito | Tailwind CSS | Amazon S3 | AWS Lambda Trigger | AWS API Gateway  

https://youtu.be/KAV8vo7hGAo?t=33070
09:11:50 lambda trigger: https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/pm_lambda-trigger?newFunction=true&tab=code

<!-- **May need to run**
next  14.0.0 - 14.2.9
Severity: high
Next.js Cache Poisoning - https://github.com/advisories/GHSA-gp8f-8m3g-qvj9
fix available via `npm audit fix --force`
Will install next@14.2.14, which is outside the stated dependency range
node_modules/next

1 high severity vulnerability

To address all issues, run:
  npm audit fix --force --> 
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
First, run the development server (client & server):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

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

  * AWS Amplify<br>
User guide: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

  *AWS Amplify Authenticator<br>
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

## Deployment

   * The frontend is deployed using AWS Amplify - deployed application link: <https://main.d9jen3y4cqvrz.amplifyapp.com>
   <br>   
   * The backend API is deployed using AWS EC2 with a proxy API via API Gateway - deployed API link: <https://70nlkwfw7i.execute-api.us-east-2.amazonaws.com/prod> 
 
  
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
  TBD
  <br>
 ![Screenshot](./assets/images/TBD.jpg)
  
  
  ## Acknowledgements
  
  * Build a Nextjs Project Management App & Deploy on AWS | Cognito, EC2, Node, RDS, Postgres, Tailwind https://www.youtube.com/watch?v=KAV8vo7hGAo&t=382s
    
  ## License
  ![badge](https://img.shields.io/badge/license-MIT-important)
  <br>
  Permission to use this application is granted under the MIT license. <https://opensource.org/licenses/MIT>


   ## Contact:
   Holler at me! <a href="mailto:rob.atalla@robatalla816.com">rob.atalla@robatalla816.com</a>
