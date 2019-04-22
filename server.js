var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
    console.log('Server made successfully. View at: http://localhost:' + PORT);
});
