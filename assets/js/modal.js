const openModal = document.querySelector(".modal__open");
const modalRegister = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close")
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister.classList.add("modal--show");
});
closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalRegister.classList.remove("modal--show");
});

const openModal2 = document.querySelector(".modal2__open");
const modalRegister2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector(".modal2__close")
openModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister2.classList.add("modal2--show");
});
closeModal2.addEventListener("click", (e) => {
    e.preventDefault();
    modalRegister2.classList.remove("modal2--show");
});
