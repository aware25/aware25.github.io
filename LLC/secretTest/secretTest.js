let bbtimes;

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
  bbtimes = get_staff_times();
  console.log("lil func outside",bbtimes);

 
const alex = new Employee("Alex");
console.log("bbtimes.mon");
alex.mon = bbtimes.mon;
console.log(alex);


console.log("bbtimes[0]");
alex.mon = bbtimes[0].mon;
console.log(alex);



async function get_staff_times() {
    const response = await fetch("staffTimes.json");
    const times = await response.json();
    console.log("lil func done");
    return times;
  }


function get_staff_time() {
    bbtimes = get_staff_times();
    console.log("lil func outside butt",bbtimes);
}  