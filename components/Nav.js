export default Links => `
<nav>
    <i class="fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${Links.map(
        el =>
          `<li><a href = "/${el.title}" title = "${el.title}" data-navigo>${el.text} </a></li>`
      ).join("")}
    </ul>
  </nav>`;
