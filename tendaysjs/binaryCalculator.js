let expression = '';
let operand1 = 0, operand2 = 0;
let result = 0;

function action(e) {
    var btn = e.target || e.srcElement
    res.value += btn.value;    
    expression += btn.value 
    
    if (expression == '') {
        res.value = '';
    }
    if (btn.id == 'btnClr') {
        expression = '';
        res.value = '';
    }

    if (btn.id == 'btnEql') {        
        if (expression) {
            let decExpression = convertExpressionToDecimal(expression)
            result = Math.floor(eval(decExpression));
            let resultBinary = result.toString(2);
            expression = '';
            res.value = resultBinary;
        }
    }
}

function convertExpressionToDecimal(expression) {
    let operatorIndex = expression.match('[+-/*]').index;
    operand1 = parseInt(expression.slice(0,operatorIndex), 2);
    operand2 = parseInt(expression.slice(operatorIndex+1), 2);
    return operand1 + expression[operatorIndex] + operand2
}

let res = document.getElementById('res');
document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btnClr').onclick = action;
document.getElementById('btnEql').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;