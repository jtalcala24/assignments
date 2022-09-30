const form = document.myForm;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const gender = form.gender.value;
  const city = form.city.value;

  const checkedInputs = [];

  for (let i = 0; i < form.diet.length; i++) {
    if (form.diet[i].checked) {
      checkedInputs.push(form.diet[i].value);
    }
  }

  alert(`First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}
Location: ${city}
Diet Restrictions: ${checkedInputs}`);

  form.firstName.value = "";
  form.lastName.value = "";
  form.age.value = "";
  form.gender.value = "";
});
