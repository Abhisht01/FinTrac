


var cd=[]
var cl=[]
const num=(x)=>{
    return parseFloat(x)
}


$(()=>{

getData('TERM_DEPOSIT',(data)=>{
    insert("fd-md",data.summary.maturityDate)
    insert("tm-pr",data.summary.principalAmount)
    insert("tm-cur",data.summary.currentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("TERM_DEPOSIT")
})
getData('RECCURING_DEPOSIT',(data)=>{
    insert("rec-md",data.summary.maturityDate)
    insert("rec-cur",data.summary.currentValue)
    insert("rec-pr",data.summary.principalAmount)
    cd.push(num(data.summary.currentValue))
    cl.push("TERM_DEPOSIT")
})
getData('CREDIT_CARD',(data)=>{
    Bar("cc-bar",[data.summary.creditLimit,data.summary.totalDueAmount],["Credit Limit","used credit"])
    insert("cc-lp",data.summary.loyaltyPoints)
    cd.push(num(data.summary.availableCredit))
    cl.push("CREDIT_CARD")
})
getData('CD',(data)=>{
    insert("cd-md",data.summary.holdings.holding.maturityDate)
    insert("cd-cur",data.summary.currentValue)
    insert("cd-pr",data.summary.investmentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("CD")
})
getData('IDR',(data)=>{
    insert("idr-cur",data.summary.currentValue)
    insert("idr-inv",data.summary.investmentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("IDR")
})
getData('INSURANCE_POLICIES',(data)=>{
    insert("ip-ed",data.profile.riders.rider[0].policyEndDate)
    insert("ip-pa",data.profile.riders.rider[0].premiumAmount)
    cd.push(num(data.profile.riders.rider[0].sumAssured))
    cl.push("INSURANCE_POLICIES")
    })
getData('ULIP',(data)=>{
    insert("ulip-sd",data.profile.riders.rider.policyStartDate)
    insert("ulip-pa",data.profile.riders.rider.premiumAmount)
    cd.push(num(data.summary.sumAssured))
    cl.push("ULIP")
    })
getData('EPF',(data)=>{
    insert("epf-cb",data.summary.currentBalance)
    insert("epf-tb",data.summary.totalBalance)
    cd.push(num(data.summary.currentBalance))
    cl.push("EPF")
})
getData('PPF',(data)=>{
    insert("ppf-md",data.summary.maturityDate)
    insert("ppf-cb",data.summary.currenBalance)
    cd.push(num(data.summary.currenBalance))
    cl.push("PPF")
})
getData('MUTUAL_FUNDS',(data)=>{
    insert("mf-cur",data.summary.currentValue)
    insert("mf-inv",data.summary.investmentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("MUTUAL_FUNDS")
})
getData('BONDS',(data)=>{
    insert("bond-md",data.summary.holdings.holding.maturityDate)
    insert("bond-cur",data.summary.currentValue)
    insert("bond-inv",data.summary.investmentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("BONDS")
})
getData('REIT',(data)=>{
    insert("reit-cur",data.summary.currentValue)
    insert("reit-inv",data.summary.investmentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("REIT")
})

getData('EQUITIES',(data)=>{
    insert("eq-cur",data.summary.currentValue)
    insert("eq-inv",data.summary.investmentValue)
    cd.push(num(data.summary.currentValue))
    cl.push("EQUITIES")
})
})