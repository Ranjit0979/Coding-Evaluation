// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", matchData);
var matchDataArr = JSON.parse(localStorage.getItem("schedule")) || [];
function matchData() {
  event.preventDefault();
  var obj = {
    matchNumber: masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    venue: masaiForm.venue.value,
  };

  matchDataArr.push(obj);

  localStorage.setItem("schedule", JSON.stringify(matchDataArr));
  //   console.log(matchDataArr);
}
