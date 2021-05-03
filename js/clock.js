

function currentTime()
 {
    var date = new Date();  
    var dayOfWeek = ["Вс.","Пн.","Вт.","Ср.","Чт.","Пт.","Сб."]
    var daysweek = date.getDay();
    var day = updateTime(date.getDate()); 
    var month = updateTime(date.getMonth()+1);
    var year = date.getFullYear();
    var hour = updateTime(date.getHours());
    var min = updateTime(date.getMinutes());
    var sec = updateTime(date.getSeconds());
    document.getElementById("clock").innerText =  hour + ":" + min + ":" + sec + " \n" +dayOfWeek[daysweek] + "\n" + day + "." + month + "." + year;
    var t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  function updateTime(k)
   {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();