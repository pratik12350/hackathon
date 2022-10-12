require("colors");

const logger = {};

logger["info"] = (text) => {
  console.log(
    `ℹ`,
    `[INFO]`.blue,
    `::`,
    `${text}`
  )
}

logger["debug"] = (text) => {
  console.log(
    `◉`,
    `[DEBUG]`.magenta,
    `::`,
    `${text}`
  )
}

logger["warn"] = (text) => {
  console.log(
    `⚠`,
    `[WARNING]`.yellow,
    `::`,
    `${text}`
  )
}

logger["success"] = (text) => {
  console.log(
    `✔`,
    `[SUCCESS]`.green,
    `::`,
    `${text}`
  )
}

logger["error"] = (text) => {
  console.log(
    `✖`,
    `[ERROR]`.red,
    `::`,
    `${text}`
  )
}

module.exports = logger;
