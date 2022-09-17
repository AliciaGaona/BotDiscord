const Discord = require("./node_modules/@discordjs"); //se hace referencia a la dependencia de discord intalada anteriormente
const config = require("./config.json"); //referencia a config, donde esta el token

const client = new Discord.Client(); //objeto discord cliente

client.login(config.BOT_TOKEN);//a ese cliente le paso el token