// @ts-nocheck
const textValorTicket = document.getElementById("valorTicket")
const cant = document.getElementById("cant").addEventListener("change",handleChange)
const cat = document.getElementById("cat").addEventListener("change",handleChange)
const VALOR_TICKET = 200

const reset = document.getElementById("reset").addEventListener("click", ()=>{    
    textValorTicket.innerText = `Total a Pagar: $ 0.00`
})

function handleChange (){
    const cantValue = document.getElementById("cant").value
    const catValue = document.getElementById("cat").value
    const valortTotal= cantValue * catValue * VALOR_TICKET
    textValorTicket.innerText = `Total a Pagar: $ ${valortTotal.toFixed(2)}`
}

