
$( ()=> {
 const cal = (cur_val,invest_val) =>{
    return (((cur_val-invest_val)/invest_val)*100).toFixed(3)+"%";
 }
    getData('MUTUAL_FUNDS',(data)=>{
        Bar("mf-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
        insert("mut-pro-mar",cal(data.summary.currentValue,data.summary.investmentValue))
        insert("mf-amc",data.summary.investment.holdings.holding[0].amc)
        // insert("mf-ed",data)
        // insert("mf-ty",data)
        // insert("mf-pa",data)
    })
    getData('BONDS',(data)=>{
        Bar("bond-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
        insert("bond-cr",data.summary.holdings.holding.couponRate)
        insert("bond-md",data.summary.holdings.holding.maturityDate)
        insert("bond-pro-mar",cal(data.summary.currentValue,data.summary.investmentValue))
    })
    getData('REIT',(data)=>{
        Bar("reit-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
        insert("reit-pro-mar",cal(data.summary.currentValue,data.summary.investmentValue))
    })
    getData('EQUITIES',(data)=>{
        Bar("eq-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
        insert("eq-pro-mar",cal(data.summary.currentValue,data.summary.investmentValue))
    })

})
