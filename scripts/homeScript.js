function displayCustomer(){
    // debugger
    let size=[]
    size=JSON.parse(localStorage.getItem("accounts"));
    const count=document.querySelector('.customerCount');
    displayCustomer1(size)
}
function displayCustomer1(accs){
    document.querySelector('.allCustomer').innerHTML=''
    // console.log(accs);
    accs.forEach(element => {
        // console.log(element);
        const html=`<div class="box bg-purple" style="margin: ${10}px; padding: ${10}px;">
        <p>${element.owner}</p>
        <p >${element.birthday}</p>
        <p>${element.pin}</p>
        <p>${element.region}</p>
        <div class="icon-value">
          <div class="icon">
          </div>
        </div>
      </div>`;
      document.querySelector('.allCustomer').insertAdjacentHTML('beforeend',html);
    });
 

}

