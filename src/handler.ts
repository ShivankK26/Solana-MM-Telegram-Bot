import { Telegraf } from 'telegraf';
import { PublicKey } from '@solana/web3.js';
import portfolioView from './views/portfolio';

export default (bot: Telegraf) => {
    // Store wallet addresses temporarily (in production, use a database)
    const userWallets = new Map<number, string>();

    // Start command
    bot.command('start', async (ctx) => {
        await ctx.reply(
            `Welcome to the Solana Market Maker Bot ${ctx.from?.username || 'friend'}! 🚀\n\nI'm here to help you. Use /help to see what I can do.`
        );
    });

    // Help command
    bot.command('help', async (ctx) => {
        await ctx.reply(
            'Here are the available commands:\n/start - Start the bot\n/help - Show this help message\n/viewToken - Analyze any SPL token\n/addToken - Enter any new SPL token by its CA\n/portfolio - View your solana portfolio'
        );
    });

    // Command to start portfolio tracking
    bot.command('portfolio', async (ctx) => {
        await ctx.reply(portfolioView.enterWallet);
    });

    // Handle wallet address input
    bot.on('text', async (ctx) => {
        const userId = ctx.from?.id;
        if (!userId) return;

        // Check if we're waiting for a wallet address
        if (userWallets.has(userId)) {
            const walletAddress = ctx.message.text;
            
            try {
                // Validate Solana wallet address
                new PublicKey(walletAddress);
                
                // Store the wallet address
                userWallets.set(userId, walletAddress);
                
                // TODO: Fetch portfolio data from Solana
                // For now, just confirm the address was saved
                await ctx.reply(`Wallet address ${walletAddress} has been saved.`);
            } catch (error) {
                await ctx.reply(portfolioView.invalidWallet);
            }
        }
    });

    // Error handling
    bot.catch((err, ctx) => {
        console.error(`Error for ${ctx.updateType}:`, err);
        ctx.reply('An error occurred while processing your request.');
    });
}; 