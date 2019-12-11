function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["message"].value;
    var errors = Array();
    var e1,e2,e3 = "";
   
    if (x == "") {
        e1 = "First name must be filled out";
        $("#alert").html(e1);
        errors.push(e1);
    // $("#alert").html(e1);
    return false;
    }
     if(y == ""){
     e2 = "last name must be filled out";
     $("#alert").html(e2);
      errors.push(e2);
      return false;
    }
    if(z == ""){
     e3 = "Message must be filled!" 
     $("#alert").html();
     errors.push(e3);
     return false;
    }
    if(errors == ""){
        $("#alert-success").html("Thank you for contacting us!");
        return (true);
    } 
    
}
/*
function validateForm() {
    // Storing Field Values In Variables
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var message = document.getElementById("message").value;
    // Regular Expression For Email
    //var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions

    if (fname != '' && lname != '' && message != '') {
   // if (email.match(emailReg)) {
   // if (document.getElementById("male").checked || document.getElementById("female").checked) {
    if (message.length == 10) {
    console.log("All type of validation has done on OnSubmit event.");
    return true;
    } else  {
    console.log("The message No. must be at least 10 digit long!");
    return false;
    }
    } else  {
   console.log("lname must be filled..!!!");
    return false;
    }
    } 
*/