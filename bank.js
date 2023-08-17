

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


    // kaj hobar por input field clear korte +++ validation er age korlam tobe er cheye age bosano jabe na tahole agei clear hoye jabe
    inputForDeposit.value ='';


    // validation user input number or not 

    if(inputForDepositValueConverted < 0 || inputForDepositValueConverted === 0 ){
        alert ("PLEASE ENTER CORRECT AMOUNT");
        return;
    }

    if(isNaN(inputForDepositValueConverted)){
        alert("NOT A NUMBER");
        return;
    }

    
  
    const newTotalValueOfDeposit = depositAmountBeforeConverted + inputForDepositValueConverted; // balachi 2
    depositAmountBefore.innerText = newTotalValueOfDeposit; //BABACHI
    
    
    
    

   // BALANCE STEP


 const beforeTotalBalance = document.getElementById('before-total-balance');      

 const beforeTotalBalanceValue=  beforeTotalBalance.innerText;

 const beforeTotalBalanceValueConverted = parseFloat(beforeTotalBalanceValue);


 //(Set Korlam)

 const newBalanceTotal = beforeTotalBalanceValueConverted + inputForDepositValueConverted;

 beforeTotalBalance.innerText = newBalanceTotal;


// TOTAL BALANCE WITH DEPOSIT SEGMENT DONE 

})





// // WITHDRAW AND WITHDRAW WITH TOTAL BALANCE SEGMENT START



//     // set event handler for click button of withdraw
// document.getElementById('btn-withdraw').addEventListener('click',function (){

//     // getting input id
//     const userInputWithdraw = document.getElementById("user-input-withdraw");

//     // getting input's value
//     const userInputWithdrawValueString = userInputWithdraw.value;

//     // converting to float number for (getting input's value)
//     const  userInputWithdrawValue = parseFloat(userInputWithdrawValueString);

   
//     //-----------------------------------------------------------------------

//     // getting withdraw's initial h1 tag

//     const initialH1TagOfWithdraw = document.getElementById('initial-h1-tag-of-withdraw');

//     // getting string innertext of this
    
//     const innerTextOfWithdrawString = initialH1TagOfWithdraw.innerText;

//     // converting to float

//     const innerTextOfWithdraw = parseFloat(innerTextOfWithdrawString);

 
//     //const newFaceOfWithdrawBox = innerTextOfWithdraw.innerText= userInputWithdrawValue;






// })


