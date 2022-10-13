const { InteractionHandler, InteractionHandlerTypes } = require("@sapphire/framework");
const { MessageEmbed } = require("discord.js");

class ButtonHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Button
    })
  }

  parse(interaction) {
    if(interaction.customId !== "help-commands") return this.none()

    return this.some()
  }

  async run(interaction) {
    let commandsList = {
      general: [
        {
          name: "/ping",
          description: "Get bot latency"
        },
        {
          name: "/help",
          description: "This command."
        }
      ],
      astronomy: [
        {
          name: "/apod",
          description: "Astronomy Picture of The Day"
        },
        {
          name: "/neo",
          description: "Current Near Earth Objects (NEO)"
        }
      ]
    };

    
    let generalCmdList = '';
    let astronomyCmdList = '';
    let generalCmds = commandsList.general;
    let astronomyCmds = commandsList.astronomy;

    generalCmds.forEach((value) => {
      generalCmdList += `> \`${value.name}\`\t\t => **${value.description}**\n`
    })

    astronomyCmds.forEach((value) => {
      astronomyCmdList += `> \`${value.name}\`\t\t => **${value.description}**\n`
    })

    /*
    for (let i = 0; i < generalCmds.length; i++) {
      let val = generalCmds[i];

      generalCmdList =+ `> \`${val.name}\`\t\t => **${val.description}**\n`;
    }
    */

    let embed = new MessageEmbed()
      .setTitle("List of Commands")
      .addFields([
        {
          name: "🤖 | **General**",
          value: generalCmdList
        },
        {
          name: "🌠 | **Astronomy**",
          value: astronomyCmdList
        }
      ])
      .setColor("2F3136")

    await interaction.reply({
      embeds: [embed],
      ephemeral: true
    })
  }
}

module.exports = { ButtonHandler }
