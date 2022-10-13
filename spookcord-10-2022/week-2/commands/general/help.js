const {Command} = require("@sapphire/framework");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

class HelpCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Help has arrived!"
    })
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => 
      builder //
        .setName("help")
        .setDescription(this.description)
    )
  }

  chatInputRun(interaction) {
    const embed = new MessageEmbed()
      .setTitle("🤖 Help!")
    //  .setAuthor({ text: "Neutron - Learn about space!" })
      .setDescription(`
    **__Neutron__** - **__Learn about space!__**

    > Neutron is a bot made for [Spookcord 2022](https://spookcord.me) Week #2. You can use this bot to learn about Space from discord! ✨🚀
    `)
      .addFields([
        {
          name: "🐱 GitHub Repository",
          value: "[Click Me](https://github.com/pratik12350/hackathon/tree/main/spookcord-10-2022/week-2)"
        },
        {
          name: "🔥 Spookcord 2022",
          value: "[Click Me](https://spookcord.me)"
        },
        {
          name: "✨ Made by",
          value: "[Click Me](https://discord.com/users/742228129107410976)"
        }
      ])
      .setColor("#2F3136")
      .setFooter({ text: "Made by Pratik#6965" })

    const commandsBtn = new MessageButton()
      .setLabel("Commands")
      .setStyle("PRIMARY")
      .setCustomId("help-commands")

    const btnRow = new MessageActionRow()
      .addComponents(commandsBtn)

    interaction.reply({
      embeds: [embed],
      components: [btnRow]
    })
  }
}

module.exports = { HelpCommand }
