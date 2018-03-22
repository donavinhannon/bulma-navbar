# Bulma Navbar
Responsive navbar from bulma.io translated to scss and stripped of many color classes.

## Install

### HTML
```sh
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="container">
    
    <!-- logo or branding image on left side -->
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger"  data-target="navbar-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- children of navbar-menu must be navbar-start and/or navbar-end -->
    <div class="navbar-menu" id="navbar-menu">
      <!-- navbar items | left side -->
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Docs</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="#">Overview</a>
              <a class="navbar-item" href="#">Elements</a>
              <a class="navbar-item" href="#">Components</a>
              <hr class="navbar-divider">
              <div class="navbar-item"> Version 0.1.0</div>
            </div>
          </div>
      </div>

      <!-- navbar items | right side -->
      <div class="navbar-end">
        <a class="navbar-item is-active" href="/"> Home</a>
        <a class="navbar-item" href="#">About</a>
        <a class="navbar-item" href="#">Projects</a>
        <a class="navbar-item" href="#">Contact</a>
      </div>

    </div>
  </div>
</nav>
```

### CSS


### JS (inline)
```sh
<!-- Bulma Navbar JS -->
  <script>
    document.addEventListener('DOMContentLoaded', function () {

      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }

    });
  </script>
```

