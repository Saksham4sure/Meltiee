import 'remixicon/fonts/remixicon.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    smooth: true,
    lerp: 0.05,
    gestureDirection: 'both',
    smoothTouch: true,
    touchMultiplier: 0.5,
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
    "/images/img13.jpg",
    "/images/img14.jpg",
    "/images/img15.jpg"
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
let tl = gsap.timeline()
tl.set(".hero-text", {
    y: 50,
    opacity: 0
})
tl.to(".hero-text", {
    y: 100,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power2.inOut",
})

tl.to(".hero-text", {
    y: 0,
    delay: -0.7,
    duration: 0.7,
    stagger: 0.15,
    rotate: 0,
    x: 0,
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


(() => {
    let clutter = ""
    let menuPara = document.querySelector(".menu-para");
    let menuParaText = menuPara.innerHTML;
    menuParaText.split("").forEach((e) => {
        if (e == " ") {
            clutter += `<span class="menu-para-text inline-block">&nbsp;</span>`
        } else {
            clutter += `<span class="menu-para-text inline-block">${e}</span>`
        }
    })
    menuPara.innerHTML = clutter;


})()

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let navbar = document.getElementById("navbar")
let status = false
burger.addEventListener("click", () => {
    burger.style.pointerEvents = 'none'
    if (status) {
        // of Code


        let lt = gsap.timeline({
            onComplete: () => {
                burger.style.pointerEvents = 'unset'

            }
        })
        lt.to(".menu-para-text", {
            filter: "blur(3px)",
            y: `50%`,
            opacity: 0,
            stagger: 0.01
        }, "b")
        lt.to(".menu-icons", {
            filter: "blur(3px)",
            x: `-100%`,
            opacity: 0,
            stagger: 0.05
        }, "b")

        lt.to(navbar, {
            color: '#2E2E2E'
        }, "a")
        lt.to(menu, {
            y: `-100%`
        }, "a")

        burger.innerHTML = `<i class="ri-menu-line text-2xl"></i>`

        status = !status
    }
    else {
        //on Code
        let tl = gsap.timeline({
            onComplete: () => {
                burger.style.pointerEvents = 'unset'

            }
        })
        tl.set(".menu-icons", {
            filter: "blur(7px)",
            x: `-100%`,
            opacity: 0
        })
        tl.set(".menu-para-text", {
            filter: "blur(3px)",
            y: `50%`,
            opacity: 0
        })

        burger.innerHTML = `<i class="ri-close-large-line text-2xl"></i>`


        //off code
        tl.to(navbar, {
            color: '#DFD0B8'
        }, "a")
        tl.to(menu, {
            y: 0
        }, "a")
        tl.to(".menu-icons", {
            filter: `blur(0px)`,
            x: 0,
            opacity: 1,
            stagger: 0.05
        })
        tl.to(".menu-para-text", {
            filter: `blur(0px)`,
            y: 0,
            opacity: 1,
            stagger: 0.01
        })


        status = !status
    }

    console.log(status)
})

gsap.registerPlugin(ScrollTrigger);
gsap.from(".heading", {
    opacity: 0,
    y: 70,
    ease: "expo.inOut",
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
    }
})

gsap.from(".card", {
    x: -800,
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
    }
})

gsap.to(".card", {
    scale: 0.4,
    y: 550,
    rotateY: 180,
    ease: "expo.inOut",
    scrollTrigger: {
        trigger: ".about",
        start: "top 0%",
        end: "bottom -20%",
        scrub: true,
    }
})
gsap.set(".menu-card", {
    rotateY: 180,
})


if (window.innerWidth >= 1024) {
    let jl = gsap.timeline({
        scrollTrigger: {
            trigger: ".menu-section",
            start: "top 50%",
            end: "10% 10%",
            scrub: true,
        },
    });

    jl.from(".menu-card", {
        y: -700,
        scale: 0.4,
        stagger: 0.1,
        ease: "power1.out"
    });

    jl.to(".menu-card", {
        rotateY: 0,
        stagger: 0.1,
        ease: "power1.inOut"
    });

} else {

    let jl = gsap.timeline({
        scrollTrigger: {
            trigger: ".menu-section",
            start: "top 50%",
            end: "60% top",
            scrub: true,
        },
    });

    jl.from(".menu-card", {
        y: 300,
        ease: "power1.out"
    });
    jl.to(".menu-card", {
        rotateY: 0,
        stagger: 0.3,
        ease: "power1.inOut"
    });
};

let ml = gsap.timeline({
    scrollTrigger: {
        trigger: ".menu-section",
        start: "top 105%",
        end: "20% 60%",
        scrub: true,
    },
})

ml.from(".heading", {
    y: 100,
    opacity: 0.4,
    ease: "power1.inOut"
})
ml.from(".subheading", {
    y: 100,
    stagger: 0.1,
    opacity: 0.4,
    ease: "power1.inOut"
})