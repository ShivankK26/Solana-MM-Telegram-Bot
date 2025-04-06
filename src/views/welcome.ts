import { ViewData } from '../types';

export default {
    data: {} as { username?: string },
    get welcome() {
        return `👋 Welcome to the bot, ${this.data.username || 'friend'}!\n\nI'm here to help you. Use /help to see what I can do.`;
    }
}