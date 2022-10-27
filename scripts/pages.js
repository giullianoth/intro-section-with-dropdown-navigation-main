const timeAnimation = 600;

const btnPages = document.querySelectorAll(".j_btn");
const featuredImage = document.querySelector(".j_featured_image img");
const pageContents = document.querySelectorAll("section");
const menuHambIcon = document.querySelector(".j_menu_hamb_icon");

const setPage = (url) => {

    let { page, pagePosition } = {
        page: "",
        pagePosition: ""
    }

    switch (url) {
        case "home":
            page = document.querySelector(".j_main");
            pagePosition = "left";
            break;

        case "about":
            page = document.querySelector(".j_about");
            pagePosition = "right";
            break;

        case "carrers":
            page = document.querySelector(".j_carrers");
            pagePosition = "right";
            break;

        case "login":
            page = document.querySelector(".j_login");
            pagePosition = "right";
            break;

            case "register":
                page = document.querySelector(".j_register");
                pagePosition = "right";
                break;

        default:
            return null;
    }

    return { page, pagePosition };
}

const openPage = (page, position) => {
    let positionClass = `out_${position}`;

    page.classList.remove("no_display");

    setTimeout(() => {
        page.classList.remove(positionClass);
    }, timeAnimation);
}

const closePage = (page, position) => {
    let positionClass = `out_${position}`;

    page.classList.add(positionClass);

    setTimeout(() => {
        page.classList.add("no_display");
    }, timeAnimation);
}

const moveImage = (position) => {
    if (!featuredImage.classList.contains("move") && position === "right") {
        featuredImage.classList.add("move");
    } else if (featuredImage.classList.contains("move") && position === "left") {
        featuredImage.classList.remove("move");
    }
}

const pages = () => {

    btnPages.forEach((btn) => {

        btn.addEventListener("click", (event) => {
            event.preventDefault();
            let pageToOpen = setPage(btn.dataset.url);
            let pageToClose = setPage(btn.parentNode.dataset.page);

            pageContents.forEach((content) => {
                if (window.getComputedStyle(content).display !== "none") {
                    pageToClose = setPage(content.dataset.page);
                }
            })

            if (pageToClose.page != pageToOpen.page) {
                closePage(pageToClose.page, pageToClose.pagePosition);

                setTimeout(() => {
                    moveImage(pageToOpen.pagePosition);
                    openPage(pageToOpen.page, pageToOpen.pagePosition);
                }, timeAnimation);
            }

            menuHambIcon.classList.remove("active");
        })
    })
}

export default pages;