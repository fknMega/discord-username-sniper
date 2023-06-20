const Discord = require('discord.js-selfbot-v13');
const axios = require('axios');
//get config.json
const config = require('./config.json');
//get toSnipe from config
const toSnipe = config.toSnipe;
//get myPassword from config
const myPassword = config.myPassword;
//get myToken from config
const myToken = config.myToken;

//get apiKey from config
const apiKey = config.apiKey;
//get captchaService from config
const captchaService = config.captcha_service;

const client = new Discord.Client({
  checkUpdate: false,
  captchaKey: apiKey,
  captchaService: captchaService,
})




client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}\nSniping ${toSnipe}\nMade by https://github.com/fknMega`);
  
});

client.on('userUpdate', (oldUser, newUser) => {
  //check if username changed from toSnipe
  if (oldUser.username == toSnipe && newUser.username != toSnipe) {
    //change username to toSnipe
    ChangeUsername();
  }
});

async function ChangeUsername() {
  console.log('Sniping!')
  client.user.setUsername(toSnipe, myPassword).then((user) => {
    console.log(`Username sniped: ${user.username}`);
  }).catch((err) => {
    console.log(err);
  });
  
  }




  

client.login(myToken);
