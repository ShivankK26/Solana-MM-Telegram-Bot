export default {
    data: {
        walletAddress: '',
    },
    enterWallet: 'Please enter your Solana wallet address:',
    invalidWallet: 'Invalid wallet address. Please enter a valid Solana wallet address.',
    portfolioInfo: (tokens: any[]) => {
        if (tokens.length === 0) {
            return 'No tokens found in your portfolio.';
        }
        return `Your Portfolio:\n\n${tokens.map(token => 
            `${token.symbol}: ${token.amount} ($${token.value})`
        ).join('\n')}`;
    }
}; 