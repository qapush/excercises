function checkCashRegister(price, cash, cid) {

    const AMOUNTS = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRE": 100
    }


    let change = {
        status: '',
        change: []
    };


    let changeDue = cash - price;
    const cashAvailable = cid.reduce((a,b)=>{
        return a + b[1]
      }, 0).toFixed(2);

    // RETURN 'CLOSED
    if (changeDue == cashAvailable){
        change.status = 'CLOSED',
        change.change = [...cid]
        return change;
    }



    const cidAvailable = cid.reverse().filter(unit => unit[1] > 0);
    
    // console.log('Change due before: ', changeDue, '\n\n')
    // console.log('Cid available before: ', cidAvailable, '\n\n')


    cidAvailable.forEach( item => {
      
        if( item[1] <= changeDue){
            do {
                const amount = AMOUNTS[item[0]]
                item[1] = parseFloat((item[1] - amount).toFixed(2));
                changeDue = parseFloat((changeDue - amount).toFixed(2));
                
            } while(item[1] > 0)
        }
        
        

    })

    // console.log('Change due after: ', changeDue, '\n\n')
    // console.log('Cid available after: ',cidAvailable, '\n')
    
    
    return change;


  }
  


// OPEN
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// INSUFFICIENT_FUNDS
checkCashRegister(19.5, 20, [["PENNY", 0.04], ["NICKEL", 0.00], ["DIME", 0.20], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// CLOSED
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

