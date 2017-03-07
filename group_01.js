var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function processEmployees (array) {
  for(var i = 0; i < array.length; i++){
    // console.log(array[i]);
    this.name = array[i][0];
    console.log(this.name);
    this.bonus = bonusPercent(array[i][1], array[i][3]);
    console.log(this.bonus);
}
}
processEmployees(employees);
//
function bonusPercent (idNumber, employeeRating) {

var bonusRate = 0;

switch (employeeRating) {
  case 3:
    bonusRate = 0.04;
    break;
  case 4:
    bonusRate = 0.06;
    break;
  case 5:
    bonusRate = 0.1;
    break;
  default:
    bonusRate = 0;
   }

if(idNumber.length < 5) {
  return (bonusRate + 0.05);
// } else if (salary > "65000") {
} else {
  return bonusRate;
}


}

// var employeeBonusPercent = bonusPercent("652", 4);
//
// console.log(employeeBonusPercent);
