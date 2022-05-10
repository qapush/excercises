function checkCashRegister(price, cash, cid) {

    const AMOUNTS = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
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


    let changeDue = (cash - price).toFixed(2);
    const cashAvailable = cid.reduce((a,b)=>{
        return a + b[1]
      }, 0).toFixed(2);


    if (changeDue == cashAvailable){
        change.status = 'CLOSED',
        change.change = [...cid]
        return change;
    }

    console.log('Change due: ', changeDue)

    const cidAvailable = cid.reverse().filter(unit => unit[1] > 0);

    cidAvailable.forEach(item => {
            let top = 0;
            if(item[1] <= changeDue) {
                do {
                    top = AMOUNTS[item[0]].toFixed(2);
                    item[1] -= AMOUNTS[item[0]].toFixed(2);
                } while (item[1] % AMOUNTS[item[0]] != 0 && item[1] >= 0)
                change.change.push([item[0]], top);
            }
        }
    )

    console.log('Change due: ', changeDue)
  
    // console.log(cidAvailable)
  

  
    // if (changeDue > cashAvailable || cashAvailable % changeDue != 0) {
    //   change.status = 'INSUFFICIENT_FUNDS';
    // } else if (changeDue == cashAvailable){
    //   change.status = 'CLOSED',
    //   change.change = [...cid]
    //   return change;
    // } else {
    //   console.log('here');
    //   change.status = 'OPEN'
    //   getChange();
    //   console.log(change);
    // }
  
  
    console.log(change)
    
    return change;


  }
  


// OPEN
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// INSUFFICIENT_FUNDS
checkCashRegister(19.5, 20, [["PENNY", 0.44], ["NICKEL", 0.05], ["DIME", 0.20], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// CLOSED
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

