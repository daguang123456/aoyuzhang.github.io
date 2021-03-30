// let greeting='hello world';
// alert('hello world');

// let age=32;
// let pi= 3.142;
// let alphabet ='a'
// alert(2+3);

// let number1 =2;
// let number2 =3;
// let sum = number1 +number2;
// alert(sum);

function add(number1, number2){
	let sum= number1 +number2;
	return sum;
}

function alertMessage(message){
	alert(message);
}

if (age <18){
	alert("You're not an adult");

} else{
	alert("You're an adult");
}

// let fullName = {
// 	firstName: 'John',
// 	lastName: 'Doe'
// }

// alert(fullName.firstName)
//personDetails.alertMessage('Hello World');

let personDetails={
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	},
	alertMessage: function(message){
		alert(message);
	}
}

personDetails.alertMessage('Hello World');

let submitButton = document.querySelector('#submit-button');
console.log(submitButton);

function clickListener(event){
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText= messageInput.value;

	if(emailValidate(emailText) !== true){
		console.log('The email address must contain @');
		return false;
	}
    console.log('Thanks for your message');

	// console.log('email:', emailText, 'message:', messageText);
	// console.log(emailValidate(emailText));
	// console.log('Button clicked');
}
submitButton.addEventListener('click', clickListener);

function emailValidate(email){
	if(email.includes('@')){
		return true;
	}
	else{
		return false;
	}
}


var oForm=document.forms["submit_bookmark"];
var oTagList = oForm.elements["tags_list"];
var tags = oTagsList.value;

var tags=oTagsList.value;

function showFormElements(oForm) {
  var cnt = 0;
  var msg = "Form with 'name' attribute='" + oForm.name + "'";
  var str = "\nThe elements are: \n\n";
  for (i = 0; i < oForm.length; i++) {
  cnt ++;
  str += oForm.elements[i].tagName + " with 'name' attribute='" + oForm.elements[i].name + "'\n";
  }

  msg += " has " + cnt + " elements. \n" + str;
  alert(msg);
}

function showFormData(oForm) {
  var msg = "The data that you entered for the form with 'name' attribute='" + oForm.name + "': \n";
 
  for (i = 0; i < oForm.length, oForm.elements[i].getAttribute("type") !== 'button'; i++) {
    msg += oForm.elements[i].tagName + " with 'name' attribute='" + oForm.elements[i].name + "' and data: ";
    if(oForm.elements[i].value == null || oForm.elements[i].value == '') {
    msg += "NOT SET \n";
    } else {
      msg += oForm.elements[i].value + "\n";
    }
  }

  alert(msg);
}

function showElementsForTargetForm(targetForm, element_type) {
  var cnt = 0;
  var msg = "Form with 'name' attribute='" + targetForm.name + "'";
  var str = '\n';
  for (i = 0; i < targetForm.length; i++) {
  if(targetForm.elements[i].tagName == element_type) {  
    cnt ++;
    str += "\nThe " + element_type + " element with 'name' attribute='" + targetForm.elements[i].name + "'\n";
  }
  }

  msg += " has " + cnt + " " + element_type + " element(s)." + str;
  alert(msg);

}


function showElementsForTargetFormName(oForm) {
  var targetFormName = oForm.elements["form_name"].value;
  var element_type = oForm.elements["element_type"].value;
  var targetForm = document.forms[targetFormName];

  showElementsForTargetForm(targetForm, element_type);
}


function showElementsForTargetFormNumber(oForm) {
  var targetFormNumber = oForm.elements["form_number"].value;
  var element_type = oForm.elements["element_type"].value;
  var targetForm = document.forms[targetFormNumber];

  showElementsForTargetForm(targetForm, element_type);

function showElements(oForm) {
  str = "Form Elements of form " + oForm.name + ": \n"
  for (i = 0; i < oForm.length; i++)
      str += oForm.elements[i].name + "\n"
  alert(str)
}










