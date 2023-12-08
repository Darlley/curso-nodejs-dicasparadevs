const mongoose = require("mongoose")
const chalk = require("chalk");

const MONGODB_URL = `mongodb+srv://${process.env.APP_MONGODB_USERNAME}:${process.env.APP_MONGODB_PASSWORD}@tutorialnodejsdicaspara.s4il7w9.mongodb.net/?retryWrites=true&w=majority`

const connectToDatabase = async () => {
  await mongoose.connect(MONGODB_URL)
    .then(() => {
      console.log(chalk.green("Conexão com MongoDB feita com sucesso!"))
    }).catch((error) => {
      console.log(chalk.red(error))
    })
}

module.exports = connectToDatabase