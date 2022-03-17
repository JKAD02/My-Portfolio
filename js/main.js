/*=============== SHOW MENU ===============*/
const navToggle = document.querySelector(".nav-btns");

navToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if(this.scrollY >= 80){
        header.classList.add("scroll-header");
    }else{
        header.classList.remove("scroll-header")
    }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach(e => {
        const sectionHeight = e.offsetHeight;
        const sectionTop = e.offsetTop - 50;

        sectionId = e.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        }else{
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
})

/*===== PRIMARY COLORS =====*/
const colorChoose = document.querySelectorAll('.choose-color span');
var root = document.querySelector(":root");

const changeActive = () => {
    colorChoose.forEach(e => {
        e.classList.remove('active');
    })
}
colorChoose.forEach(e => {
    e.addEventListener("click", () => {
        let primaryHue;
        changeActive();

        if(e.classList.contains('color-1')){
            primaryHue = 252;
        }else if(e.classList.contains('color-2')){
            primaryHue = 52;
        }else if(e.classList.contains('color-3')){
            primaryHue = 352;
        }else if(e.classList.contains('color-4')){
            primaryHue = 152;
        }else if(e.classList.contains('color-5')){
            primaryHue = 202;
        }

        e.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue)
    });
})

/*===== THEME BACKGROUNDS =====*/
const bg1 = document.querySelector(".bg-1")
const bg2 = document.querySelector(".bg-2")
const bg3 = document.querySelector(".bg-3")

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg2.addEventListener('click', () => {
    darkColorLightness =  '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');

    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness =  '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');

    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})

bg1.addEventListener('click', () => {
    darkColorLightness =  '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '92%';

    bg1.classList.add('active');

    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})