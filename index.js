const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1387765659:AAEfplAc-dC6r9z_ye8vvl5iwk_IB88eeU0'
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('new_chat_members', (msg) =>{
	bot.sendMessage(msg.chat.id, 'Olá ${msg.from.first_name}, bem vindo ao meu canal! Qualquer coisa pode nos comunicar')
})

