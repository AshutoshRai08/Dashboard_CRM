    var btn = document.getElementById("myBtn1");
    var modal1 = document.getElementById("myModal1");
    var span = document.getElementsByClassName("close1")[0];
    var divHead=document.getElementById('head');
    var divFoot=document.getElementById('foot'); 
 
    
    //close the modal
    span.onclick = function() {
      modal1.style.display = "none";
    }
    
    //close modal whith whiteSpace CLick
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }

    async function clickFunc() {
      document.getElementById('reven').innerHTML='';
      
      divHead.innerHTML='Revenue Details for Monthly Quaterly & Yearly';
  let tab1=  `<div> <table id="dynamic-table-1" class="tableMonthly">
  <thead><h2 style="height: 10px;font-size:14px;padding:3px;margin:5px;">Monthly Revenue</h2>
   <tr>
       <th data-field="code" data-sortable="true">Months</th>
       <th data-field="value1" data-sortable="true">Revenue</th>
   </tr>
  </thead>
  <tbody class="tableMonth" onchange="clickFunc()">
  </tbody>
  </table>
</div>
<div>  <table id="dynamic-table-1" class="tableQuaterly">
          
  <thead><h2 style="height: 10px;font-size:14px;padding:3px;margin:5px;">Quaterly Revenue</h2>
   <tr>
       <th data-field="code" data-sortable="true">Quarter</th>
       <th data-field="value1" data-sortable="true">Revenue</th>
   </tr>
  </thead>
  <tbody class="tableQuater" onchange="clickFunc()">
  </tbody>
  </table>
</div>

<div style="width=50%">  <table id="dynamic-table-1" class="tableYearly">
          
  <thead><h2 style="height: 10px;font-size:14px;padding:3px;margin:5px;">Yearly Revenue</h2>
   <tr>
       <th data-field="code" data-sortable="true">Year</th>
       <th data-field="value1" data-sortable="true">Revenue</th>
   </tr>
  </thead>
  <tbody class="tableYear" onchange="clickFunc()">
  </tbody>
  </table>
</div>`
// debugger
document.getElementById('reven').insertAdjacentHTML('afterbegin',tab1);
// console.log( document.getElementById('reven').innerHTML);

createTab();
    
          // const response=await fetch(`https://fakestoreapi.com/products/category/${route.params.category}`)
          const response=await fetch(`https://salevelocity.free.beeceptor.com/saleData`)

          const result =await response.json();

      document.querySelector('.tableMonth').innerHTML='';
      document.querySelector('.tableQuater').innerHTML='';
      document.querySelector('.tableYear').innerHTML='';
      
      result.forEach(el => {
          let total=el.data.revenue.total;  
          let monthly=el.data.revenue.monthly;
          let quarterly=el.data.revenue.quarterly;
          let yearly=el.data.revenue.yearly;
          // debugger
          Object.keys(monthly).forEach(key => {
              const html=` <tr>
              <td>${key}</td>
              <td>${monthly[key]}</td>
              </tr>`;
              document.querySelector('.tableMonth').insertAdjacentHTML('beforeend',html)
            });
          Object.keys(quarterly).forEach(key => {
              const html=` <tr>
              <td>${key}</td>
              <td>${quarterly[key]}</td>
              </tr>`;
              document.querySelector('.tableQuater').insertAdjacentHTML('beforeend',html)
            });
          Object.keys(yearly).forEach(key => {
              const html=` <tr>
              <td>${key}</td>
              <td>${yearly[key]}</td>
              </tr>`;
              document.querySelector('.tableYear').insertAdjacentHTML('beforeend',html)
            });
            divFoot.innerHTML=`Total Revenue ${total}`
      });  
      
      modal1.style.display = "block";
  }
  async function clickFunc2() {
    const response=await fetch(`https://salevelocity.free.beeceptor.com/conversions`)
            const result =await response.json();
            let data1=result.data.conversion_rates;
            // console.log(typeof(result.data.conversion_rates));
            let total_conversations=[];
            let successful_conversions=[];
            let conversion_rate=[];
            let dates=[];
            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            let yr;
            let monthName;
            data1.forEach(el=>{
              total_conversations.push(el.total_conversations);
              successful_conversions.push(el.successful_conversions);
              conversion_rate.push(el.conversion_rate);
              let nDate=new Date(el.date);
              dates.push(nDate.getDate());
              yr=nDate.getFullYear();
              monthName=month[nDate.getMonth()];
            })
      document.getElementById('reven').innerHTML=''
      
      let htt=`<div><canvas id="myChart"></canvas></div>
      <div><canvas id="myChart1"></canvas></div>
      <div><canvas id="myChart2"></canvas></div>`
      document.getElementById('reven').insertAdjacentHTML('afterbegin',htt);
      divHead.innerHTML=`Sale Report for month of ${monthName} ${yr}`;
      divFoot.innerHTML=`Avg rate Conversion ${result.data.average_conversion_rate}%`;
      creatChart(total_conversations,conversion_rate,successful_conversions,dates);
      modal1.style.display = "block";
  }
  async function clickFunc3(){
      // alert('working')
      const response=await fetch(`https://salevelocity.free.beeceptor.com/sale_Velocity`);
      const result =await response.json();
      let teamMembers=result.data.team_performance.team_members;
      let saleVelocity=result.data.sales_velocity;
      let names=[];
      let totalOpportunity=[];
      let wonOpportunity=[];
      let conversionRate=[];
      let avgDealTime=[];
      names.push("total");
      totalOpportunity.push(saleVelocity.total_opportunities);
      wonOpportunity.push(saleVelocity.closed_won_opportunities);
      conversionRate.push(Number(saleVelocity.conversion_rate));
      avgDealTime.push(Number(saleVelocity.average_time_to_close));
      teamMembers.forEach(el=>{
        names.push(el.name);
        totalOpportunity.push(el.total_opportunities);
        wonOpportunity.push(el.closed_won_opportunities);
        conversionRate.push(el.conversion_rate);
        avgDealTime.push(el.average_time_to_close);
      })

      document.getElementById('reven').innerHTML=''
      divFoot.innerHTML=`Total Pipeline Value ${saleVelocity.pipeline_value}`;
      divHead.innerHTML=`Sale Velocity Graph for ${saleVelocity.time_period}`;
      
      let html=`<canvas id="myChart" style="width:100%;max-width:450px"></canvas>
      <canvas id="myChart1" style="width:100%;max-width:450px"></canvas>
      <canvas id="myChart2" style="width:100%;max-width:450px"></canvas>
      <canvas id="myChart3" style="width:100%;max-width:450px"></canvas>`
      document.getElementById('reven').insertAdjacentHTML('afterbegin',html);
      velocityChart(names,totalOpportunity,wonOpportunity,conversionRate,avgDealTime);
      modal1.style.display = "block";
  }

  async function clickFunc4(){
    document.getElementById('reven').innerHTML=''
    
    divHead.innerHTML=`Deal Win Rate for Months and People`;
    const response=await fetch(`https://salevelocity.free.beeceptor.com/dealWinRate`);
    const result =await response.json();
    let data=result.data;
    divFoot.innerHTML=`Average Deal Size ${data.averageDealSize}`;
    let topSales=data.topSalespeople;
    let monthStats=data.monthlyStats;
    let wonDealsPeople=[]
    let wonDealsMonth=[]
    let labelsPeople=[]
    let labelsMonth=[]
    let lostRateMonth=[]
    let lostRatePeople=[]
    let winRatePeople=[]
    let winRateMonth=[]
    lostRateMonth.push(data.lostDeals)
    lostRatePeople.push(data.lostDeals)
    labelsPeople.push("Total Average Rate")
    labelsMonth.push("Total Average Rate")
    wonDealsPeople.push(data.wonDeals);
    wonDealsMonth.push(data.wonDeals);
    winRateMonth.push(data.winRate)
    winRatePeople.push(data.winRate)
    topSales.forEach(e=>{
      labelsPeople.push(e.name);
      wonDealsPeople.push(e.wonDeals);
      lostRatePeople.push(e.lostDeals)
      winRatePeople.push(e.winRate)
    })
    monthStats.forEach(e=>{
      labelsMonth.push(e.month);
      wonDealsMonth.push(e.wonDeals);
      lostRateMonth.push(e.lostDeals)
      winRateMonth.push(e.winRate)
    })
    let Mapp=["People","Month"]
    Mapp.forEach(e=>{
    let i='wonDeals';
    let k='labels';
    let l='lostRate';
    let j='winRate';
    let html=`<div style="width:50%;display: flex; flex-direction: column;">
    <canvas id="myChart" style="width:100%;max-width:450px"></canvas>
    <canvas id="myChart1" style="width:100%;max-width:450px"></canvas>
    <canvas id="myChart2" style="width:100%;max-width:450px"></canvas>
    </div> `
    document.getElementById('reven').insertAdjacentHTML('afterbegin',html);
    pieChart(eval(i+e),eval(k+e),eval(l+e),eval(j+e),e)
    });
    modal1.style.display = "block";
  }
  async function clickFunc5(){
    // alert('Working')
    document.getElementById('reven').innerHTML='';
    const response=await fetch(`https://salevelocity.free.beeceptor.com/saleForecast`);
    const result =await response.json();
    let dataForecast=result.salesForecast.forecastItems;
    let startDate=result.salesForecast.startDate;
    let endtDate=result.salesForecast.endDate;
    let quantity=[];
    let revenue=[];
    let xVal = new Set([]);
    dataForecast.forEach(e=>{
      let quant1=[];
      let reven1=[];
      e.forecastValues.forEach(el=>{
        // debugger;
    
        quant1.push(el.quantity);
        reven1.push(el.revenue)
        xVal.add(el.date);
        // debugger
      })
      quantity.push(quant1);
      revenue.push(reven1);

    })

    for(let i=0;i<2;i++){
    let html=`<canvas id="myChart" style="width:100%;max-width:600px"></canvas>`
    document.getElementById('reven').insertAdjacentHTML('afterbegin',html)
    i==0?multipleChart(...revenue,[...xVal],"Product Revenue Graph"):multipleChart(...quantity,[...xVal],"Product Quantity Graph");
    
    }
    divHead.innerHTML=`Half Yearly Sales Forecast`;
    divFoot.innerHTML=`Forecast from ${startDate} to ${endtDate}`;
    modal1.style.display='block';
  }
    function createTab(){
    var tableMonthly = document.querySelector(".tableMonthly");
    var dataTableMonthly = new DataTable(tableMonthly,{
      searchable: false,
      perPageSelect:false,
  });
    var tableQuaterly = document.querySelector(".tableQuaterly");
    var dataTableQuaterly = new DataTable(tableQuaterly,{
        searchable: false,
        perPageSelect:false,
    });
    var tableYearly = document.querySelector(".tableYearly");
    var dataTableYearly = new DataTable(tableYearly,{
        searchable: false,
        perPageSelect:false,
    });
};
    function creatChart(total_conversations,conversion_rate,successful_conversions,dates){
      let xyValuesTotal=[];
      let xyValuesSuccess=[];
      let xyValuesRate=[];
      for(let i=0;i<dates.length;i++){
        xyValuesTotal[i] ={x:dates[i], y:total_conversations[i]}
        xyValuesSuccess[i] ={x:dates[i], y:successful_conversions[i]}
        xyValuesRate[i] ={x:dates[i], y:conversion_rate[i]}
      }
   
      const myChart=new Chart("myChart", {
        type: "scatter",
        data: {
          datasets: [{
            label:'Total Conversations',
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValuesTotal
          }]
        },
        options: {
           
                title: {
                    display: true,
                    text: 'Recieved Enquiries'
                }, 
          legend: {display:true},
          scales: {
            xAxes: [{ticks: {min: 1, max:5}}],
            yAxes: [{ticks: {stepSize: 200,min: 1000, max:2000}}],
          }
         
        }
      })
      const myChart1=new Chart("myChart1", {
        type: "scatter",
        data: {
          datasets: [{
            label:'Succesfull Conversations',
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValuesSuccess
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Successful Enquiries'
        }, 
          legend: {display: true},
          scales: {
            xAxes: [{ticks: {min: 1, max:5}}],
            yAxes: [{ticks: {stepSize: 200,min: 1000, max:2000}}]
          }
        }
      })
      const myChart2=new Chart("myChart2", {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValuesRate
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Win Percentage'
        },
          legend: {display: false},
          scales: {
            xAxes: [{ticks: {min: 1, max:5}}],
            yAxes: [{ticks: {stepSize: 20,min: 0, max:100}}]
          }
        }
      })
    };
    
function velocityChart(names,totalOpportunity,wonOpportunity,conversionRate,avgDealTime){
var xValues = names;
var yValues = totalOpportunity;
var barColors = ["red", "green","blue","orange","brown"];

let myChart=new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Total Sale Leads"
    },
    scales: {
      yAxes: [{ticks: {stepSize: 15,min: 0, max:150}}],
    }
  }
});
var yValues1 = wonOpportunity;
let myChart1=new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Deals Converted"
    },
    scales: {
      yAxes: [{ticks: {stepSize: 15,min: 0, max:150}}],
    }
  }
});
var yValues2 = conversionRate;
let myChart2=new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Conversion Rates"
    },
    scales: {
      yAxes: [{ticks: {stepSize: 10,min: 0, max:100}}],
    }
  }
});
var yValues3 =avgDealTime;
let myChart3=new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues3
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Average Days To Convert Deals"
    },
    scales: {
      yAxes: [{ticks: {stepSize: 2,min: 0, max:20}}],
    }
  }
})};
function pieChart(wonDeals,labels,lostDeals,winRate,Mapp){
  var xValues = labels;
  var yValues = wonDeals;
  var barColors = ["red", "green","blue","orange","brown"];
  let myChart=new Chart("myChart", {
    type: "horizontalBar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: `Won Deals By ${Mapp}`
      },
      scales: {
        xAxes: [{ticks: {stepSize: 10,min: 0, max:150}}],
      }
    }
  });
  var yValues1 = lostDeals;
  let myChart1=new Chart("myChart1", {
    type: "horizontalBar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: `Lost Deals By ${Mapp}`
      },
      scales: {
        xAxes: [{ticks: {stepSize: 5,min: 0, max:50}}],
      }
    }
  });
  var yValues2=winRate;
  let myChart2=new Chart("myChart2", {
    type: "horizontalBar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues2
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: `Win Rate Percentage By ${Mapp}`
      },
      scales: {
        xAxes: [{ticks: {stepSize: 10,min: 0, max:150}}],
      }
    }
  });
  
  }
  function multipleChart(yvalues1,yvalues2,yvalues3,yvalues4,xval,titles){
    const xValues = xval;
let myChart=new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label:"Product A",
      data: yvalues1,
      borderColor: "red",
      fill: false
    },{
      
      label:"Product B",
      data: yvalues2,
      borderColor: "green",
      fill: false
    },
    {
      
      label:"Product C",
      data: yvalues3,
      borderColor: "blue",
      fill: false
    },{
      
      label:"Product D",
      data: yvalues4,
      borderColor: "yellow",
      fill: false
    }
  ]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: titles
    },
  }
});
  }

// var firstRow = document.querySelector("tr");
// dataTable.rows().remove(firstRow.dataIndex);

