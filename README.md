# BandBuddy

Backend Instructions 

## Getting started

1. Clone this repository (https://github.com/gdevl/sccBackend.git)
2. Install dependencies ```npm start```
3. Create a **.env** file based on the example with proper settings for your
   local environment (use .env.example as a template)
4. Create a database user with the same name and password as found in your
   **.env** file with CREATEDB privileges
5. Run
   * `npm run db:create`
   * `npm run db:migrate`
   * `npm run db:seed:all`
   * `npm start`
6. Start backend server: ```npm run dev```

## FrontEnd Instructions

1. Clone this repository ( https://github.com/gdevl/ssFrontend.git )
2. Install dependencies ```npm install```
3. Start frontend server: ```npm run dev```
4. If the seeds worked as intended in step 5 above, the demo login should auto populate when you point your browser to ```http://localhost:3000/```
5. Login with the demo user's credentials and explore!
