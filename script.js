const { isButtonElement } = require("react-router-dom/dist/dom");

    // JavaScript for Login with Google
    function loginWithGoogle() {
      // Add your Google login logic here
    }

    // JavaScript for Forgot Password
    document.querySelector(".forgot-password a").addEventListener('click', function (event) {
      event.preventDefault();
      // Add your forgot password logic here
    });
  

    const toggleMenuButton = document.getElementById("toggle-menu");
    const menu = document.querySelector(".menu");
    
    toggleMenuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    
    //JS for MAIN HTML

    function openSM(){
      document.getElementById("mySidemenu").style.width ="250px";
      document.getElementById("pg-content").style.marginLeft = "250px";       
    }
  function closeSM(){
      document.getElementById("mySidemenu").style.width = "0";
      document.getElementById("pg-content").style.marginLeft ="0";
  }

  //JS FOR HEADER MENU
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



  //FORM VALID


  //FOR MULTISTEP AND PAYMENT


