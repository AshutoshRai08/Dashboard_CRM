
function birthdays(){
    size=JSON.parse(localStorage.getItem("accounts"));
    // console.log(size);
    
    let styleBG=document.getElementById('purpleBack');
    // debugger
    if(styleBG.style.display=='none' ||styleBG.style.display==''){
      // debugger;
      styleBG.style.display='block'
      document.getElementById('birthDays').innerHTML=''
      sendOver(size)
    }
    else{
      // debugger
      styleBG.style.display='none'
    }
}
function sendOver(accs){
  let birthLength=[];
    accs.forEach(element => {
    
        let dates=new Date(element.birthday);
        let currentDate=new Date();

        let currentDay=currentDate.getDate();
        let currentMonth=currentDate.getMonth()+1;
        let monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];
        
        // debugger
        
        let month=dates.getMonth()+1;
        let day=dates.getDate()
    
        if((month<=12) && currentMonth<=month){
          let birthday=new Date(`${currentDate.getFullYear()}/${month}/${day}`)
          let dayDiff=Math.abs(currentDate-birthday);
          let days=Math.ceil(dayDiff/ (1000 * 60 * 60 * 24));
          if(days<=31){
        let birthDiv=day+' '+monthName[month-1]
        birthLength.push(birthDiv);
        insertBirthDiv(birthDiv)}
        }
        else if(month==1 && (currentMonth==12)){
          let birthday=new Date(`${currentDate.getFullYear()+1}/${month}/${day}`)
          let dayDiff=Math.abs(currentDate-birthday);
          let days=Math.ceil(dayDiff/ (1000 * 60 * 60 * 24));
          if(days<=31){
          let birthDiv=day+' '+monthName[month-1]
          birthLength.push(birthDiv);
          insertBirthDiv(birthDiv)}
        }

function insertBirthDiv(birthDiv){
  const html=` <div class="box bg-pink" style="paddin:7px;margin:7px;">
<p>${birthDiv}</p>
</div>`
document.getElementById('birthDays').insertAdjacentHTML('beforeend',html)
}

    const date1 = new Date('12/13/2010');
   
const date2 = new Date('1/13/2011');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 


    });
    document.querySelector('.totalBirth').innerHTML=birthLength.length;
}
    