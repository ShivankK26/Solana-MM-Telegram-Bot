export default {
    set setData(data) {
        this.data = data;
    },
    get welcome() {
        return `👋 Welcome to the bot, ${this.data.username}!\n\nI'm here to help you. Use /help to see what I can do.`;
    }
}