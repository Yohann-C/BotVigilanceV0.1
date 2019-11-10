
import * as Discord from "discord.js"
import * as db from "quick.db"
import * as ConfigFile from "./config"
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

//message de connection
client.on('ready', () => {

  console.log("Je suis connecté !") //message en ligne
  client.user.setActivity("Chasse des trésors").catch(console.error) //activité
  //let allUsers = client.users.array();

})



//fonction de message reçu
client.on("message", (message) => {

  //igonore message du bot
  if (message.author.bot) { return; }

  //empeche le bot de marcher en DM
  if (message.channel.type == "dm") { return; }

  //comande ping
  if (message.content === "ping") {
    return message.channel.send('Pong sale chien ')
  }

  //commande non
  if (message.content === "non") {
    return message.channel.send('bril fdp ')
  }

  //ignore messages qui commencent pas par prefix
  if (!message.content.startsWith(ConfigFile.config.prefix)) { return; }

  handleCommand(message);

  //mesage de damien
  if (message.author.id === "272103724263014401") {
    var random = Math.floor(Math.random() * 5);
    switch (random) {
      case 0: message.reply('bien joué ça damien'); break;
      case 1: message.reply("c'est bien ça damien"); break;
      case 2: message.reply("continue comme ça damien"); break;
      case 3: message.reply("t'es un boss damien"); break;
      case 4: message.reply("t'es VRAIMENT un dieu damien"); break;
    }
  }

});

async function handleCommand(message: Discord.Message) {
  //enleve le prefix et garde la commande + arg
  let command = message.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLocaleLowerCase();
  let args = message.content.split(" ").slice(1);

  for (const commandsClass of commands) {

    try {

      if (!commandsClass.isThisCommand(command)) {
        continue;
      }

      await commandsClass.runCommand(args, message, client);
    }
    catch (exception) {

      console.log(exception);
    }
  }
}

function loadCommands(commandsPath: string) {

  //sort si pas de commandes
  if (!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

  //boucle toute les commandes pour les charger
  for (const commandName of ConfigFile.config.commands as string[]) {

    const commandsClass = require(`${commandsPath}/${commandName}`).default;

    const command = new commandsClass() as IBotCommand;

    commands.push(command)
  }

}

client.login(ConfigFile.config.token);

