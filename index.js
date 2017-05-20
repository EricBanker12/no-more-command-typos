// Formats messages - made by Meishu: https://github.com/meishuu Source: https://github.com/baldera-mods/slash/blob/master/string.js
const format = require('./string.js')

// Always block messages that start with "!"
module.exports = function FpsUtils(dispatch) {
	
	// Hooks chat you send
	dispatch.hook('C_CHAT', 1, {order: 100}, event => {
		
		// remove font formatting from message
		let message = format.stripTags(event.message)
		
		// If message starts with "\\!", do send the message
		if (message.startsWith('\\!')) {
			event.message = event.message.replace('\\!', '!')
			return true
		}
		
		// If message starts with "!", do NOT send message to server
		if (message.startsWith('!')) {return false}
	})
	
	// Hooks whispers you send
	dispatch.hook('C_WHISPER', 1, {order: 100}, event => {
		
		// remove font formatting from message
		let message = format.stripTags(event.message)
		
		// If target starts with "!", do NOT send the message
		if (event.target.startsWith('!')) {return false}
		
		// If message starts with "\\!", do send the message
		if (message.startsWith('\\!')) {
			event.message = event.message.replace('\\!', '!')
			return true
		}
		
		// If message starts with "!", do NOT send message
		if (message.startsWith('!')) {return false}
	})	
}