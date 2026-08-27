gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero_title", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

gsap.from(".hero_text", {
  y: 20,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out",
  delay: 0.45,
});

gsap.from(".hero_button", {
  y: 16,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.65,
});

gsap.from(".hero_logos", {
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  delay: 0.85,
});

gsap.from(".photos_item", {
  y: 50,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".photos",
    start: "top 80%",
  },
});

document.querySelectorAll(".slider").forEach((slider) => {
  const isReversed = slider.querySelector(".slider_child--reverse");
  const textEl = slider.querySelector(".slider_text");
  const imgEl = slider.querySelector(".slider_img");

  gsap.from(textEl, {
    x: isReversed ? 60 : -60,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: slider,
      start: "top 75%",
    },
  });

  gsap.from(imgEl, {
    x: isReversed ? -60 : 60,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: slider,
      start: "top 75%",
    },
  });
});

gsap.to(".phone_button", {
  scale: 1.08,
  duration: 1.1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});