1. Create a New Cube Project

   npx cubejs-cli create cube-project -d postgres

Then:
  cd cube-project
  
2. Configure Database Connection
   Open the .env file inside cube-project and set it like this:

    CUBEJS_DB_TYPE=postgres
    CUBEJS_DB_HOST=localhost
    CUBEJS_DB_PORT=5432
    CUBEJS_DB_NAME=dubai_jazz_db  // add yours 
    CUBEJS_DB_USER=postgres
    CUBEJS_DB_PASS=231343
    
    CUBEJS_DEV_MODE=true
    CUBEJS_API_SECRET=some_random_secret_key


3. Install Dependencies
   
     npm install

4. Start the Dev Server
   
     npm run dev
   
  This will start the Cube server and open http://localhost:4000

5. Generate Schema from Tables
   In the browser:
     Visit: http://localhost:4000
     Click the "Playground" tab
     Select a table (like orders) → Click Generate

