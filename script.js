document.addEventListener("DOMContentLoaded", function () {
  let submit = document.getElementById("submit");
  let underContainer = document.getElementById("under-container");
  let dayValue = document.getElementById("day");
  let monthValue = document.getElementById("month");
  let yearValue = document.getElementById("year");

  function skicka(event) {
    event.preventDefault();

    let day = parseInt(dayValue.value);
    let month = parseInt(monthValue.value);
    let year = parseInt(yearValue.value);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      let today = new Date();
      let birthDate = new Date(year, month - 1, day);
      let ageInMilliseconds = today - birthDate;

      let years = Math.floor(ageInMilliseconds / 31536000000);
      ageInMilliseconds %= 31536000000;
      let months = Math.floor(ageInMilliseconds / 2592000000);
      ageInMilliseconds %= 2592000000;
      let days = Math.floor(ageInMilliseconds / 86400000);

      let yearsText = `${years} years`;
      let monthsText = `${months} months`;
      let daysText = `${days} days`;

      if (years === 0 && months === 0 && days === 0) {
        underContainer.querySelector("#years div").textContent = "--";
        underContainer.querySelector("#months div").textContent = "--";
        underContainer.querySelector("#days div").textContent = "--";
      } else {
        underContainer.querySelector("#years div").textContent = yearsText;
        underContainer.querySelector("#months div").textContent = monthsText;
        underContainer.querySelector("#days div").textContent = daysText;
      }
    
    }
  }

  submit.addEventListener("click", skicka);
});
