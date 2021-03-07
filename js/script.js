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

const advOne = document.querySelector(".advantages");
const advTwo = document.querySelector(".advantages-two");
const advThree = document.querySelector(".advantages-three");
const slidecontrOne = document.querySelector(".slider-controls-one-be");
const slidecontrTwo = document.querySelector(".slider-controls-two");
const slidecontrThree = document.querySelector(".slider-controls-three");
const sliderDelete = document.querySelector(".slider-delete");

slidecontrTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  advOne.classList.remove("advantages");
  advOne.classList.add("slider-delete");
  advTwo.classList.remove("slider-delete");
  advTwo.classList.add("advantages");
  slidecontrOne.classList.remove(".slider-controls-one-be");
  slidecontrTwo.classList.add(".slider-controls-two-be");
});

slidecontrThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  advTwo.classList.remove("advantages");
  advTwo.classList.add("slider-delete");
  advTree.classList.remove("slider-delete");
  advTree.classList.add("advantages");
  slidecontrTwo.classList.remove(".slider-controls-two-be");
  slidecontrTree.classList.add(".slider-controls-tree-be");
});

slidecontrOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  advTree.classList.remove("advantages");
  advTree.classList.add("slider-delete");
  advOne.classList.remove("slider-delete");
  advOne.classList.add("advantages");
  slidecontrThree.classList.remove(".slider-controls-tree-be");
  slidecontrOne.classList.add(".slider-controls-one-be");
});
