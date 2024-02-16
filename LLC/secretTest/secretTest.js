let bbtimes;



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

bbtimes = get_staff_times();
console.log("lil func outside",bbtimes);
  