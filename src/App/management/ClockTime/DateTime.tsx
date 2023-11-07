setTimeout(() => {
  async function DateTime() {
    const ClockContainer = document.querySelector("#clock");

    let data;
   await fetch("https://worldtimeapi.org/api/ip")
      .then((result) => result.json())
      .then((date) => {
        data = new Date(date.datetime);
      })
      .catch((error) => {
        console.log(error);
      });

      
  }
  DateTime();
}, 1000);
