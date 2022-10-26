const timeAnimation = 600;

const btnLink = document.querySelectorAll(".j_btn");

const aboutPage = document.querySelector(".j_about");
const mainPage = document.querySelector(".j_main");
const featuredImage = document.querySelector(".j_featured_image img");

const About = (page, position) => {
    let positionClass = `out_${position}`;

    if (page.classList.contains(positionClass)) {
        page.classList.remove("no_display");
        setTimeout(() => {
            page.classList.remove(positionClass);
        }, timeAnimation);
    } else {
        page.classList.add(positionClass);
        setTimeout(() => {
            page.classList.add("no_display");
        }, timeAnimation);
    }
}

const pages = () => {

    btnLink.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.parentNode.classList.add("out_left");

            setTimeout(() => {
                event.target.parentNode.classList.add("no_display");
                featuredImage.classList.add("move");
                About(aboutPage, "right");
            }, timeAnimation);

            console.log(event.target.parentNode.classList);
        })
    })
}

export default pages;