

let Employee = function (name,mon,tue,wed,thu,fri,sat,total_hours) {
  this.name = name;
  this.total_hours = 0;
  this.Day = {
    mon: mon = 0,
    tue: tue = 0,
    wed: wed = 0,
    thu: thu = 0,
    fri: fri = 0,
    sat: sat = 0
  };
};

let emp_times = get_staff_times();

const alex = new Employee("Alex", emp_times[0].mon, emp_times[0].tue, emp_times[0].wed, emp_times[0].thu, emp_times[0].fri, emp_times[0].sat);
const angela = new Employee("Angela");
  //const yvette = new Employee("Yvette");
  //const suffrens = new Employee("Suffrens");
  //const suzette = new Employee("Suzette");

let employees = [alex,angela];

function print_emps() {
  time_loop(employees);
  console.log(employees);
}



//////////////////////////
// START add_times
/////////////////////////

function time_loop (employee) {
  for (i = 0; i < employee.length; i++){
    employee[i].Day.mon = document.getElementById(employee[i].name + "_mon").value;
    employee[i].Day.tue = document.getElementById(employee[i].name + "_tue").value;
    employee[i].Day.wed = document.getElementById(employee[i].name + "_wed").value;
    employee[i].Day.thu = document.getElementById(employee[i].name + "_thu").value;
    employee[i].Day.fri = document.getElementById(employee[i].name + "_fri").value;
    employee[i].Day.sat = document.getElementById(employee[i].name + "_sat").value;
    
      add_emp_hours(employee[i]);
  }
}


function add_emp_hours(emp) {
  for (let key in emp.Day) {
    if (emp.Day.hasOwnProperty(key)){
      emp.Day[key] = emp.Day[key].split(" - ");
    }
  }
  for (let key in emp.Day) {
    if (emp.Day.hasOwnProperty(key)) {

      if (!emp.Day[key][0]) {
        emp.Day[key][0] = "0";
      } else {
        emp.Day[key][0] = emp.Day[key][0].split(":");
      }
      
      if (!emp.Day[key][1]) {

        emp.Day[key][1] = "0";

      } else {

        emp.Day[key][1] = emp.Day[key][1].split(":");

      }

      let first = timeToInt(emp.Day[key][0]);
      let second = timeToInt(emp.Day[key][1]);
      emp.total_hours = emp.total_hours + ((second - first) / 60);
    }
  }
  console.log(emp.name," - ", emp.total_hours);
}



//////////////////////////
// START timeToInt
/////////////////////////

function timeToInt(monH1) {

  let mornHH = [8,9,10,11,12];
  //monH1 = convert_times(monH1);
  
  monH1 = [parseInt(monH1[0]),parseInt(monH1[1])];
  //console.log(monH1);
  
  if (mornHH.includes(monH1[0]) == false) 
  {
    monH1[0] = monH1[0] + 12;
    //console.log("plus 12: ",monH1);
  } 
  else 
  {
    //console.log("no 12: ", monH1);
  }
  
  if (isNaN(monH1[1])) 
  {
    //console.log("hasnt minutes")
    monH1 = monH1[0] * 60;
    return monH1;
  } 
  else 
  {
    //console.log("has minutes")
    monH1 = (monH1[0] * 60) + monH1[1];

    //total_hours = total_hours + monH1;
    return monH1;
  }
}

//////////////////////////
// END timeToInt
/////////////////////////

async function get_staff_times() {
  const response = await fetch("staffTimes.json");
  const times = await response.json();
  return times;
  //console.log(times);
}
