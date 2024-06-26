const { Client, Collection } = require("discord.js");
const { logError } = require("./util/loggers.js");
require("dotenv").config();
const TOKEN = "OTQ5NzQ5MDMwNjkzNTA3MTU0.YiO4tg.Ku74yjx672bvjk0u-ZW6NS8OAM8";

const client = new Client({
  intents: 32767,
  partials: ["MESSAGE", "CHANNEL"],
});

client.version = require("./package.json").version;
client.categories = new Set();
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.prefix = "$";
// eslint-disable-next-line no-loss-of-precision
client.owners = [396479397537906689];
//client.owners = [];

["command", "event"].forEach(async (handler) => {
  await require(`./handlers/${handler}`)(client);
});

client
  .login(TOKEN)
  .then(() => {
    console.log("Successfully logged in!");
  })
  .catch((error) => {
    console.log(`Invalid TOKEN!\n${error}`);
  });

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

["unhandledRejection", "uncaughtException"].forEach((event) => {
  process.on(event, (err) => {
    logError(client, err);
  });
});
