const menuHambIcon = document.querySelector(".j_menu_hamb_icon");
const dropdown = document.querySelectorAll(".j_dropdown");

const menu = () => {
    menuHambIcon.addEventListener("click", (event) => {
        event.preventDefault();
        menuHambIcon.classList.toggle("active");
    })

    dropdown[0].querySelector(".j_submenu").style.left = "unset";
    dropdown[0].querySelector(".j_submenu").style.right = "0";

    dropdown.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            item.classList.toggle("active");
        })
    })
}

export default menu;