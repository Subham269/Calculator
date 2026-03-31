let firstNumber =null;
let secondNumber =null;
let operator = null;
let shouldResetdisplay =false;
let history = [];
function clearDisplay()
{
    firstNumber =null;
    operator = null;
    shouldResetdisplay =false;
    document.getElementById("display").textContent="0";
}
function pressNumber(num)
{
    let currentDisplay=document.getElementById("display").textContent;
    if(currentDisplay === "0" || shouldResetdisplay)
    {
        document.getElementById("display").textContent=num;
        shouldResetdisplay = false;
    }
    else 
    {
        document.getElementById("display").textContent= currentDisplay + num;
    }
}
function pressOperator(op)
{
    firstNumber = Number(document.getElementById("display").textContent);
    operator = op;
    shouldResetdisplay = true;
}
function calculate()
{
    secondNumber = Number(document.getElementById("display").textContent);
    if(firstNumber == null || operator == null)
        return ;
    switch(operator)
    {
        case '+': document.getElementById("display").textContent= firstNumber+secondNumber;
        break;
        case '-': document.getElementById("display").textContent= firstNumber-secondNumber;
        break;
        case '*': document.getElementById("display").textContent= firstNumber*secondNumber;
        break;
        case '/': document.getElementById("display").textContent= firstNumber/secondNumber;
        break;
    }
    let entry = `${firstNumber} ${operator} ${secondNumber} = ${document.getElementById("display").textContent}`
    history.push(entry);
    updateHistoryUI();
    shouldResetdisplay = true;
}
function updateHistoryUI()
{
    let history_list=document.getElementById("history-list");
    history_list.innerHTML="";
    for(let i=history.length-1;i>=0;i--)
    {
        let li=document.createElement("li");
        li.textContent=history[i];
        history_list.appendChild(li);
    }
}

