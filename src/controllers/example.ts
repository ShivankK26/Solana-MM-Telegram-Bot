import { view } from '../utils/view';
import { BotContext } from '../types';

const exampleMsg = view('example');

/**
 * Show up welcome message when /start command triggered
 * and register new user to database for statistics
 */
export async function welcome(ctx: BotContext): Promise<void> {
    const from = ctx.update.message.from;
    const username = from.username || from.first_name || 'friend';

    const message = view('welcome', { username }).welcome;
    await ctx.reply(message);
}

/**
 * Show help message 
 */
export function help(ctx: BotContext): void {
    ctx.reply(exampleMsg.help);
}

/**
 * Reply with emoji 
 */
export function sticker(ctx: BotContext): void {
    ctx.reply(exampleMsg.sticker);
}

/**
 * Reply 'hi' message 
 */
export function greeting(ctx: BotContext): void {
    ctx.reply(exampleMsg.greeting);
}

