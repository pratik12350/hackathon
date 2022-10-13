require("colors");
const { Listener } = require("@sapphire/framework");
const logger = require("../utils/logger");

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

    logger.success("Neutron is now online!");
  }
}

module.exports = { ReadyListener }
