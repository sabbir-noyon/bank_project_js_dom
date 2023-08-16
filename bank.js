

// FOR DEPOSIT

document.getElementById('btn-deposit').addEventListener('click', function(){

    const inputForDeposit = document.getElementById('input-for-deposit');
        
    // input er value
    const inputForDepositValue = inputForDeposit.value;
        
    // (get korlam) deposit h3 tag er 00 er ghor 
    const depositAmountBefore = document.getElementById('deposit-amount-before');


    // converting as parseFloat
    const depositAmountBeforeConverted = parseFloat(depositAmountBefore.innerText);

    const inputForDepositValueConverted = parseFloat(inputForDepositValue);
    
    //(set korbo)
    
  
    const newTotalValueOfDeposit = depositAmountBeforeConverted + inputForDepositValueConverted;
    depositAmountBefore.innerText = newTotalValueOfDeposit;
    
    // kaj hobar por input field clear korte
    inputForDeposit.value ='';
  

})

