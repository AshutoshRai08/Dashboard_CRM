

async function showTable(){
	document.getElementById('body').innerHTML='';
	const response=await fetch(`https://salevelocity.free.beeceptor.com/activityReport`)
	const result =await response.json();
	let showTab=document.getElementById('dynamic-table-1')
	// debugger;
	let reportArray=result.activityReport;
	// console.log(typeof(reportArray),reportArray);
	
	let names=[]
	let emails=[]
	let notes=[]
	let phones=[]
	reportArray.forEach(e=>{
		let activityType=[];
		
		let notes=[];
		let contacts=e.contact
		activityType.push(e.activityType);
		notes.push(e.notes);
	
		// let counter=contacts.length;
		contacts.forEach(el=>{
			// counter--;
			let name=[];
			let email=[];
			let phone=[];
			name.push(el.name);
			email.push(el.email);
			
			let num=el?.phone
			if (num!=undefined){
			phone.push(el.phone);
			}else
			{
				phone.push(el.role)
			}
			// debugger;
			// if(counter==0)
			tableGenerartion(...activityType,...phone,...name,...email,...notes);
			
		})

		
		

	})

	// console.log(names,emails,notes,phones);
	// alert("s")
	// debugger
	showTab.style.display='block'
	var myTable = document.querySelector(".table");
var dataTable = new DataTable(myTable,{
	searchable: true,
	fixedHeight: true,
	
});
}
function tableGenerartion(activityType,phones,names,emails,notes){

	let html=` <tr>
	<td>${activityType}</td>
	<td>${names}</td>
	<td>${emails}</td>
	<td>${phones}</td>
	<td>${notes}</td>
</tr>`
 document.getElementById('body').insertAdjacentHTML('afterbegin',html);
}
// var firstRow = document.querySelector("tr");
// dataTable.rows().remove(firstRow.dataIndex);

