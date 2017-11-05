function GetClock() {
    var day = new Date();
    var nmonth = d.getMonth();
    var nday = d.getDay();
    var ndate = d.getDate();
    var nyear = d.getYear();
    if(nyear<1000) nyear+=1900;
    var nhour = d.getHours();
    var nmin = d.getMinutes();
    if(nmin<=9) nmin = "0" + nmin

    document.getElementById('clockbox').innerHTML = nhour + ":" + nmin ;
    document.getElementById('datebox').innerHTML = tdate[nday] + "-" + ndate + "-" + tmonth[nmonth];
}

function toggleOther() {
    document.getElementById("dropdown-content-id").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
