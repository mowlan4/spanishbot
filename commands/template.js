/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "utility",
  description: "Get the avatar URL of the tagged user(s), or your own avatar",
  usage: "<$avatar> [user]",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    if (message.mentions.users.size) {
      const avatarList = message.mentions.users.map((user) => {
        return `${user.displayAvatarURL({ format: "png", dynamic: true })}`;
      });
      message.channel.send(avatarList);
    } else {
      const userID = args[0];
      if (userID) {
        client.users
          .fetch(userID)
          .then((user) => {
            return message.channel.send(
              `${user.displayAvatarURL({ format: "png", dynamic: true })}`
            );
          })
          .catch(() => {
            return message.channel.send(
              "error finding user, make sure you are sending an ID"
            );
          });
      } else {
        return message.channel.send(
          `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`
        );
      }
    }
  },
};
