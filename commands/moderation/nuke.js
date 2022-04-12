/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "nuke",
  aliases: [],
  category: "moderation",
  description: "nukes a channel",
  ownerOnly: false,
  guildOnly: true,
  requiredPerms: ["MANAGE_CHANNELS"],
  enabled: true,
  run: async (client, message, args) => {
    const msg_filter = (m) => m.author.id === message.author.id;
    message.channel.send(`Are you sure to nuke the channel? \`YES\` / \`NO\``);
    const collected = await message.channel
      .awaitMessages({
        filter: msg_filter,
        max: 1,
      })
      .then((message) => {
        message = message.first();
        if (
          message.content.toUpperCase() == "YES" ||
          message.content.toUpperCase() == "Y"
        ) {
          message.channel
            .clone()
            .then((message) =>
              message.send(
                `**Nuked this channel** \n https://tenor.com/view/boooooooooooooooom-wow-explode-gif-15955381`
              )
            );
          message.channel.delete();
        } else if (
          message.content.toUpperCase() == "NO" ||
          message.content.toUpperCase() == "N"
        ) {
          message.channel.send(`Terminated`);
        } else {
          message.channel.send(`Terminated: Invalid Response`);
        }
      });
  },
};
