const Discord = require("./node_modules/@discordjs"); //se hace referencia a la dependencia de discord intalada anteriormente
const config = require("./config.json"); //referencia a config, donde esta el token

const client = new Discord.Client(); //objeto discord cliente (bot discord)
// Este cliente es en parte cómo interactúa con la API de Discord y cómo le notificará eventos como mensajes nuevos.

client.login(config.BOT_TOKEN);//a ese cliente le paso el token