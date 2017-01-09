# Cadaxo SAPUI5 OData V2 CRUD simple app

## Description
This UI5 app is an example of communication between a real OData V2 Backend service and SAPUI5 app. As the backend source of data we used the public Read-Write [services.odata.org](http://services.odata.org/) service.

The app was implemented for learning purposes and/or for other SAPUI5 developers just to see how we implemented the four basic operations - Create, Read, Update, Delete.

## Live
You can check the live version of this app running on Hana Cloud Platform [HERE](https://odata2crud-a17cc5c5c.dispatcher.hana.ondemand.com/index.html?hc_reset). To lanuch and re-develope the project, please check the Setup.

## Setup
The application was developed in SAP WEB IDE and is launched on Hana Cloud Platform. You can clone it, import it to your SAP WEB IDE and then run the index.html file.

### Hana Cloud Platform Destination
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

As the URL parameter feel free to use my service, but for learning purposes it is better to generate your own service on [services.odata.org](http://services.odata.org/). Open the [Browse the Full Access (Read-Write) Service](http://services.odata.org/V2/(S(readwrite))/OData/OData.svc/) link in your browser and copy the URL address.

Please keep in mind that my project uses ODATA Version 2 Service and was not tested with other versions! At [services.odata.org](http://services.odata.org/) you can generate various ODATA versions by changing 'V2' to 'V3', 'V4' in the URL address.

## Made By
[Cadaxo](http://www.cadaxo.com/), Dusan Sacha  
Email: dusan.sacha@cadaxo.com  
Twitter: [sacha_dusan](http://twitter.com/sacha_dusan)

## License
Copyright © 2016, Cadaxo  
This project is licensed under the MIT license.
