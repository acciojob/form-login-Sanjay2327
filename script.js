const firstForm = document.forms[0]
function getFormvalue() {
    //Write your code here
	let fname = firstForm.elements['fname'].value ;
	let lname = firstForm.elements['lname'].value ;
	alert(fname +" " +lname);
}
