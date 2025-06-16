// Tambahkan kode JavaScript kalian di file ini

// deklarasi tombol dan menu
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// membuat event click
// pada saat tombol di click, tambahkan class aktif pada class menu
// saat diklik lagi, maka class aktif dihilangkan dari class menu (toggle)
//tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;
    return {
      name: name,
      email: email,
      city: city,
      zipCode: zipCode,
      status: status,
    };
  }

function isNumber(str){
  return !isNaN(str);
};

  function checkboxIsChecked() {    
    return document.getElementById('status').checked;      
  }

function validateFormData(data) {

    return data !== null &&
           data.name !== "" &&
           data.city !== "" &&
           data.email !== "" &&
           isNumber(data.zipCode) &&
           checkboxIsChecked();
}

  function submit() {
    const formData = handleGetFormData();
    const warning = document.getElementById('warning');

    if (!validateFormData(formData)) {
      warning.textContent = 'Periksa form anda sekali lagi';      
    } else {
      console.log(formData);
      warning.textContent = '';
    }
  }

  document.getElementById('submit-form').addEventListener('click', (event) => {
     event.preventDefault();
      submit();
  })
 
