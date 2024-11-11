//POST-IT NOTE SAVE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
 }
  
function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
}

//POST-IT NOTE SHOW AND HIDE
var show = false;
function showNote(){
   if (show == false){
       document.getElementById("note").style.opacity = 1;
       show = true;
   }
   else if (show == true){
       document.getElementById("note").style.opacity = 0;
       show = false;
   }
}

//CRYPTO SHOW AND HIDE
var cryptoShow = false;
function showCrypto(){
   if (cryptoShow == false){
       document.getElementById("crypto").style.opacity = 1;
       cryptoShow = true;
   }
   else if (cryptoShow == true){
       document.getElementById("crypto").style.opacity = 0;
       cryptoShow = false;
   }
}
//CALCULATOR (JAVASCRIPT)
var showCalc = false;
function showCalculator(){
   if (showCalc == false){
       document.getElementById("calc").style.opacity = 1;
       showCalc = true;
   }
   else if (showCalc == true){
       document.getElementById("calc").style.opacity = 0;
       showCalc = false;
   }
}

