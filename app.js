var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('HELLO WELCOME TO Cloud4C Technologies Hyderabad.........AWS DEVOPS WORKING PARTNER.......A CTRLS Datacenter Company Pvt Ltd, Madhapur, Hyderabad, India'); //write a response to the client
  res.end(); //end the response
}).listen(9981); //the server object listens on port 80
