<template lang="html">
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>

      <div class="navbar-burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" id="navMenu">
      <div class="navbar-start">
        <a href="#/addition" class="navbar-item">
          <span class="fas fa-plus-square fa-fw"></span>
          {{ $t('Addition') }}
        </a>
        <a href="#/subtraction" class="navbar-item">
          <span class="fas fa-minus-square fa-fw"></span>
          {{ $t('Subtraction') }}
        </a>
      </div>

      <div class="navbar-end">
        <a href="#/config" class="navbar-item">
          <span class="fas fa-cog fa-fw"></span>
          {{ $t('Config') }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script type="text/javascript">
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
