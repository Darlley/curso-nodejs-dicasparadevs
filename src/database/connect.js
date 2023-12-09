const mongoose = require("mongoose")
const chalk = require("chalk");

const MONGODB_URL = `mongodb+srv://darlleyleadszapp:S5L6op0X8zL2V2hk@tutorialnodejsdicaspara.s4il7w9.mongodb.net/?retryWrites=true&w=majority`

const connectToDatabase = async () => {
  await mongoose.connect(MONGODB_URL)
    .then(() => {
      console.log(chalk.green("Conexão com MongoDB feita com sucesso!"))
    }).catch((error) => {
      console.log(chalk.red(error))
    })
}

module.exports = connectToDatabase