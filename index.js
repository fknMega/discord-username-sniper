const Discord = require('discord.js-selfbot-v13');
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

  /*
  > Optional: 
  If you can't have an interaction with the user,
  use this method to make a dm channel by force using the discord API

  replace id with the user id of the target.
  */
  
  //dmUser('id');
  // remove the // to enable ^
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

async function dmUser(user) {
  //send post request to https://discord.com/api/v9/users/@me/channels
  const axios = require('axios');

  //token & user agent headers
  const headers = {
    'Authorization': `${myToken}`,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0',
    'Content-Type': 'application/json'
  }

  //data to send
  const data = {
    'recipients': [`${user}`]
  }

  //send post request
  res = await axios.post('https://discord.com/api/v9/users/@me/channels', data, { headers: headers })
  console.log('Made dm: ' + res.status)
}

client.login(myToken);
