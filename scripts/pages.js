const timeAnimation = 600;

const btnPages = document.querySelectorAll(".j_btn");
const featuredImage = document.querySelector(".j_featured_image img");

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

            closePage(pageToClose.page, pageToClose.pagePosition);
            
            setTimeout(() => {
                moveImage(pageToOpen.pagePosition);
                openPage(pageToOpen.page, pageToOpen.pagePosition);
            }, timeAnimation);
        })
    })
}

export default pages;