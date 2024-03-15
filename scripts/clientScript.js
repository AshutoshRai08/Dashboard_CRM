
var modal = document.getElementById("myModal");
var showCustom=document.getElementById("allCustom")
var size=JSON.parse(localStorage.getItem("accounts"))
var innerNum=document.querySelector(".customerVal");
//open modAL
var btn = document.getElementById("myBtn");

//CLOSE MODAL
var span = document.getElementsByClassName("close")[0];

showCustom.onclick=function(){
  // let size=JSON.parse(localStorage.getItem("accounts"))
  if(innerNum.innerHTML===size.length.toString()){
    // debugger
    innerNum.innerHTML="****"
    
// console.log("changed to *");
}
else{
  // debugger
  innerNum.innerHTML=size.length.toString();
// console.log("changed to num");
}
}
//OPEN MODAL
btn.onclick = function() {
  // debugger
  modal.style.display = "block";
}
// CLOS MODAL WITH (x)
span.onclick = function() {
  modal.style.display = "none";
}

// cLOSE MODAL WITH WINDOW CLICK OR WHITESPACE
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showData(){
  let totalTansaction=0;
 let transacVal=document.getElementById('transacVal');
    size.forEach(movs => {
      // console.log(movs.movements);
      if(movs.movements!=undefined)
      totalTansaction += movs.movements.length

    });
    
    transacVal.innerHTML=transacVal.innerHTML=='****'?totalTansaction:'****';
    // console.log(totalTansaction);
}

function submitting(){
    const accounts=loadFromStoragex()!=null?loadFromStoragex():[];
    let name=document.getElementById('name');
    let pin= document.getElementById('pin');
    const region=document.getElementById('region');
    const birthday=document.getElementById('birth');
    const country=document.getElementById('country');
        // debugger
    let account={
        owner: name.value,
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
     
        pin:pin.value,
        region:region.value,
        birthday:birthday.value,
        country: country.value ,
    }
        accounts.push(account);
        saveInStorage(accounts)
    // console.log(account);
    name.value=''
    pin.value=''
    region.value='';
    birthday.value='';
    modal.style.display = "none";
}

function saveInStorage(id1){
    
            localStorage.setItem("accounts",JSON.stringify(id1))
         }
function loadFromStoragex(){
            let commentFromLocal1=[]
            const dataFromLocal1 = localStorage.getItem("accounts");
            // const dataFromLocal2 = localStorage.getItem("cartDataBase");
             commentFromLocal1 = dataFromLocal1 !== null ? JSON.parse(dataFromLocal1) : [];
             return commentFromLocal1;

        }