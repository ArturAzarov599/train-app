## Running the app

Guide: 
  Option 1 - Docker
    1. Need to manually create MySQL train-app database
    2. For populating DB and running migrations need go to `backend` folder and run command -> npm run pre-start
    3. After that need to go to the top level of folder and launch program by running a command -> docker-compose up
    4. Backend documentation is in `http://localhost:3000/documentation#/`
   
  Option 2 - Manually
    1. Need to manually create MySQL train-app database
    2. Go to backend folder and run `npm install` command
    3. For populating DB and running migrations need go to `backend` folder and run command -> npm run pre-start
    4. For launching backed need to run command: `npm run start`
    5. For launching frontend need to go into `frontend` folder and run next commands: `npm install` and `npm run start`