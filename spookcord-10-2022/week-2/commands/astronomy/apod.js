const { Command } = require("@sapphire/framework");
const { MessageEmbed, CommandInteraction } = require("discord.js");
const fetch = require("node-fetch");

const NASA_API_KEY = process.env.NASA_API_KEY;
const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

class ApodCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Astronomy Picture of The Day"
    })
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) =>
      builder //
        .setName("apod")
        .setDescription(this.description)
    )
  }

  async chatInputRun(interaction) {
    /*
     * @param {CommandInteraction} interaction
     */

    let data = await fetch(url).then(res => res.json());

    const apodEmbed = new MessageEmbed()
      .setTitle(data.title)
    //  .setAuthor({ text: "Astronomy Picture of The Day" })
      .addFields([{
        name: "Explanation",
        value: data.explanation
      }])
      .setImage(data.hdurl)
      .setColor("#2F3136")

    interaction.reply({
      embeds: [apodEmbed]
    })
  }
}

module.exports = { ApodCommand }
