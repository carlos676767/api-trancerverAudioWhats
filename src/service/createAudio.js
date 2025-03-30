const fs = require("fs");
const path = require("path");

const { v4: uuidv4, v4 } = require('uuid');
const ConvreterToMp3 = require("./converterToMp3");
const UnlinkValue = require("./unlinkValue");
const moveAudio = require("./moveAudio");
 
 async function CreateAudio(client) {
    const chat = await client.getChats()
    const user = chat.filter(char => !char.isGroup)[0]
    const mensages = await  user.fetchMessages({ limit: 1})

    const filterAudioUser = mensages.filter(user => user.hasMedia)

    if (filterAudioUser) {
      const deprecatedMms3Url = await filterAudioUser[0].downloadMedia()
      const extion = deprecatedMms3Url.mimetype.split(`/`)[1].split(` `)[0].replace(/[^\w\s]/g, "")
      
      const nameInicialAudio = `app.${extion}`
      
      fs.writeFileSync(nameInicialAudio, deprecatedMms3Url.data, { encoding: "base64" });


      const audioFinalyPath = `${v4()}.wav`
      ConvreterToMp3(nameInicialAudio,  audioFinalyPath)
      UnlinkValue(nameInicialAudio)
    //   moveAudio(`../${audioFinalyPath}`, path.join(__dirname, `audio`, audioFinalyPath))
    }

}


module.exports = CreateAudio;

// require(`../`)