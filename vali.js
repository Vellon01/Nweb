function val(){
    var cname=feedbackform.Name.value;
    var phoneno=feedbackform.phno.value;
    var email=feedbackform.Email.value;
    var fb=feedbackform.feedback.value;
    //name
    var regname="^[A-Z][a-zA-Z]*\s([A-Z][a-zA-Z]*\s)*[A-Z][a-zA-Z]*$";
    if(cname==""){
        document.getElementById('nameError').innerHTML="Enter a name";
        return false;
    }
    else if(!cname.match(regname)){
        document.getElementById('nameError').innerHTML="Invalid name";
        return false;
    }
    alert(cname);
}
