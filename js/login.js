let login = document.getElementById('login');
let register = document.getElementById('register');
let form_box = document.getElementsByClassName('form-box')[0];
let register_box = document.getElementsByClassName('register-box')[0];
let login_box = document.getElementsByClassName('login-box')[0];

register.addEventListener('click', () => {
    form_box.style.transform = 'translateX(86%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})

login.addEventListener('click', () => {
    form_box.style.transform = 'translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})

function validatePassword(){
  var password = document.getElementById("pw1").value;
  var confirm_password = document.getElementById("pw2").value;
  if(password !== confirm_password) {
    alert("确认密码与输入密码不一致");
    return false;
  }
  return true;
}
