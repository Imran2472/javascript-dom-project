const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".btn-calculate");

const SpecialChar: string[] = ["/", "+", "*", "-", "%", "AC", "DEL", "="];
const SpecialChar2: string[] = ["AC", "DEL", "="];
for (let i = 0; i < buttons.length; i++) {
  for (let j = 0; j < SpecialChar.length; j++) {
    if (buttons[i].innerHTML.includes(SpecialChar[j])) {
      buttons[i].classList.add("text-[#2F9FFF]");
    }
  }
}

const input = document.querySelector("#input") as HTMLInputElement;

buttons.forEach((button) => {
  button.setAttribute("onclick", "GetValues(this)");
  const btninnervalue = button.innerHTML.trim();
  button.setAttribute("data-set", `${btninnervalue}`);
  console.log(btninnervalue);
});

const GetValues = (btn: HTMLButtonElement): void => {
  let btnvalue = btn.getAttribute("data-set");
  if (btnvalue == "DEL") {
    input.value = input.value.toString().slice(0, -1);
  } else if (btnvalue == "AC") {
    input.value = "";
  } else if (btnvalue == "=") {
    try {
      let result = eval(input.value);
      input.value = result.toString();
    } catch (error) {
      alert("Invalid Expression");
      input.value = "";
    }
  }
  for (let i = 0; i < SpecialChar2.length; i++) {
    if (SpecialChar2[i] == btnvalue) return;
  }
  input.value += btnvalue;
};
