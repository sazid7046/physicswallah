1. npm install 
2. if you want to login/Signup section work 
    ----make a i'd on manage.auth().com
3. In manage.auth().com got to Application->create Application->goto application 
4. change some setting in 
    Allowed Callback URLs ->  http://localhost:3000
    Allowed Logout URLs -> http://localhost:3000
    Allowed Web Origins -> http://localhost:3000 
    and the save changes
5. Replace Domain and Client ID in index.js