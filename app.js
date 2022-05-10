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
        "ONE HUNDRED": 100
    }

    const parsedCid = cid.map( item => {
        
        const name = item[0]
        const number = item[1]

        return [name, number]
    })





    let change = {
        status: '',
        change: []
    };


    let changeDue = Number((cash - price).toFixed(2));
    const cashAvailable = cid.reduce((a,b)=>{
        return a + b[1]
      }, 0).toFixed(2);

    // RETURN 'CLOSED
    if (changeDue == cashAvailable){
        change.status = 'CLOSED';
        change.change = [...cid];
        return change;
    }



    const cidAvailable = cid.reverse().filter(unit => unit[1] > 0);
    
    // console.log('Change due before: ', changeDue, '\n\n')
    // console.log('Cid available before: ', cidAvailable, '\n\n')


    let changeArray = []
    cidAvailable.forEach( item => {
        
        

        if( item[1] > 0 && AMOUNTS[item[0]] <= changeDue){
            let changeItem = [item[0], 0]

            do {
                // changeItem[1] = parseFloat(changeItem[1] + AMOUNTS[item[0]]).toFixed(2)
                changeItem[1] += AMOUNTS[item[0]]
                changeDue = parseFloat(changeDue - AMOUNTS[item[0]]).toFixed(2)
                item[1] = parseFloat(item[1] - AMOUNTS[item[0]]).toFixed(2)
            } while ( item[1] > 0 && changeDue > 0)

            changeArray.push(changeItem)
        }
    
    })

    console.log('Change array:', changeArray)
    // console.log('Change due:', changeDue)

    // RETURN 'OPEN'
    if (changeDue == 0){
        change.status = 'OPEN';
        change.change = [...changeArray]
    } else {
        change.status = 'INSUFFICIENT_FUNDS';
    }

    // console.log('Change due after: ', changeDue, '\n\n')
    // console.log('Cid available after: ',cidAvailable, '\n')
    
    

    console.log(change)
    return change;


  }
  


// // OPEN
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// INSUFFICIENT_FUNDS
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])


// INSUFFICIENT_FUNDS
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])


// OPEN

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}