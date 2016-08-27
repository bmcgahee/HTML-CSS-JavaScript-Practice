var isOperating = false;
var isCleared = false;

var display;
var operator;
var operand;

$(document).ready(init); 

function init() {
  display = $(".display");
  $(".numbers").on("click", numberClicked);
  $(".operations").on("click", operatorClicked);
  $("#equals").on("click", equalsClicked);
  $("#erase").on("click", clearClicked);
}

function numberClicked() {
  var numberOne = display.val();
  var numberTwo = $(this).text();

  if (numberOne == 0 || isCleared) {
    isCleared = false;
    display.val(numberTwo);
  } else {
    result = numberOne + numberTwo;
    display.val(result);
  }
}


function operatorClicked() {
   operand = parseInt(display.val());
   isOperating = true;
   isCleared = true;
   $(".display").text(operator);
      
   if(isOperating) {
      display.val(calculate());
   }
   
   switch($(this).attr("id")) {
      case "add":  operator = "+"; break;
      case "subtract": operator = "-"; break;
      case "multiply": operator = "x"; break;
      case "divide": operator = "/"; break;
   }
}

function equalsClicked() {
   display.val(calculate());
   reset();
}

function clearClicked() {
  reset();
  display.val(0);
}

function reset() {
  isCleared = true;
  isOperating = false;
  operator = null;
  operand = null;
  $(".display").text("");
}

function calculate() {
   var anotherOperand = parseInt(display.val());
   var result;
       
   switch(operator) {
      case "+": result = operand + anotherOperand; break;
      case "-": result = operand - anotherOperand; break;
      case "x": result = operand * anotherOperand; break;
      case "/": if(anotherOperand == 0) { result = "Error"; } else { result = operand / anotherOperand; } break;
      default: result = anotherOperand;
    } 
    return result;
}