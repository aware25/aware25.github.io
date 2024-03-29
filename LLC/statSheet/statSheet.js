// Program to autofill llc statistics forms

// Link to pre filled form: 



//https://bristolcc.libwizard.com/f/LLCstats?4438513=New%20Bedford&4438516=Service%20Desk%20(Circulation)&4438544=In%20person%20(walk-up)&4438548=Studying&4438554=No&4440691=1698357362122

// 4438513 = Campus 
// 4438516 = Location in LLC
// 4438544 = Method
// 4438548 = Question Asked
// 4438554 = 20 Minutes or Longer
// 4440691 = Date and Time (in ms)

// url varibles for future use

var campus = "";
var desk = "Service%20Desk%20(Circulation)";
var method = "In%20person%20(walk-up)";
var question = "";
var minutes_20 = "No";
var time;

// initiates time and date at current time and date

timeRefresh();

/////////////////////////////////////////
////////// choose_Time STARTS //////////
///////////////////////////////////////

function choose_Time()
{ 
  
  // assigns user input and wipes textbox
  
  var usr_time = document.getElementById("choose_time").value;
  document.getElementById("choose_time").value = "";
  
  // pulls todays date and sets time to midnight
  
  const currentDate = new Date();
  var currentDate_MN = currentDate.setHours(0,0,0,0);
  
  // splits hour off user input and converts to integer
  
  var time_split = usr_time.split(":");
  var hh = parseInt(time_split[0]);
  
  // defaults to on the hour when no minutes assigned by user
  // Kinda of a messy solution
  // prioritizes library open hours
  // 8-11 do am 12-7 and 13-23 do pm
  // 24 shows error
  
  if (time_split[1] == null)
  {    
    if (hh >= 8 && hh <= 11)
    {
      time_split[1] = "00";
    
    }
    else if ((hh > 11 && hh <= 12) || hh <= 7)
    {
      time_split[1] = "00 PM";
    
    }
    else if (hh > 12 && hh < 24)
    {
        hh = hh - 12;
        time_split[1] = "00 PM";
    }
    else
    {
      document.getElementById("time").innerHTML = "Please Re-enter Time in Proper Format";    
    }    
  }     
  
  // splits minutes off user input, converts to integer, and checks for meridian
  
  var time_split2 = time_split[1].split(" ");
  
  var mm = parseInt(time_split2[0]);

  var merid = time_split2[1];
  
  // adjusts user input and converts to 24 clock format
  
  if ((merid == "PM" || merid == "pm" || merid == "Pm" || merid == "pM") && hh != 12) {
    hh = hh + 12;   
  }
  if ((merid == "AM" || merid == "am" || merid == "Am" || merid == "aM") && hh == 12) {
    hh = hh + 12;   
  }
  
  // converts hours and minutes into milliseconds
  // adds time to current day at midnight
  // convers milliseconds into proper time and date
  
  var total_ms = ((hh * 60) + mm) * 60000;
  
  var chosen_time = total_ms + currentDate_MN;
  
  let date = new Date(chosen_time);

//////// looing for time erase bug when using set all 312312

  //time = date;
  
  // uses date to display time
  // uses millisecond time in url
  // sets url in html file
    
  document.getElementById("time").innerHTML = "Time Set To: " +  date.toLocaleTimeString();
  
  var str = `https://bristolcc.libwizard.com/f/LLCstats?4438513=${campus}&4438516=${desk}&4438544=${method}&4438548=${question}&4438554=${minutes_20}&4440691=${chosen_time}`;  

  document.getElementById("doesntmatter").setAttribute("href", str);
}

///////////////////////////////////////
////////// choose_Time ENDS //////////
/////////////////////////////////////

/////////////////////////////////////////
////////// timeRefresh STARTS ////////// 
///////////////////////////////////////

function timeRefresh()
{
  // pulls current date and time 
  
  const currentDate = new Date();
  
  // gets current time in milliseconds

  time = currentDate.getTime();
  
  // uses hour to display time
  
  var hour = currentDate.toLocaleTimeString();

  document.getElementById("time").innerHTML = "Time Set To: " +  hour;
  
  // uses millisecond time in url
  // sets url in html file 
  
  var str = `https://bristolcc.libwizard.com/f/LLCstats?4438513=${campus}&4438516=${desk}&4438544=${method}&4438548=${question}&4438554=${minutes_20}&4440691= ${time}`;  

  document.getElementById("doesntmatter").setAttribute("href", str);
}

////////////////////////////////////////
////////// time_Refresh ENDS //////////  
//////////////////////////////////////

/////////////////////////////////////////
////////// set_Question STARTS /////////
///////////////////////////////////////

function set_Question()
{
  selectElement = document.querySelector('#select_question');

  var output = selectElement.value;

  if (!document.getElementById("question").value) 
  {
    question = output;
  }
  else 
  {
    output = document.getElementById("question").value;
    document.getElementById("question").value = "";
    question = output;    
  }

  var str = `https://bristolcc.libwizard.com/f/LLCstats?4438513=${campus}&4438516=${desk}&4438544=${method}&4438548=${question}&4438554=${minutes_20}&4440691=${time}`;  

  document.getElementById("doesntmatter").setAttribute("href", str);

  document.querySelector('.question_output').textContent = output;
}

/////////////////////////////////////////
////////// set_Question ENDS ///////////
///////////////////////////////////////

/////////////////////////////////////////
////////// set_Campus STARTS////////////
///////////////////////////////////////

function set_Campus()
{
  selectElement = document.querySelector('#select_campus');

  var output = selectElement.value;

  if (!document.getElementById("campus").value) 
  {
    campus = output;
  }
  else 
  {
    output = document.getElementById("campus").value;
    document.getElementById("campus").value = "";
    campus = output;    
  }

  var str = `https://bristolcc.libwizard.com/f/LLCstats?4438513=${campus}&4438516=${desk}&4438544=${method}&4438548=${question}&4438554=${minutes_20}&4440691=${time}`;  

  document.getElementById("doesntmatter").setAttribute("href", str);

  document.querySelector('.campus_output').textContent = output;

  hideOrNah("allCampus");
}

/////////////////////////////////////////
////////// set_Campus ENDS /////////////
///////////////////////////////////////

/////////////////////////////////////////
/////////// hideOrNah STARTS ///////////
///////////////////////////////////////

function hideOrNah(idName)
{
  var x = document.getElementById(idName);
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

/////////////////////////////////////////
/////////// hideOrNah ENDS /////////////
///////////////////////////////////////

/////////////////////////////////////////
////////// set_All STARTS //////////////
///////////////////////////////////////

function set_All()
{
  // some bug where time erases after first choose_time 312312

  set_Campus();
  set_Question();

  if (document.getElementById("choose_time").value)
  {
    choose_Time();
  }
}

/////////////////////////////////////////
///////////// set_All ENDS /////////////
///////////////////////////////////////



/////////////////////////////////////////
////////// dead_set_Campus STARTS //////
///////////////////////////////////////
  /*
  function dead_set_Campus() {
    
    document.getElementById("cur_campus").innerHTML += usr_campus;
    
    var usr_campus = document.getElementById("campus").value;
    document.getElementById("campus").value = "";
    document.getElementById("cur_campus").innerHTML = "Campus Set To: " + usr_campus;
    
    campus = usr_campus;
    var str = `https://bristolcc.libwizard.com/f/LLCstats?4438513=${campus}&4438516=${desk}&4438544=${method}&4438548=${question}&4438554=${minutes_20}&4440691=${time}`;  

    document.getElementById("doesntmatter").setAttribute("href", str);  
    
  }
  */
/////////////////////////////////////////
////////// dead_set_Campus ENDS ///////////
///////////////////////////////////////