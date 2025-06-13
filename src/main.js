import 'remixicon/fonts/remixicon.css'
import gsap from "gsap";


let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
    "images/img13.jpg",
    "images/img14.jpg",
    "images/img15.jpg"
]

let home = document.querySelector(".home");

let index = 0;
let limit = 80;
let lastX = 0, lastY = 0;

home.addEventListener("mousemove", (dets) => {

    if (lastX - dets.clientX > limit || lastX - dets.clientX < -limit || lastY - dets.clientY > limit || lastY - dets.clientY < -limit) {
        if (index < images.length) {
            let img = document.createElement("img")
            img.src = images[index]
            img.classList.add("absolute", "h-40", "z-20", "-translate-x-1/2", "-translate-y-1/2")
            img.style.left = `${dets.clientX}px`
            img.style.top = `${dets.clientY}px`
            home.appendChild(img)

            gsap.from(img, {
                opacity: 0,
                scale: 0,
                rotation: gsap.utils.random(-20, 20),
                duration: 0.4,
                ease: "power2.out",
            })
            gsap.to(img, {
                y: 50,
                rotation: gsap.utils.random(-45, 45),
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.in",

            })



            index++;
            lastX = dets.clientX;
            lastY = dets.clientY;


            setTimeout(() => {
                home.removeChild(img)
            }, 1500);
        }

        if (index == images.length) {
            index = 0

        }
    }


});

gsap.from(".nav-items", {
    y: -50,
    opacity: 30,
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.out",
})

gsap.from(".hero-text", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    delay: 0.1,
    ease: "power2.inOut",
})

gsap.from(".hero-para", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    delay: 0.5,
    ease: "power2.out",
})
gsap.from(".hero-but", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    delay: 1,
    ease: "power2.inOut",
});



let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let status = "close";
let completed = true;




// burger.addEventListener('click', () => {

//         if (status == "close") {
//             menu.classList.remove("hidden");

//             let tl = gsap.timeline({
//                 onComplete: () => {
//                     completed = true;
//                 }
//             });

//             tl.from(".menu", {
//                 y: -800,
//                 duration: 0.4,
//                 ease: "power2.out",
//             })
//             tl.from(".menu-icons", {
//                 x: -150,
//                 duration: 1,
//                 opacity: 0,
//                 stagger: 0.1,
//                 ease: "power2.inOut",
//             }, 'a')
//             tl.from(".menu-icons2", {
//                 y: 50,
//                 duration: 1,
//                 opacity: 0,
//                 stagger: 0.1,
//                 ease: "power2.inOut",
//             }, 'a')
//             tl.from(".menu-para", {
//                 y: 50,
//                 duration: 1,
//                 opacity: 0,
//                 delay: 0.4,
//                 stagger: 0.1,
//                 ease: "power2.inOut",
//             }, 'a')
//             status = "open"
//         }
//     console.log(status);

// });

// close.addEventListener('click', () => {
//     if (status == "open") {
//         menu.classList.add("hidden");


//         status = "close"
//     }
//     console.log(status);

// });

