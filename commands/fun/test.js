/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "list 4 goats",
  aliases: ["goats"],
  category: "fun",
  description: "Only facts",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    message.channel.send("Thats easy: **HATEM , HARAS , AUNTY AND LETTY**");
  },
};
