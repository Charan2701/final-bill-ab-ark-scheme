


var form=document.querySelector("#main-form")


form.addEventListener("submit",function print(e){
    e.preventDefault();
    var box1=document.querySelector("#box1")
    box1.style.display="none"
    document.querySelector(".box").style.display="block"


    // patient name
    var name = document.getElementById("iname").value;
    var namelist=document.querySelectorAll("#oname");
    for (let i = 0; i < namelist.length; i++) {
      namelist[i].innerText = name;
    }

    document.title=name;
    
    

    // bill date
    var billdate=document.getElementById("ibdate").value;
    var billdatelist=document.querySelectorAll("#obdate")
    for (let i = 0; i < billdatelist.length; i++) {
      billdatelist[i].innerText = billdate.split("-").reverse().join("-")
    }

    // ref no
    var refno=document.getElementById("irefno").value
   

    var reflist=document.querySelectorAll("#orefno")
    for (let i = 0; i < reflist.length; i++) {
     reflist[i].innerText = refno
    }



    // date of admission
    var doa=document.getElementById("iadate").value
    var doalist=document.querySelectorAll("#odoa")
    for (let i = 0; i < doalist.length; i++) {
      doalist[i].innerText = doa.split("-").reverse().join("-")
    }

    // date of surgery
    var dos=document.getElementById("isdate").value
    var doslist=document.querySelectorAll("#odos")
    for (let i = 0; i < doslist.length; i++) {
      doslist[i].innerText = dos.split("-").reverse().join("-")
    }
    
    // date of discharge
    var dod=document.getElementById("iddate").value
    document.getElementById("odod").innerText=dod.split("-").reverse().join("-");
    var dodlist=document.querySelectorAll("#odod")
    for (let i = 0; i < dodlist.length; i++) {
      dodlist[i].innerText = dod.split("-").reverse().join("-")
    }

    // address
    var address = document.getElementById("iaddress").value;
    var addresslist=document.querySelectorAll("#oaddress");
    for (let i = 0; i < addresslist.length; i++) {
      addresslist[i].innerText = address;
    }

    // bpl card no
    var bplno = document.getElementById("ibplno").value;
    var bplnolist=document.querySelectorAll("#obplno");
    for (let i = 0; i < bplnolist.length; i++) {
      bplnolist[i].innerText = bplno;
    }

    // bill years 
    // yy1
    var billyy1 = document.getElementById("ibillyy1").value;
    
    var billyy1list=document.querySelectorAll("#obillyy1");
    for (let i = 0; i < billyy1list.length; i++) {
      billyy1list[i].innerText = billyy1;
    }

    // yy2

    var billyy2 = document.getElementById("ibillyy2").value;
    
    var billyy2list=document.querySelectorAll("#obillyy2");
    for (let i = 0; i < billyy2list.length; i++) {
      billyy2list[i].innerText = billyy2;
    }


    // ip no
    var ipno = document.getElementById("iipno").value;

    var ipnolist=document.querySelectorAll("#oipno");
    for (let i = 0; i < ipnolist.length; i++) {
      ipnolist[i].innerText = ipno;
    }

    // package code

    var packagecode = document.getElementById("ipcode").value;

    var packagecodelist=document.querySelectorAll("#opcode");
    for (let i = 0; i < packagecodelist.length; i++) {
      packagecodelist[i].innerText = packagecode;
    }

    // procedur name
    var procedurename = document.getElementById("iproname").value;

    var procedurenamelist=document.querySelectorAll("#oproname");
    for (let i = 0; i < procedurenamelist.length; i++) {
      procedurenamelist[i].innerText = procedurename;
    }

    // total package amount
    var packageamount = document.getElementById("itpamount").value;

    var packageamountlist=document.querySelectorAll("#otpamount");
    for (let i = 0; i < packageamountlist.length; i++) {
      packageamountlist[i].innerText = packageamount;
    }

    // total claim amount
    var claimamount = document.getElementById("itcamount").value;
    document.getElementById("otcamount").innerText=claimamount;

    var claimamountlist=document.querySelectorAll("#otcamount");
    for (let i = 0; i < claimamountlist.length; i++) {
      claimamountlist[i].innerText = claimamount;
    }

   //pre auth issue date
   var pad=document.getElementById("ipadate").value
   var padlist=document.querySelectorAll("#opadate")
   for (let i = 0; i < padlist.length; i++) {
     padlist[i].innerText = pad.split("-").reverse().join("-")
   }

  //  patient district
  var district=document.getElementById("idistrict").value;
  var districtlist=document.querySelectorAll("#odistrict")
   for (let i = 0; i < districtlist.length; i++) {
     districtlist[i].innerText = district
   }

  //  checkbox
  // O T Note Enclosed (Yes/No)
  var  otnotei=document.getElementById("iotdets")
  var otnotesr=otnotei.checked?"YES":"NO"
  document.getElementById("ootdets").innerText=otnotesr;

 // Dischargesummary (Yes/No)
  var  disdets=document.getElementById("idisdets")
  var disdetsr=disdets.checked?"YES":"NO"
  document.getElementById("odisdets").innerText=disdetsr;

  // Post Of Investigations Yes/No (As Percode Book)
  var  poinvest=document.getElementById("ipoinvest")
  var poinvestr=poinvest.checked?"YES":"NO";
  document.getElementById("opoinvest").innerText=poinvestr;


  // Clinical Photo Showing Scar/Photo As Requirement
  var  scardets=document.getElementById("iscardets")
  var scardetsr=scardets.checked?"YES":"NO"
  document.getElementById("oscardets").innerText=scardetsr;

// amount collect amount refund
var acollect=document.getElementById("iacollected").value;
  var acollectlist=document.querySelectorAll("#oacollect")
   for (let i = 0; i < acollectlist.length; i++) {
     acollectlist[i].innerText = acollect;
   }

   var arefund=document.getElementById("iarefund").value;
   var arefundlist=document.querySelectorAll("#oarefund")
    for (let i = 0; i < arefundlist.length; i++) {
      arefundlist[i].innerText = arefund;
    }


    // age
    var age=document.getElementById("iage").value;
   var agelist=document.querySelectorAll("#oage")
    for (let i = 0; i < agelist.length; i++) {
      agelist[i].innerText = age;
    }

    // sex
    var sex=document.getElementById("isex").value;
    var sexlist=document.querySelectorAll("#osex")
     for (let i = 0; i < sexlist.length; i++) {
       sexlist[i].innerText = sex;
     }

    //  department
    var department=document.getElementById("idep").value;
    var deplist=document.querySelectorAll("#odep")
     for (let i = 0; i < deplist.length; i++) {
       deplist[i].innerText = department;
     }

    //  director or director
    var doctor=document.getElementById("idoc").value;
    var doctorlist=document.querySelectorAll("#odoc")
     for (let i = 0; i < doctorlist.length; i++) {
       doctorlist[i].innerText = doctor;
     }

    //  arogyamitra
    var mitra=document.getElementById("imitra").value;
    var mitralist=document.querySelectorAll("#omitra")
     for (let i = 0; i < mitralist.length; i++) {
       mitralist[i].innerText = mitra;
     }
  //  sign
  var signlist=document.querySelectorAll("#opsign")
     for (let i = 0; i < signlist.length; i++) {
       signlist[i].src = URL.createObjectURL(ipsign.files[0]);
     }


    
   
  document.title=name;

    })
    




    function displayDates() {


      
      
      var pageheight=document.getElementById("special")
      // var n=document.getElementById("ipheight").value;

      // if(n==""){
      //   n=1;
      // }
      var startDate = new Date(document.getElementById("start_date").value);
        var endDate = new Date(document.getElementById("end_date").value);
  
      // Calculate the difference in milliseconds
      var difference = Math.abs(endDate - startDate);
  
      // Convert the difference to days
      var n = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;
      // var nn=0;
      console.log(n)
      let x=1;

      if(n<=12){
        x=1
      }

      if(n>12 && n<=46){
        x=2
      }
      
      if(n>46 && n<=80){
        x=3
      }
      if(n>80 && n<=114){
        x=4
      }

      if(n>114 && n<=150){
        x=5
      }

      if(n>150){
        x=6
      }

      console.log(x)

     



      

      
      pageheight.style.height=x*29.7+"cm";
      



        var startDate = new Date(document.getElementById("start_date").value);
        var endDate = new Date(document.getElementById("end_date").value);
        var currentDate = new Date(startDate);
  
        var dateTableBody = document.getElementById("date_table_body");
        dateTableBody.innerHTML = '';
  
        while (currentDate <= endDate) {
          var row = dateTableBody.insertRow();
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
  
          cell1.textContent = formatDate(currentDate); // Format date as dd-mm-yyyy
          cell2.textContent = getRandomTime();
          cell3.textContent = "Yes"; // Food Provided
          cell4.textContent = "No";  // Any Complaints
  
          currentDate.setDate(currentDate.getDate() + 1);
        }

        var box=document.querySelector(".box")
        box.style.display="none"
       
        // loader design
        document.getElementById("loader").style.transform="translateY(0%)"

        const loader =setTimeout(function(){
          document.querySelector("#box2").style.display="block"
        },6000)
        

        const loader1=setTimeout(() => {
          document.getElementById("loader").style.transform="translateX(-100%)"
          
        }, 6000);

        loader1();
        loader();


      }
  
      function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1; // January is 0
        var year = date.getFullYear();
        return (day < 10 ? '0' : '') + day + '-' + (month < 10 ? '0' : '') + month + '-' + year;
      }
  
      function getRandomTime() {
        var hours = 10 + Math.floor(Math.random() * 2); // Random hour between 10 and 11
        var minutes = Math.floor(Math.random() * 60); // Random minutes
        return hours + ":" + (minutes < 10 ? '0' : '') + minutes + " AM";
      }

