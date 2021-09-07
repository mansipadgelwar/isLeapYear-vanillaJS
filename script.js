var txtName = document.querySelector("#user-name");
var txtInput = document.querySelector("#txt-input");
var btnSubmit = document.querySelector("#btn-validate");
var output = document.querySelector("#txt-output");
btnSubmit.addEventListener("click",clickHandler);

function clickHandler(){
  var userName = txtName.value;
  var input = txtInput.value;
  var userBirthDate = input.split("-");  
  var YYYY = Number(userBirthDate[0]);
  var MM = Number(userBirthDate[1]);
  var DD = Number(userBirthDate[2]);

  if(userName === "" && input === ""){
    output.innerText = "Please enter all the details.";
  }
  else if(userName === ""){
    output.innerText = "Please enter your name.";
  }  
  else if(input === "")
  {
    output.innerText = "Please enter the date.";
  }
  else
  {
    if(isLeapYear(YYYY)){
      output.innerText = "🎊🎉Hurray!! You were born on a leap year. ";
    }
    else
    {
      output.innerText = "😥Ohh no!! You were not born on a leap year."
    }
  }  
  
}


function isLeapYear(year) {
 year = Number(year);
 return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}