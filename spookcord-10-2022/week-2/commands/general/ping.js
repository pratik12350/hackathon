const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Get bot latency"
    });
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => 
      builder //
        .setName("ping")
        .setDescription(this.description)
    )
  }

  chatInputRun(interaction) {
    let latency = this.container.client.ws.ping;

    interaction.reply({
      content: `Pong! ${latency} ms 🏓`,
      ephemeral: true
    })
  }
}

module.exports = { PingCommand }

