var express = require('express'),
	path = require('path');
const app = express()
const url = 'localhost';

/*
* IP Adresses
*Tab on jio wifi - '192.168.29.14';
*Laptop on jio wifi -'192.168.29.169';
*No Wifi use 'localhost';
*/
const port = 8080

app.use('/public', express.static('./public'));
app.use('/Codes', express.static('../../Codes'));
app.use('/Music', express.static('../../../Music'));
app.use('/Covid-data', express.static('./Covid-data'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'Covid.html'));
});

app.listen(port, url, () => {
  console.log(`App listening at port ${url + `:` + port}`)
});