// WITHDRAW AND WITHDRAW WITH TOTAL BALANCE SEGMENT START



    // set event handler for click button of withdraw
    document.getElementById('btn-withdraw').addEventListener('click',function (){

        
        
        // STEP 1-------WORKING ON USER INPUT FIELD------

        // getting input id
        const userInputWithdraw = document.getElementById("user-input-withdraw");
    
        // getting input's value
        const userInputWithdrawValueString = userInputWithdraw.value;
    
        // converting to float number for (getting input's value)
        const  userInputWithdrawValue = parseFloat(userInputWithdrawValueString);


        // clearing input field after show

        userInputWithdraw.value = '';



        // validation for user input is number or not

        if(isNaN(userInputWithdrawValue)){
            alert ("NOT A NUMBER");
            return;
        }

       
    
       
        //-----------------------------------------------------------------------
        
        // STEP 2 ------WORKING ON WITHDRAW FIELD------


        // getting withdraw's initial h1 tag
    
        const initialH1TagOfWithdraw = document.getElementById('initial-h1-tag-of-withdraw');
    
        // getting string innertext of this
        
        const innerTextOfWithdrawString = initialH1TagOfWithdraw.innerText;
    
        // converting to float
    
        const innerTextOfWithdraw = parseFloat(innerTextOfWithdrawString);
    
     
  
    
    // // STEP 3 --------- MAKING INTERACTIVITY (SUM) with USER INPUT AND WITHDRAW FIELD


    // const newFigureOfWithdrawField = innerTextOfWithdraw + userInputWithdrawValue;
     
    // // changing face of withdraw box
    // initialH1TagOfWithdraw.innerText =  newFigureOfWithdrawField;


      
   


    // STEP 4 --------- WORKING ON BALANCE FIELD FOR SUM AND SUB THE BALANCE


    // getting balance id

    const beforeTotalBalance2ndTime = document.getElementById('before-total-balance');

    const beforeTotalBalance2ndTimeString = beforeTotalBalance2ndTime.innerText;

    const newTotalBalanceField = parseFloat(beforeTotalBalance2ndTimeString );


    // validation of user input and total balance

    if (userInputWithdrawValue>newTotalBalanceField){
        alert("INSUFFICIENT FUND");
        return;
    }



    // STEP 3 --------- MAKING INTERACTIVITY (SUM) with USER INPUT AND WITHDRAW FIELD


    const newFigureOfWithdrawField = innerTextOfWithdraw + userInputWithdrawValue;
     
    // changing face of withdraw box
    initialH1TagOfWithdraw.innerText =  newFigureOfWithdrawField;







    // doing sum and sub with previous balance and withdraw balance

    const afterCalculationBalance = newTotalBalanceField-userInputWithdrawValue;

    // changing face of balance box

    beforeTotalBalance2ndTime.innerText = afterCalculationBalance;


  
    
    
    
})
    
    
    

    