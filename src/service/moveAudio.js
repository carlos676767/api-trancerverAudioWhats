function moveAudio(caminhoAtual, novoCaminho) {
    const fs = require(`fs`)

    fs.renameSync(caminhoAtual, novoCaminho );
}

module.exports = moveAudio;