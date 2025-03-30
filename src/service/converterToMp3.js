function ConvreterToMp3(audio, pathAudio) {
  const ffmpeg = require("fluent-ffmpeg");
  ffmpeg(audio)
    .output(pathAudio)
    .on('end', () => {
        console.log('Conversão concluída!');
      })
      .on('error', (err) => {
        console.log('Erro: ' + err.message);
      })
    .run();
}


module.exports = ConvreterToMp3