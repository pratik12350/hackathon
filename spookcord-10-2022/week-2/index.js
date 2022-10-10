require("dotenv").config()
const { SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({
  intents: 32767
})



client.login(process.env.TOKEN)
