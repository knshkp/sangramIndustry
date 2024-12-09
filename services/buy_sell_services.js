const BuySchema = require('../models/buy_model');
const SellSchema=require('../models/sell_model');
const moment=require('moment')
const addBuyEntry=async(data)=> {
  //0 for morning 1 for evening
    const newDetails = new BuySchema({
        phone:data.phone,
        customer_id : data.customer_id,
        customer_name : data.customer_name,
        quantity : data.quantity,
        milk_type : data.type,
        price : data.price,
        shift:data.shift,
        fat_amount:data.fat_amount,
        date:data.date
    }); await newDetails.save();
    return newDetails
}
const addSellEntry=async(data)=> {
    const newDetails = new SellSchema({
        phone:data.phone,
        customer_id : data.customer_id,
        customer_name : data.customer_name,
        quantity : data.quantity,
        milk_type : data.type,
        price : data.price,
        shift:data.shift,
        fat_amount:data.fat_amount
    });
    await newDetails.save();
    return newDetails
}

  const getSellEntry = async(data) => {
    const sellEntry = await SellSchema.find({phone:data.phone});
    if (!sellEntry || sellEntry.length === 0) {
      return "not found";
    }
    return sellEntry
};
const getBuyEntry = async(data) => {
      const buyEntry = await BuySchema.find({phone:data.phone});
      if (!buyEntry || buyEntry.length === 0) {
        return "not found";
      }
      return buyEntry
  };
const getDailyReport=async(data)=>{
    const phone=data.phone;
    const fromDate=data.from_date;
    const toDate=data.to_date;
    const shift=data.shift;
    const type=data.type;
    const customer_id=data.customer_id
    let dailyEntry=''
    let buyEntry=''
    let sellEntry=''
    const nextDay = new Date(toDate);
    nextDay.setDate(nextDay.getDate() + 1);
    if(type==2){
      if(shift==2){
        if(customer_id!==''){
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,customer_id:customer_id});
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,customer_id:customer_id});
        }
        else{
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone});
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone});
        }
      }
      else if(shift==1){
        if(customer_id!==''){
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:1,customer_id:customer_id});
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:1,customer_id:customer_id});
        }
        else{
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:1});
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:1});
        }
      }
      else{
        if(customer_id!==''){
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0,customer_id:customer_id});
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0,customer_id:customer_id});
        }
        else{
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0});
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0});
        }
      }
      dailyEntry=[buyEntry,sellEntry] 
    }
    else if(type==0){
      if(shift==2){
        if(customer_id!==''){
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,customer_id:customer_id});
        }
        else{
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone});
        }
      }
      else if(shift==1){
        if(customer_id!==''){
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay},phone:phone,shift:1,customer_id:customer_id});
        }
        else{
        buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay},phone:phone,shift:1});
        }
      }
      else{
        if(customer_id!==''){
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0,customer_id:customer_id});
        }
        else{
          buyEntry=await BuySchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0});
        }
      }
      dailyEntry=[buyEntry]
    }
    else{
      if(shift==2){
        if(customer_id!==''){
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay},phone:phone,customer_id:customer_id});
        }
        else{
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay},phone:phone});
        }
      }
      else if(shift==1){
        if(customer_id!==''){
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:1});
        }
        else{
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:1});
        }
      }
      else{
        if(customer_id!==''){
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0,customer_id:customer_id});
        }
        else{
          sellEntry=await SellSchema.find({created_at: {$gte: fromDate,$lte: nextDay },phone:phone,shift:0});
        }
      }
      dailyEntry=[sellEntry]
    }
  
    if(!dailyEntry||dailyEntry.length===0){
      return "not Found";
    }
    return dailyEntry
  }
module.exports={

    addBuyEntry,
    addSellEntry,
    getSellEntry,
    getBuyEntry,
    getDailyReport
}