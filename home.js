document.getElementById('btn-add-money').addEventListener("click", function(event){
   event.preventDefault()
   
   const inputAmount = document.getElementById('amount-input').value
   const InputAmount = parseFloat(inputAmount)
   const totalAmount = document.getElementById('total-amount').innerText
   const TotalAmount = parseFloat(totalAmount)

   const amountPass = document.getElementById('amount-password').value
  
   if(amountPass === "1234"){
    let  AddMoney = InputAmount + TotalAmount;
    document.getElementById('total-amount').innerText = AddMoney
   }else{
    alert('Please provide correct value & Try later')
   }
})

document.getElementById('cashout-button').addEventListener('click', function(e){
    e.preventDefault()

    const cashInputAmount = document.getElementById('cash-input-amount').value
    const CashInputAmount = parseFloat(cashInputAmount)
    const totalAmount = document.getElementById('total-amount').innerText
    const TotalAmount = parseFloat(totalAmount)

    const InputPassCash = document.getElementById('input-pass-cash').value
   
    if( InputPassCash === "1234"){
        const cashOut = TotalAmount - cashInputAmount
        document.getElementById('total-amount').innerText = cashOut
    }else{
        alert('Please provide correct value & Try later')
    }
})

