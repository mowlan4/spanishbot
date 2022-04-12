const discord = require("discord.js");
const { DateTime } = require("luxon");
const {
  getUserFromString,
  getMemberFromUser,
} = require("../../util/converters.js");
const { titleCase } = require("../../util/format.js");

module.exports = {
  name: "punish",
  aliases: [],
  category: "moderation",
  description: "punish a user",
  usage: "<$punish [user]> ",
  ownerOnly: false,
  guildOnly: true,
  requiredPerms: ["BAN_MEMBERS"],
  enabled: false,
  run: async (client, message, args) => {
    let user = await getUserFromString(client, args.join(" "));
    user = user ? await getMemberFromUser(user, message.guild) : message.member;
    if (
      user.user.id === "451296495765815296" ||
      user.user.id === "923940900013490186"
    ) {
      message.channel.send(
        `By Allah's grace, I shall not punish <@${user.user.id}>`
      );
    }
    if (
      user.user.id === "451296495765815296" ||
      user.user.id === "923940900013490186"
    ) {
    } else {
      message.guild.channels.cache.forEach((channel) => {
        if (channel.type === "GUILD_TEXT") {
          channel.send(`<@${user.user.id}>`).then((msg) => {
            setTimeout(async () => await msg.delete(), 2 * 500);
          });
        }
      });
    }
  },
};
