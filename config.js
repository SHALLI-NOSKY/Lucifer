//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2349120730021" 
global.namaCreator = "𝑴𝑨𝑿𝑾𝑬𝑳𝑳"
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.𝟏' 
global.codeInvite = "https://wa.me/qr/MY2JIUSBX5FJD1"
global.isLink = 'https://wa.me/qr/MY2JIUSBX5FJD1'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝑴𝑨𝑿𝑾𝑬𝑳𝑳" 
global.author = "𝙇𝙐𝘾𝙄𝙁𝙀𝙍-𝙑5" 
global.jumlah = "5" 
global.namabot = "𝙇𝙐𝘾𝙄𝙁𝙀𝙍-𝙑5" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
