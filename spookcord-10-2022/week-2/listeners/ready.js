require("colors");
const { Listener } = require("@sapphire/framework");

class ReadyListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      once: true,
      event: "ready"
    });
  }

  run(client) {
    /*
     * @param {require("discord.js").Client} client
     */
    
    client.user.setPresence({
      activities: [{ name: "Learn more about astronomy - 🎃" }],
      status: "idle"
    })
    console.log(`${client.user.username}`.blue, `is Up! 🎃`.green)
  }
}

module.exports = { ReadyListener }
