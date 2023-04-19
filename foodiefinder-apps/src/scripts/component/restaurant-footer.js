class FooterRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <!-- Footer Icon -->
  <section class="ft-sosmed">
    <ul class="ft-sosmed-list">
      <li><a href="https://www.linkedin.com/in/tatan-darusalam-833857259/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVKQwp7R8ShulADvAkb7cxA%3D%3D"><i class="fa-brands fa-linkedin"></i></a></li>
      <li><a href="https://github.com/"><i class="fa-brands fa-github"></i></a></li>
      <li><a href="https://www.instagram.com/tatan16_/"><i class="fab fa-instagram"></i></a></li>
    </ul>
    <ul>
      <li class="watermark">Copyright © 2023 - Foodie Finder Apps</li>
    </ul>
  </section>
      `;
  }
}

customElements.define("restaurant-footer", FooterRestaurant);
