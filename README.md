WIP


<!-- https://reactjs.org/docs/create-a-new-react-app.html -->
<!-- https://www.youtube.com/watch?v=ISCiJmY1g2M 
```bash
mkdir client
cd client
npx create-react-app my-app # create react app name my-app
cd my-app
touch Dockerfile
 cd client && npm install react-table --save
```-->

clone repository
```
cd client/my-app
npm install
cd ...
docker-compose build && docker-compose up -d
```

# running modes 
change /client/my-app/package.json *proxy to:

  develpment mode:
    "http://localhost:5000"
    
  production mode:
    "http://server:5000"
  



