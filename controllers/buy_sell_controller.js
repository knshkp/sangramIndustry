const BuySellServices = require('../services/buy_sell_services')

const addBuyEntry=async(req, res)=> {
    try {
        const data = req.body;
        const entry = await BuySellServices.addBuyEntry(data);
        return res.status(200).json({msg : 'Add Entry Sucessfull', result : entry});
    } catch (error) {
        console.error('Error in adding Buy Entry:', error);
        return res.status(500).json({ message: 'Failed to Adding Buy Entry' });
    }
}
const addSellEntry=async(req, res)=> {
    try {
        const data = req.body;
        console.log('>>>>>>>>>>>>',data)
        const entry = await BuySellServices.addSellEntry(data);
        return res.status(200).json({msg : 'Add Entry Sucessfull', result : entry});
    } catch (error) {
        console.error('Error in adding Buy Entry:', error);
        return res.status(500).json({ message: 'Failed to Adding Buy Entry' });
    }
}
const getSellEntry=async(req, res)=> {
    try {
        const date = req.query;
        const entry = await BuySellServices.getSellEntry(date);
        return res.status(200).json({msg : 'getting Buy Entry Sucessfull', result : entry});
    } catch (error) {
        console.error('Error in adding Buy Entry:', error);
        return res.status(500).json({ message: 'Failed to Adding Buy Entry' });
    }
}
const getBuyEntry=async(req, res)=> {
    try {
        const date = req.query;
        const entry = await BuySellServices.getBuyEntry(date);
        return res.status(200).json({msg : 'Getting Buy Entry Sucessfull', result : entry});
    } catch (error) {
        console.error('Error in adding Sell Entry:', error);
        return res.status(500).json({ message: 'Failed to Getting Buy Entry' });
    }
}
const getDailyReport=async(req, res)=> {
    try {
        const data=req.query;
        const entry = await BuySellServices.getDailyReport(data);
        return res.status(200).json({msg : 'Getting Daily Report Sucessfull', result : entry});
    } catch (error) {
        console.error('Error in getting Daily Report Entry:', error);
        return res.status(500).json({ message: 'Failed to Getting Daily Report Entry' });
    }
}

module.exports={
    addBuyEntry,
    addSellEntry,
    getBuyEntry,
    getSellEntry,
    getDailyReport
}