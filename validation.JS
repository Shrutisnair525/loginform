

function validateFunction() {

  var sitename,sitemail, sitepassword;

  document.getElementById("err_name").style.visibility="hidden";
  document.getElementById("err_mail").style.visibility="hidden";
  document.getElementById("err_psw").style.visibility="hidden";

  sitename = document.getElementById("Name").value;
  sitemail = document.getElementById("Email").value;
  sitepassword = document.getElementById("Password").value;

  var atpos = sitemail.indexOf("@");
  var dotpos = sitemail.lastIndexOf(".");

   if (sitename == ""){

    document.getElementById("err_name").style.visibility="visible";
    document.getElementById("err_name").innerHTML="*Please enter a name*";
  }

  else if (sitemail == ""){

    document.getElementById("err_mail").style.visibility="visible";
    document.getElementById("err_mail").innerHTML="*Please enter a valid mail id*";
  }
  //validating email

    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=sitemail.length) {


         document.getElementById("err_mail").style.visibility="visible";
         document.getElementById("err_mail").innerHTML="*Please enter a valid mailid*";
          return false;
  }

  else if (sitepassword == ""){

    document.getElementById("err_psw").style.visibility="visible";
    document.getElementById("err_psw").innerHTML="*Please enter a password*";
  }


else if (sitepassword.length < 6) {


    document.getElementById("err_psw").style.visibility="visible";
    document.getElementById("err_psw").innerHTML="*Password should consists of atleast 6 characters*";

    return false;

  }

//validating users using local storage

if((sitename!="")&&(sitemail!="")&&(sitepassword!="")){
  var i;
  var newuser=1;
  var alreadyexists=0;
  for(i=0;i<localStorage.length;i++)

{

  var keyvalue="Login"+i.toString();

  var details = localStorage.getItem(keyvalue);

  logindetails = JSON.parse(details);

  if(sitemail == logindetails.newlogin[0].mailid) {


    if(sitepassword == logindetails.newlogin[0].password ){

        alreadyexists=1;
        window.location = "registrationform.html"
      }
    else {
        alert("Incorrect password");
            newuser=0;
            return false;
    }
  }
}
}

if( newuser == 1 && alreadyexists == 0){
  var users={"newlogin":[
       {"name": sitename, "mailid":sitemail, "password":sitepassword}
     ]};


  var newusers = JSON.stringify(users);
  console.log(newusers);


  var count = localStorage.length;
  localStorage.setItem("Login"+count, newusers);

       window.location = "registrationform.html"
}
}
