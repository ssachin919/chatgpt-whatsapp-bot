const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

// client.on('message', message => {
// 	console.log(message.body);
// });

client.on('message', async message => {
	console.log(message.body)
	console.log(message.body.includes('h'))
	if(message.body.length > 0) {
		msgReply = await fetchMsg(message.body)
		console.log(msgReply)

		// message.reply(msgReply);
    client.sendMessage(message.from, msgReply);
	}
});

const fetchMsg = async (prompt) => {
	const response = await fetch('https://aicode.onrender.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt: prompt
		})
	})

	if(response.ok) {
		const data = await response.json();
		const parsedData = data.bot.trim();

		return parsedData
	} else {
		const err = await response.text()

		return err;
	}
}
 

 