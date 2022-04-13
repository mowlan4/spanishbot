/* eslint-disable */
const discord = require("discord.js");

module.exports = {
  name: "kiss",
  aliases: ["xx"],
  category: "fun",
  description: "kisses a user",
  enabled: true,
  run: async (client, message, args) => {
    if (!message.mentions.users.first()) {
      return message.reply("You must mention the user that you want to kiss!");
    }
    function getRandomArbitrary(min, max) {
      let number = Math.random() * (max - min) + min;
      number = Math.floor(number);

      if (number < 10) {
        number = `00${number}`;
        return number;
      }
      if (number < 100 && number > 10) {
        number = `0${number}`;
        return number;
      }
    }
    if (message.mentions.users.first().id === message.author.id) {
      return message.channel.send("some loner tryna kiss himself 💀");
    }
    try {
      let embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `uwu, ${message.author.username} has kissed ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setImage(
          `https://cdn.nekos.life/kiss/kiss_${getRandomArbitrary(0, 143)}.gif`
        )
        .setFooter({
          text: `${message.author.tag}`,
          iconURL: message.author.displayAvatarURL(),
        });

      return await message.channel.send({ embeds: [embed] });
    } catch (err) {}
  },
};
