const express=require('express');
// const { bind } = require('file-loader');
const http=require('http')
const server = http.createServer();
const app=express.Router()
const path=require('path')
const fs=require('fs')


app.use(express.static(path.join(__dirname,'src')))

app.get(/^\/(?!api).*/, function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
  });
server.listen(5000, () => {
    console.log(`Server running on port 5000`);
  });