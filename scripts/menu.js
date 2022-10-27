const menuHambIcon = document.querySelector(".j_menu_hamb_icon");
const dropdown = document.querySelectorAll(".j_dropdown");

const menu = () => {
    menuHambIcon.addEventListener("click", (event) => {
        event.preventDefault();
        menuHambIcon.classList.toggle("active");
    })

    dropdown[0].querySelector(".j_submenu").style.left = "unset";
    dropdown[0].querySelector(".j_submenu").style.right = "0";

    document.querySelector("body").addEventListener("click", (event) => {
        event.preventDefault();
        
        if (!event.target.classList.contains("j_submenu") && !event.target.classList.contains("j_submenu_item")) {
            dropdown.forEach((item) => {
                if (item.classList.contains("active") && !event.target.classList.contains("j_dropdown")) {
                    item.classList.remove("active");
                }
            })
        }
    })

    dropdown.forEach((item, i, arr) => {

        item.addEventListener("click", (event) => {
            event.preventDefault();

            if (item.classList.contains("active") && (!event.target.classList.contains("j_submenu") && !event.target.classList.contains("j_submenu_item"))) {
                item.classList.remove("active");
            } else {
                arr.forEach((i) => {
                    i.classList.remove("active");
                })
                
                item.classList.add("active");
            }
        })
    })
}

export default menu;