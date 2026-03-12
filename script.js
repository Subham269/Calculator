let firstNumber =null;
let secondNumber =null;
let operator = null;
let shouldResetdisplay =false;
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
    operator = null;
    shouldResetdisplay = true;
}

