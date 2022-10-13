const { Command } = require("@sapphire/framework");
const { MessageEmbed, CommandInteraction } = require("discord.js");
const fetch = require("node-fetch");
const { codeBlock } = require("@discordjs/builders")

const NASA_API_KEY = process.env.NASA_API_KEY;
const todayDate = new Date().toISOString().split("T")[0]

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayDate}&end_date=${todayDate}&api_key=${NASA_API_KEY}`;

class NeoCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Current Near Earth Objects"
    })
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) =>
      builder //
        .setName("neo")
        .setDescription(this.description)
    )
  }

  async chatInputRun(interaction) {
    /*
     * @param {CommandInteraction} interaction
     */

    let data = await fetch(url).then(res => res.json());

    //  console.log(data.near_earth_objects["2022-10-13"])

    const neoEmbed = new MessageEmbed()
      .setTitle("Current Near Earth Objects")
      .setColor("#2F3136")

    data.near_earth_objects[todayDate]
      .forEach(value => {

        let rawValue = `Name: ${value.name}\nDiameter: ${value.estimated_diameter.kilometers.estimated_diameter_min} KM\nVelocity: ${~~(value.close_approach_data[0].relative_velocity.kilometers_per_second)} km/s\nMissed By: ${~~(value.close_approach_data[0].miss_distance.kilometers)} KM\nOrbiting Body: ${value.close_approach_data[0]?.orbiting_body}\nis hazardous?: ${value.is_potentially_hazardous_asteroid ? "Yes" : "No"}`;

        let fieldValue = codeBlock(rawValue)

        neoEmbed.addField(`${value.name}`, `${fieldValue}`)
      })

    interaction.reply({
      embeds: [neoEmbed]
    })
  }
}

module.exports = { NeoCommand }
