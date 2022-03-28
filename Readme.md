## pre-requisite

install maven >3.5 and java >11

## build the project 
from the project root folder execute the following command and it will build all the submodules.

mvn clean install

## run the application backend

You can up the backend with following steps  
    cd  backend\service-registry && mvnw spring-boot:run
    cd  backend\api-gateway && mvnw spring-boot:run
    cd  backend\product-service && mvnw spring-boot:run
    cd  backend\cart-service && mvnw spring-boot:run

For investigations and troubleshoot, you can use [Zipkin server](https://zipkin.io/pages/quickstart.html)
just download the jar file and run the following command 

java -jar Zapkin.jar

To add products use postman 

POST : http://localhost:9191/product/ BODY = { "productName": "A", "productImage":"assets/images/item1.jpg" }

## run the application frontend
cd frontend
npm install
npm run ng -- buid components
npm start

