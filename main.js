document.getElementById('btn-button').addEventListener('click', function(event){
    event.preventDefault()

    const inputItems = document.getElementById('input-items').value
    const inputPass = document.getElementById('input-pass').value
    console.log(inputItems, inputPass)

    if( inputItems === '5' && inputPass === '1234'){
        console.log('You are Logged in')
        window.location.href = 'home.html'
    }else{
        alert('Please enter right phone Number or PIN')
    }
})