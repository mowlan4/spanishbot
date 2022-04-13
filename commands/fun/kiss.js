/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "kiss",
  aliases: [""],
  category: "fun",
  description: "kiss a user",
  usage: "<$kiss> [user]",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    if (!message.mentions.users.first()) {
      return message.reply("You must mention the user that you want to kiss!");
    }
    if (message.mentions.users.first().id === message.author.id) {
      return message.channel.send("some loner tryna kiss himself 💀");
    }
    try {
      const response = await fetch(`https://nekos.life/api/kiss`);
      const data = await response.json();
      console.log(data);
    } catch (err) {}
  },
};
