const { logReady } = require("../../util/loggers.js");

module.exports = {
  name: "ready",
  // eslint-disable-next-line no-unused-vars
  async execute(client, message) {
    console.log(`${client.user.tag} ready! (v${client.version})`);
    await logReady(client);
    await client.user.setActivity(`over my goats | ${client.prefix}help`, {
      type: "WATCHING",
    });
    await client.user.setStatus("idle");
  },
};
