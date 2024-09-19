document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('money-add-form').classList.add('hidden')
})

document.getElementById('add-amount-button').addEventListener('click', function(){
    document.getElementById("money-add-form").classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})