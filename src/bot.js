const { Client, LocalAuth } = require("whatsapp-web.js");
const CreateAudio = require("./service/createAudio");


class ClientJs {
  static qrcode = require("qrcode-terminal");

  static client = new Client({
    authStrategy: new LocalAuth()
  });
  static qrCodeGenerate() {
    ClientJs.client.on("qr", (qr) => {
      ClientJs.qrcode.generate(qr, { small: true });
    });
  }

  static async startBot() {
    ClientJs.qrCodeGenerate()
    ClientJs.client.on("ready",async () => {
  
      
      console.log("Client is ready!");
      CreateAudio(this.client)

    });

    ClientJs.client.initialize();

  }
}

 // const pathAbs = path.join(__dirname, `audio`, `${v4}.mp3`)
module.exports = ClientJs;

