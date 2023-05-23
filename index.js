function calculate() {
  let bmi;
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);
  let result = document.getElementById("result");

  document.getElementById("weight").textContent = weight + "kg";
  document.getElementById("height").textContent = height + "cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  result.textContent = bmi;

  if (bmi < 18.5) {
    comment = "Underweight :no_mouth: :👍:";
    result.style.color = "#0ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    comment = "Normal Weight :🕺:";
    result.style.color = "#0BE881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    comment = "Overweight :🧑‍🦼:";
    result.style.color = "#FF884D";
  } else {
    comment = "obese :💀:";
    result.style.color = "#FF5E57";
  }
  document.getElementById("comment").textContent= comment;

}

function clearAll(){
    window.location.reload();
}
