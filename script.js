
let addBtn = document.getElementById("final-btn");
let balance = 0.00;
let income = 0.00;
let expense =0.00;

//add transaction event
function btnClick()
{
    let textArea = document.getElementById("text").value;
    let amountArea = document.getElementById("amount").value;
    console.log(textArea);
    console.log(amountArea);
    localStorage.setItem(textArea, amountArea);
    
    if(Number(localStorage.getItem(textArea))>0){
        document.getElementById("list").innerHTML+=`<li class="plus">${textArea}  +${amountArea}</li>`;
        income += Number(localStorage.getItem(textArea));
        document.getElementById("money-plus").textContent = `$${income}.00`;
    }
    else if(Number(localStorage.getItem(textArea))<0){
        document.getElementById("list").innerHTML+=`<li class="minus">${textArea}  ${amountArea}</li>`;
        expense += (Number(localStorage.getItem(textArea)))*(-1);
        document.getElementById("money-minus").textContent = `$${expense}.00`;
    }
    balance += Number(localStorage.getItem(textArea));
    document.getElementById("balance").textContent = `$${balance}.00`;
    console.log(localStorage.getItem(textArea));
    event.preventDefault();
}

