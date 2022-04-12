/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "say",
  aliases: [],
  category: "Utility",
  description: "Say something",
  usage: "<say> [argument]",
  example: "$say aunty, hatem , haras negs life itself",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    message.delete();
    let saytext = args.join(" ");
    message.channel.send(saytext);
  },
};
