require("dotenv").config()
const { SapphireClient } = require("@sapphire/framework");
// const logger = require("./utils/logger");

const client = new SapphireClient({
  intents: 32767
})

// Logger testing
/*
logger.info("info log");
logger.debug("debug log");
logger.warn("warning log");
logger.success("success log");
logger.error("error log");
*/

client.login(process.env.TOKEN)
