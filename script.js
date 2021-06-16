let lastOperand = 0;
let operation = null;
let count = 0;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = "0";

document.getElementById('btn_0').addEventListener('click', function () {
if(inputWindow.value == "0")
	inputWindow.value = "0";
	else
    inputWindow.value += '0';
})
document.getElementById('btn_point').addEventListener('click', function () {
	if(count >= 1)
		inputWindow.value;
	else
	{
		inputWindow.value = inputWindow.value + ".";
		count++;
	}
	
})

document.getElementById('btn_1').addEventListener('click', function () {
	
	if(inputWindow.value == "0")
	inputWindow.value = "1";
	else
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {

    if(inputWindow.value == "0")
	inputWindow.value = "2";
	else
    inputWindow.value += '2';
})
document.getElementById('btn_3').addEventListener('click', function () {

    if(inputWindow.value == "0")
	inputWindow.value = "3";
	else
    inputWindow.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
	
	if(inputWindow.value == "0")
	inputWindow.value = "4";
	else
    inputWindow.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {

   if(inputWindow.value == "0")
	inputWindow.value = "5";
	else
    inputWindow.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {

   if(inputWindow.value == "0")
	inputWindow.value = "6";
	else
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {

    if(inputWindow.value == "0")
	inputWindow.value = "7";
	else
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {

    if(inputWindow.value == "0")
	inputWindow.value = "8";
	else
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {

    if(inputWindow.value == "0")
	inputWindow.value = "9";
	else
    inputWindow.value += '9';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_X').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '';
})

document.getElementById('btn_Y').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})
document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = Math.sqrt(parseInt(inputWindow.value));
    operation = 'sqrt';
    inputWindow.value = lastOperand;
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if(operation === 'sum')
	{
		const result = lastOperand + parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if(operation === 'def')
	{
		const result = lastOperand - parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if(operation === 'div')
	{
		const result = lastOperand / parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if(operation === 'multiply')
	{
		const result = lastOperand * parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
	count=0;
    inputWindow.value = "0";
})