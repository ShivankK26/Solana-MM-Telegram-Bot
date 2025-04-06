export default {
    data: {} as Record<string, any>,
    get help() {
        return 'Here are the available commands:\n/start - Start the bot\n/help - Show this help message\n/stats - Show your statistics';
    },
    get sticker() {
        return '👍';
    },
    get greeting() {
        return 'Hello there! 👋';
    }
}