// 切换按钮状态
const btns = document.querySelectorAll(".icon");
const header = document.querySelector(".header");

btns[0].addEventListener("click", () => {
  header.classList.add("nav-open");
});

btns[1].addEventListener("click", () => {
  header.classList.remove("nav-open");
});

// 跳转
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    navgation(href);
  });
});

// 判断跳转类型
function navgation(href) {
  // 返回顶部
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (href !== "#" && href.startsWith("#")) {
    // 锚点
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: "smooth" });
    // 切换按钮状态
    header.classList.remove("nav-open");
  } else {
    // 外部链接
    window.location.href = href;
  }
}

// 判断页面滑动 fixed header
const hero = document.querySelector(".hero");
const obs = new IntersectionObserver((entries) => {
  console.log(entries[0]);
  if (!entries[0].isIntersecting) {
    console.log(1111);
    document.body.classList.add("fixed");
    console.log(header.classList);
  } else {
    document.body.classList.remove("fixed");
  }
});

obs.observe(hero);
