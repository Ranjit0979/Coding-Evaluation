// write js code here corresponding to matches.html

var matchDataArr = JSON.parse(localStorage.getItem("schedule")) || [];

displayData(matchDataArr);
console.log(matchDataArr);

function displayData(matchDataArr) {
  document.querySelector("tbody").innerHTML = "";

  matchDataArr.forEach(function (ele) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = ele.matchNumber;

    var td2 = document.createElement("td");
    td2.innerText = ele.teamA;

    var td3 = document.createElement("td");
    td3.innerText = ele.teamB;

    var td4 = document.createElement("td");
    td4.innerText = ele.date;

    var td5 = document.createElement("td");
    td5.innerText = ele.venue;

    var td6 = document.createElement("td");
    td6.innerText = "Add to Favourites";
    td6.style.color = "green";
    td6.style.cursor = "pointer";

    td6.addEventListener("click", function () {
      favourites(ele);
    });

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}

var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];

function favourites(ele) {
  favouritesArr.push(ele);

  localStorage.setItem("favourites", JSON.stringify(favouritesArr));
  //   console.log(favouritesArr);
}

document.querySelector("#filterVenue").addEventListener("change", function () {
  var selected = document.querySelector("#filterVenue").value;

  if (selected == "none") {
    displayData(matchDataArr);
  } else {
    var filterArr = matchDataArr.filter(function (ele) {
      return ele.venue == selected;
    });
    displayData(filterArr);
  }
});
