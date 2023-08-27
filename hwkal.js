// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/BjvYR7ZISjQ5m2IM'
global.ig = '@xyroo9_' // ubah aja
global.email = 'anj78aywkwkw@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'KeepMods' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6281536276741'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Hw V20' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'keepMods' // ubah aja ini nama sticker
global.author = 'KeepMods' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})