export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { address, memo, userId } = req.body;
    
    if (!address || !memo || !userId) {
        return res.status(400).json({ error: 'Missing required fields: address, memo, userId' });
    }
    
    try {
        const CRYPTO_BOT_TOKEN = process.env.CRYPTO_BOT_TOKEN || '593486:AAgnc7TtIM9ay5Vwam3vPkqvwSPyT5YcV5q';
        
        const response = await fetch(`https://api.ton.cat/v1/transactions?address=${address}&limit=10`);
        const data = await response.json();
        
        if (!data || !data.transactions) {
            return res.status(200).json({ success: true, found: false });
        }
        
        const foundTx = data.transactions.find(tx => {
            const memoMatch = tx.comment && tx.comment.includes(memo);
            const addressMatch = tx.destination === address || tx.source === address;
            const isIncoming = tx.destination === address;
            return memoMatch && addressMatch && isIncoming;
        });
        
        if (foundTx) {
            const amount = parseFloat(foundTx.amount) || 0;
            const txId = foundTx.hash || foundTx.txId || '';
            
            return res.status(200).json({
                success: true,
                found: true,
                amount: amount,
                txId: txId,
                tx: foundTx
            });
        }
        
        return res.status(200).json({ success: true, found: false });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
