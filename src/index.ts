
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

  if (message.author.id === '273028793709625345') {
    message.delete()
    message.channel.send('lol ryuu tg xDDD')
    return;
  }

  if (message.author.id === '202836483596353536') {
    message.channel.send('Ryuu <3')
    message.channel.send('https://media.discordapp.net/attachments/823687543203561523/831376016101605426/unknown.png')
    return;
  }

  //ignore messages qui commencent pas par prefix
  if (!message.content.startsWith(ConfigFile.config.prefix)) { return; }

  handleCommand(message);

  //mesage de damien

  //202836483596353536

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

