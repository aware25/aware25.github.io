


async function get_staff_times() {
    const response = await fetch("staffTimes.json");
    const times = await response.json();
    console.log(times[0].last_name);
  }
  