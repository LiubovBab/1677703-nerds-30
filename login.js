const writeBotton = document.querySelector(".write-button");
const writePopup = document.querySelector(".modal");
const writeClose = writePopup.querySelector(".modal-close");
const writeForm = writePopup.querySelector(".login-form");
const writeName = writePopup.querySelector(".login-icon-user");
const writelogin = writePopup.querySelector(".login-icon-login");
const writeText = writePopup.querySelector(".login-icon-text");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("Name");
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
  isStorageSupport = false;
}

writeBotton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");

  if (storage) {
    writeName.value = storage;
    writeLogin.value = storage;
    writeText.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

 writeForm.addEventListener("submit", function (evt) {
  if (!writeName.value  ||  !writelogin.value || !writeText.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
  }  else {
     if (isStorageSupport) {
       localStorage.setItem("Name", writeName.value);
       localStorage.setItem("login", writelogin.value);}
     }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
    }
  }
});
