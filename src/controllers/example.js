import { view } from '../utils/view';

const exampleMsg = view('example');

/**
 * Show up welcome message when /start command triggered
 * and register new user to database for statistics
 */
export async function welcome(ctx) {
    const from = ctx.update.message.from;
    const username = from.username || from.first_name || 'friend';

    const message = view('welcome', { username }).welcome;
    ctx.reply(message);
}

/**
 * Show help message 
 */
export function help(ctx) {
    ctx.reply(exampleMsg.help);
}

/**
 * Reply with emoji 
 */
export function sticker(ctx) {
    ctx.reply(exampleMsg.sticker);
}

/**
 * Reply 'hi' message 
 */
export function greeting(ctx) {
    ctx.reply(exampleMsg.greeting);
}

/**
 * Show the short info about user
 * and total users 
 */
export async function stats(ctx) {
    const totalUser = await User.count();
    const myInfo = await User.findOne({ 
        where: { telegramId: ctx.update.message.from.id } 
    });

    const message = view('stats', { 
        totalUser: totalUser, 
        registered: myInfo.createdAt, 
        lang: myInfo.lang 
    });
    ctx.reply(message.stats, { parse_mode: 'Markdown' });
}