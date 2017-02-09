# Cadaxo OPENUI5 OData V2 CRUD

This is an OPENUI5 app for all UI5 learners. It is a simple app with one view which makes basic OData operations (Create, Read, Update, Delete). As the backend source of data, the public Read-Write [services.odata.org](http://services.odata.org/) OData service is being used. Anyone can join, contribute and make this app better.

## How to start
Check the [CURRENT LIVE VERSION](https://odata2crud-a17cc5c5c.dispatcher.hana.ondemand.com/index.html?hc_reset) deployed to HCP.

As you can see it is very simple OPENUI5 app connected to real ODATA Backend. In this app you can see the list of products, edit the products, create new products or delete products. Feel free to play around!

The app is not perfect, but anyone can contribute and make it better. Check our [current issues](https://github.com/cadaxo/openui5-app-odata-v2-crud/issues) or, if you have something on mind how to make it better, [create your own issue](https://github.com/cadaxo/openui5-app-odata-v2-crud/issues/new).

## Development Setup
If you want to contribute or just play with the code, you have to clone this github repository.

### Setup for WEB IDE
- Open your SAP WEB IDE
- Right-click 'Workspace' root folder
- Select - Git -> Clone repository
- Enter: https://github.com/cadaxo/openui5-app-odata-v2-crud.git
- Run index.html (you will need Northwind Destination configured)
- or Run test/mockServer.html (to run with mock data from json file)

### Setup without WEB IDE
Prerequisites: [Node.js](http://nodejs.org/), [Git](https://git-scm.com/)

Open your terminal or command line and check if you have node.js and npm installed by typing: `npm -v` and `node -v`. You should see your npm and node versions. If not, instal [Node.js](http://nodejs.org/) first.

Then create a folder for your project and run following commands in your folder in this order:
```bash
git clone https://github.com/cadaxo/openui5-app-odata-v2-crud.git
npm install
npm start
```
If all steps were successfull, you can now open `http://localhost:5000/webapp/test/mockServer.html` in your browser to see the app runing with the mock data.

### Northwind Destination configuration on Hana Cloud Platform
The backend service was configured in Hana Cloud Platform destinations with following content:
- Name - northwind2  
- Type - HTTP
- URL - http://services.odata.org/V2/(S(yt52emowdvohwbsq12q2ak0a))/OData/OData.svc/
- Proxy Type - Internet
- Authenticaution - NoAuthentication

Additional Properties
- WebIDEEnabled - true
- WebIDESystem - northwind
- WebIDEUsage - odata_gen,odata_abap,ui5_execute_abap,dev_abap

## Contribution to this repository
Send a [request to join our team](https://github.com/orgs/cadaxo/teams/openui5developers). After we accept it, you can push to this repository.

### From WEB IDE
- Open Git Pane (Ctrl+Shift+V)
- in Commit section, mark the files you want to commit
- describe your changes in Commit Description
- click Commit and Push -> select origin/master remote branch

### From localhost
```bash
git add .
git commit -m "describe your changes here"
git push origin master
```

## Questions
If you struggle in any step, please contact me on [openui5.slack.com](https://openui5.slack.com/team/sacha.dusan). We can then upgrade this readme file to make it better for everyone.

## Made By
[Cadaxo](http://www.cadaxo.com/), Dusan Sacha  
Email: dusan.sacha@cadaxo.com  
Twitter: [sacha_dusan](http://twitter.com/sacha_dusan)

## License
Copyright © 2017, Cadaxo  
This project is licensed under the MIT license.
