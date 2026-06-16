const items = document.querySelectorAll(".header_txt");
const itemHeaders = document.querySelectorAll(".scrollTo");


items.forEach((item, index) => {
  item.addEventListener("click", () => {

    const target = itemHeaders[index];

    const headerOffset = 80; 
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  })});