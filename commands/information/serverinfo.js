/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinfo", "server"],
  category: "information",
  description: "Displays server information",
  usage: "$serverinfo",
  ownerOnly: false,
  guildOnly: false,
  requiredPerms: [],
  enabled: true,
  run: async (client, message, args) => {
    if (message.guild.id !== "932742129904672839")
      return message.channel
        .send({ content: "This command can only be ran in the main guild." })
        .catch((e) => {});

    const daGuild = message.guild;

    let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Server Info: ${daGuild.name}`)
      .setFooter({
        text: `${message.author.tag}`,
        iconURL: message.author.displayAvatarURL(),
      })
      .setThumbnail(daGuild.iconURL({ dynamic: true }))
      .addFields(
        { name: "Name:", value: `${daGuild.name}`, inline: true },
        { name: "ID:", value: `${daGuild.id}\n`, inline: true },
        { name: "Owner:", value: `<@${daGuild.ownerId}>\n`, inline: true },
        {
          name: "Members:",
          value: `${daGuild.members.cache.size}`,
          inline: true,
        },
        {
          name: "Users:",
          value: `${
            daGuild.members.cache.filter((member) => !member.user.bot).size
          }`,
          inline: true,
        },
        {
          name: "Bots:",
          value: `${
            daGuild.members.cache.filter((member) => member.user.bot).size
          }`,
          inline: true,
        },
        {
          name: "Date of Creation:",
          value: `\`\`\`${daGuild.createdAt.toLocaleString()}\`\`\``,
        }
      )
      .setTimestamp();

    await message.channel
      .send({ embeds: [embed] })
      .then((msg) => {
        if (client.config.deleteCommands) {
          setTimeout(() => {
            msg.delete().catch((e) => {});
          }, 14000);
        }
      })
      .catch((e) => {});
  },
};
