/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "quot",
  aliases: [],
  category: "utility",
  description: "for quotes channel",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    message.delete();
    const msg_filter = (m) => m.author.id === message.author.id;
    message.channel.send(`Send quote`);
    const collected = await message.channel
      .awaitMessages({
        filter: msg_filter,
        max: 1,
      })
      .then((message) => {
        message = message.first();
        message.delete();

        let title =
          message.content.toString().charAt(0).toUpperCase() +
          message.content.toString().slice(1).toLowerCase();
        let embed = new discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(title)
          .setFooter({
            text: "hatem",
          });

        message.channel.send({ embeds: [embed] });
      });
  },
};
