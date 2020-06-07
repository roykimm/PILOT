const express = require('express');
const path = require('path');
const app = express();

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/api/greeting", (req,res) => {
    res.send('Hello world');
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
})

const PORT = process.env.PORT || 6000;

app.listen(PORT);

