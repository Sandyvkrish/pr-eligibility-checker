function calculate() {
  const age = document.getElementById("age").value;
  const education = document.getElementById("education").value;
  const english = document.getElementById("english").value;

  const result = document.getElementById("result");

  if (!age || !education || !english) {
    result.style.display = "block";
    result.className = "low";
    result.innerText = "Please select all fields before calculating.";
    return;
  }

  let score = 0;

  if (age === "high") score += 2;
  else if (age === "medium") score += 1;

  if (education === "high") score += 2;
  else if (education === "medium") score += 1;

  if (english === "high") score += 2;
  else if (english === "medium") score += 1;

  result.style.display = "block";

  if (score >= 5) {
    result.className = "success";
    result.innerText = "Great! You have a strong chance for Canada PR.";
  } else if (score >= 3) {
    result.className = "medium";
    result.innerText = "You have a moderate chance. Improving your profile can increase your chances.";
  } else {
    result.className = "low";
    result.innerText = "Your chances are currently low. Consider improving your IELTS or education profile.";
  }
}