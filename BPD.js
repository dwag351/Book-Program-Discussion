const showModal = () => {
    var modal = document.getElementById("modalWindow");
    var body = document.getElementById("body");
    body.style.overflow = "hidden";
    modal.style.display = "block";
}

const closeModal = () => {
    var modal = document.getElementById("modalWindow");
    var body = document.getElementById("body");
    body.style.overflow = "auto";
    modal.style.display = "none";
}