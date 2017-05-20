// Formats messages - made by teralove: https://github.com/teralove
const format = require('./format.js');

// Always block messages that start with "!"
module.exports = function noMoreCommandTypos(dispatch) {
	
	// Hooks chat you send
	dispatch.hook('C_CHAT', 1, {order: 100}, event => {
		let message = format.stripTags(event.message)
		// If message starts with "!", do not send message to server
		if (message.startsWith('!')) {return false}
	})
}
