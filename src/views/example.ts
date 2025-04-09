export default {
    data: {} as Record<string, any>,
    get help() {
        return 'Here are the available commands:\n/start - Start the bot\n/help - Show this help message\n/viewToken - Analyze any SPL token\n/addToken - Enter any new SPL token by its CA\n/portfolio - View your solana portfolio';
    },
    get sticker() {
        return '👍';
    },
    get greeting() {
        return 'Hello there! 👋';
    }
}