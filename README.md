

# Discord Selfbot Sniper
by fknMega

A Discord selfbot that allows you to snipe a specific username and automatically change your username to the desired one whenever it becomes available.

## Features

- Snipes a specific username on Discord.
- Automatically changes your username to the sniped username.
- Works with either CapMonster or 2Captcha captcha solving services.
- Smooth and reliable username sniping.


 </p>

 <p align="center">
   <a href="https://github.com/fknMega/discord-username-sniper/releases/tag/Releases">
    <img src="http://en-ru.gigabyte-data.com/microsites/data/167/download-color.png" width='300'>
  </a>
 </p>
 
## Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.
- Note: Before running the selfbot, make sure you have at least one interaction with the Discord account that currently owns the username you want to snipe. It is recommended to send a friend request or initiate a direct message conversation with that account.
- Please place a star on this repository on the top right :D


## Installation

1. Clone this repository or download the source code.
2. Install the required dependencies by running the following command in the project directory:

   ```shell
   npm install discord.js-selfbot-v13
   ```

3. Depending on your chosen captcha solving service, install the required package:

   - For CapMonster:
     ```shell
     npm install node-capmonster
     ```

   - For 2Captcha:
     ```shell
     npm install 2captcha
     ```

4. Replace the file `node_modules/discord.js-selfbot-v13/src/structures/ClientUser.js` with the modified version available [here](https://github.com/fknMega/discord.js-selfbot-v13/blob/db92bb073c92e87c4920f8b6946478316c089495/src/structures/ClientUser.js).

## Configuration

1. Create a `config.json` file in the root directory of the project.
2. Inside the `config.json` file, provide the following information:

   ```json
   {
     "toSnipe": "username to snipe",
     "myPassword": "your password",
     "myToken": "your token",
     "captcha_service": "capmonster or 2captcha",
     "apiKey": "your captcha key"
   }
   ```

   - `toSnipe`: The username you want to snipe.
   - `myPassword`: Your Discord account password.
   - `myToken`: Your Discord account token. (Note: Be cautious with your token and keep it private.)
   - `captcha_service`: The captcha solving service you want to use (capmonster or 2captcha).
   - `apiKey`: Your API key for the chosen captcha solving service.

## Usage

1. Run the following command in the project directory to start the Discord Selfbot Sniper:

   ```shell
   node index.js
   ```

2. The selfbot will log in with the provided token and start monitoring for username changes.
3. Once the desired username becomes available, the selfbot will automatically change your username to the sniped username.

Example of a valid output:

<img src='https://i.ibb.co/gMD8MWM/firefox-tch4-Ca-ZKPg.png' width='450'>

## Notes

- This selfbot is intended for educational purposes and self-use only. Use it responsibly and respect Discord's Terms of Service.
- Be careful with your Discord account token and keep it private. Sharing your token can lead to unauthorized access to your account.

## Credits

- [Discord.js-Selfbot-v13](https://www.npmjs.com/package/discord.js-selfbot-v13)
- [CapMonster](https://www.npmjs.com/package/node-capmonster) (if using CapMonster captcha service)
- [2Captcha](https://www.npmjs.com/package/2captcha) (if using 2Captcha captcha service)
- Made by fknMega

