/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "mute",
  aliases: ["shutup"],
  category: "moderation",
  description: "mutes a user",
  requiredPerms: ["BAN_MEMBERS"],
  enabled: true,
  run: async (client, message, args) => {},
};
