# EDI-Project
## AI Fusion - Creation with pixel, word and sound
An user-friendly website interface that seamlessly allows users to initiate content generation tasks.

## Models used in our system
### OpenAI <br/>
Text Generation <br/>
Code Generation <br/>
Image Generation <br/>

### Replicate AI<br/>
Music Generation<br/>
Video Generation<br/>

## Pre-requisites
Node JS <br/>

## .env file setup

Rename the .env.example file to .env and add the following keys

```css
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Prisma setup

Enter here the connection details to your database. In this case, we are using PostgreSQL. you can use Mysql or SQLite as well.
```css
datasource db {
  provider = "postgresql"
  url = env("DATABASE_URL")
  relationMode = "prisma"
}
```

Enter this command to migrate tables to your database
```
npx prisma db push
```

## Start the app
```css
npm run dev
```

## Home Page
![image](https://github.com/bashlogs/EDI-Project/assets/102829101/11a23849-e38a-4495-99b4-e5b365b42992)

## Dashboard
![image](https://github.com/bashlogs/EDI-Project/assets/102829101/2688cd94-f510-4eb6-946e-b5c5a44d5430)

## Architecture Diagram
![image](https://github.com/bashlogs/EDI-Project/assets/102829101/4e2c71b4-ef97-4e84-8ed4-d754177531c5)



