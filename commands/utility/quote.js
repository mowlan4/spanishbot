/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "quote",
  aliases: [],
  category: "category",
  description: "description",
  usage: "<argument 1> [argument]",
  example: "name",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    message.delete();
    let title =
      args.toString().charAt(0).toUpperCase() +
      args.toString().slice(1).toLowerCase();
    let embed = new discord.MessageEmbed().setColor("RANDOM").setTitle(title);
    message.channel.send({ embeds: [embed] });
  },
};
