function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }

  function selectOption(button) {
    // Markiere Auswahl
    const buttons = document.querySelectorAll('.dropdown-menu button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Zeige die Auswahl oben
    const toggle = document.querySelector('.dropdown-toggle');
    toggle.textContent = button.textContent;

    // Schließe das Menü
    document.getElementById('dropdownMenu').style.display = 'none';
  }

  // Optional: Schließe Dropdown wenn außerhalb geklickt wird
  window.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.getElementById('dropdownMenu').style.display = 'none';
    }
  });