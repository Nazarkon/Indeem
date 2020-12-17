function getData(){
    const formData = document.getElementById('form')
    const sum = formData[0].valueAsNumber
    const price = formData[1].valueAsNumber
    inputValidator(sum,price)
}

function returnTheRest(sum,price){
    return (sum - price).toFixed(2)
}

function inputValidator(sum,price){
    if(Math.fround(price) > Math.fround(sum)){
        renderMessage('Price is greater. You need to spend more money')
    }else{
        const restSum = returnTheRest(sum,price)
        const convertToArray =  restSum.split('.') 
        renderMessage(`Your rest is ${convertToArray[0]} dollars, ${convertToArray[1]} cents`)
    }
}

function renderMessage(text){
    const modal = document.getElementById('message')
    modal.innerHTML = `${text}`
}