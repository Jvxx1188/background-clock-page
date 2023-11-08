setTimeout(() => {
  const ClockContainer = document.querySelector("#clock") as HTMLDivElement;
  console.log("clock working");
  async function DateTime() {
    const data = await fetch("https://worldtimeapi.org/api/ip")
      .then((result) => result.json())
      .then((date) => {
        return new Date(date.datetime);
      });

    SetDate(data as Date);

    function SetDate(date: Date) {
      ClockContainer.innerHTML = date.getHours() + ":" + date.getMinutes();

      setTimeout(() => {
        DateTime();
      }, 5000);
    }
  }
  DateTime();
}, 1000);
