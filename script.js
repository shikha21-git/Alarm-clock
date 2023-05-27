


let now_time_dom = document.getElementsByClassName("now_time")[0];
const date = new Date();

setInterval(()=>{

  let dt = new Date();
    let hrs = dt.getHours();
    let mins = dt.getMinutes();
    let sec = dt.getSeconds();

    if(hrs%10==hrs){
        hrs = '0'+hrs;    
    }
    if(mins%10==mins){
        mins = '0'+mins;    
    }
    if(sec%10==sec){
        sec = '0'+sec;    
    }

    now_time_dom.innerHTML = hrs+':'+mins+':'+sec;


    let currentDay= date.getDate();

    let currentMonth = date.getMonth()+1;
  
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    let dayOfWeek = document.createElement('span');
    dayOfWeek.classList.add('small');
    dayOfWeek.classList.add('dt');
    dayOfWeek.textContent = currentDate;
    now_time_dom.appendChild(document.createElement('br'));
    now_time_dom.appendChild(dayOfWeek);

}, 1000);


document.getElementsByClassName('setAlarm')[0].addEventListener('click', () => {
    // document.getElementById("alarmModal").modal('show');
    document.getElementById("alarmModal").style.display = "block";
    document.getElementById("settingsModal").style.display = "none";
    document.getElementById("TimerModal").style.display = "none";
    document.getElementById("stopwatchModal").style.display = "none";
  });

  document.getElementById('tm').addEventListener('click', () => {
    // document.getElementById("alarmModal").modal('show');
    document.getElementById("TimerModal").style.display = "block";
    document.getElementById("alarmModal").style.display = "none";
    document.getElementById("settingsModal").style.display = "none";
    document.getElementById("stopwatchModal").style.display = "none";
  });

  document.getElementById('sw').addEventListener('click', () => {
    // document.getElementById("alarmModal").modal('show');
    document.getElementById("stopwatchModal").style.display = "block";
    document.getElementById("alarmModal").style.display = "none";
    document.getElementById("settingsModal").style.display = "none";
    document.getElementById("TimerModal").style.display = "none";
  });

  document.getElementById('st').addEventListener('click', () => {
    // document.getElementById("alarmModal").modal('show');
    document.getElementById("settingsModal").style.display = "block";
    document.getElementById("alarmModal").style.display = "none";
    document.getElementById("TimerModal").style.display = "none";
    document.getElementById("stopwatchModal").style.display = "none";
  });


  document.getElementById("setAlarm").addEventListener('click', () => {



    let hrs_in = document.getElementById("hrs-in").value;
    let min_in = document.getElementById("mins-in").value;
    let sec_in = document.getElementById("sec-in").value;


    var ndt = new Date();
    let hrs = ndt.getHours();
    let mins = ndt.getMinutes();
    let sec = ndt.getSeconds();


  diff = (hrs_in+min_in+sec_in) - (hrs+mins+sec);

  // alert(`Time Difference is: ${diff}`);


  let currentDay= date.getDate();

  let currentMonth = date.getMonth()+1;

  let currentYear = date.getFullYear();


  let currentTimestamp = `${currentYear}-${currentMonth}-${currentDay} ${hrs}:${mins}:${sec}`;
  let alarmTimestamp = `${currentYear}-${currentMonth}-${currentDay} ${hrs_in}:${min_in}:${sec_in}`;

// console.warn(strtotime(currentTimestamp));
// console.warn(strtotime(alarmTimestamp));

let timediff = strtotime(alarmTimestamp)-strtotime(currentTimestamp);  /// In MilliSeconds


setTimeout(()=>{
  // console.warn(`It's ${hrs_in}:${min_in}:${sec_in} Please wake up!!`);
  let beat = new Audio('ringtones/alarm.mp3');
      beat.play();
}, timediff);

document.getElementById("success-alert").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Hello User!</strong> Alarm for the timestamp ${hrs_in}:${min_in}:${sec_in} is successfully setup. You can take a relaxing nap now.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;

document.getElementById("success-alert").style.display = "block";

setTimeout(()=>{
  document.getElementById("success-alert").style.display = "none";
  document.getElementById("alarmModal").style.display = "none";

}, 5000)

  });



  function strtotime(dateString) {
    // Define a lookup object for textual representations
    const lookup = {
      now: () => new Date().getTime(),
    };
  
    if (lookup[dateString]) {
        // If the input matches a textual representation, return its timestamp
        const timestamp = lookup[dateString]();
        if (timeString) {
          const timeParts = timeString.split(':');
          timestamp += parseInt(timeParts[0], 10) * 3600000; // Hours
          timestamp += parseInt(timeParts[1], 10) * 60000; // Minutes
          timestamp += parseInt(timeParts[2], 10) * 1000; // Seconds
        }
        return timestamp;
      } else {
        // Try parsing the input as a date string
        const timestamp = Date.parse(dateString);
        if (!isNaN(timestamp)) {
          return timestamp;
        }
      }
    
      // If the input cannot be parsed, return NaN
      return NaN;
  }
  

  document.getElementById("setTimer").addEventListener('click', () => {
    let sec_in = document.getElementById("tsec-in").value;
    let temp = sec_in;
    sec_in = sec_in*1000;


    let Timer = setInterval(()=>{
      sec_in = sec_in-1000;
      document.getElementById("tsec-in").value = sec_in/1000;

    }, 1000);

    setTimeout(()=>{

      clearInterval(Timer);
      sec_in = sec_in-1000;

      let beat = new Audio('ringtones/timer.mp3');
      beat.play();

      // alert(document.getElementById("tsec-in").value+" seconds timer Ended champ");

      document.getElementById("TimerModal").style.display = "none";
      document.getElementById("success-alert").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>${temp} seconds timer ended champ!!`;
      document.getElementById("success-alert").style.display = "block";


      setTimeout(()=>{
        document.getElementById("success-alert").style.display = "none";
      
      }, 5000)

    }, sec_in);



  });





var swinterval;


  document.getElementById("start").addEventListener('click', () => {


    let initiate = 0;
    

    swinterval = setInterval(()=>{
      let timestamp = initiate*1000;
      timestamp = timestamp+1000;
      initiate+=1;
      // thrs = (timestamp/1000);

      // let tempdate = new Date(timestamp);
      let thrs = (timestamp/1000)/3600;
      let tmins = ((timestamp/1000)/60)%60;
      let tsec = (timestamp/1000)%60;

      document.getElementById("shrs-in").value = "0"+Math.floor(thrs);
      document.getElementById("smins-in").value = "0"+Math.floor(tmins);
      document.getElementById("ssec-in").value = tsec;


    }, 1000);

  });


  
  document.getElementById("stop").addEventListener('click', () => {

    clearInterval(swinterval);

  });