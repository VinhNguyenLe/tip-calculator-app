
const inputs = document.querySelectorAll('#people, #bill, #custom')
const selects = document.querySelectorAll('.select-btn')
const customSelect = document.querySelector('.custom')
const errorMsg = document.querySelector('.error-msg')
const tipAmout = document.querySelector('.tip-amout')
const total = document.querySelector('.total')
const resetBtn = document.querySelector('.reset-btn')

let billValue = 0
let selectValue = 0
let totalPeopleValue = 0
let tipAmoutValue = 0
let totalValue = 0

inputs.forEach(item => {
    item.addEventListener("keyup", function() {
        if(this.value < 0){
            this.value = this.value * -1
        }
    })
})

inputs[0].addEventListener('input', function(e){
    billValue = parseFloat(this.value)
    calc()
})

selects.forEach(item => {
    item.addEventListener('click', function(){
        if(!inputs[2].value){
            errorMsg.classList.remove('hide')
        } else {
            selectValue = parseFloat(this.dataset.tip)
            calc()
        }
    })
})

customSelect.addEventListener('input', function(e){
    if(!inputs[2].value){
        errorMsg.classList.remove('hide')
    } else {
        selectValue = parseFloat(this.value)
        calc()
    }
})

inputs[2].addEventListener('keydown', function(e){
    if(e.keyCode == 110){
        e.preventDefault()
    }
})

inputs[2].addEventListener('input', function(e){
    totalPeopleValue = parseFloat(this.value)
    calc()

})

inputs[2].addEventListener('focus', function(e){
    errorMsg.classList.add('hide')
})

resetBtn.addEventListener('click', function(e){
    if(!isNaN(tipAmoutValue) && !isNaN(totalValue)){
        tipAmout.innerText = `$0.00`
        total.innerText = `$0.00`
        resetBtn.classList.add('btn-unactive')
        billValue = 0
        selectValue = 0
        totalPeopleValue = 0
        tipAmoutValue = 0
        totalValue = 0
        inputs.forEach(item => {
            item.value = ''
        })       
    }
})

function calc(){
    tipAmoutValue = (selectValue/100) * billValue/totalPeopleValue
    totalValue = tipAmoutValue + billValue/totalPeopleValue
    if(!isNaN(tipAmoutValue) && !isNaN(totalValue)){
        tipAmout.innerText = `$${tipAmoutValue.toFixed(2)}`
        total.innerText =  `$${totalValue.toFixed(2)}`
        resetBtn.classList.remove('btn-unactive')
    } else {
        tipAmout.innerText = `$0.00`
        total.innerText = `$0.00`
        resetBtn.classList.add('btn-unactive')
    }
}



