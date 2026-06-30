/* MJS PEINTURE — interactions */
(function () {
  // Menu mobile
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // FAQ accordéon
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : null;
    });
  });

  // Funnel / popup "Quel est votre besoin ?"
  var funnel = document.getElementById('funnel');
  if (funnel) {
    var grid = document.getElementById('needsGrid');
    var fgrid = document.getElementById('funnelGrid');
    // clone les cartes de la section dans la modale (source unique)
    if (grid && fgrid && !fgrid.children.length) fgrid.innerHTML = grid.innerHTML;

    funnel.hidden = false; // l'affichage est géré par la classe .open
    var openFunnel = function () { funnel.classList.add('open'); document.body.style.overflow = 'hidden'; };
    var closeFunnel = function () { funnel.classList.remove('open'); document.body.style.overflow = ''; };

    document.querySelectorAll('[data-funnel]').forEach(function (b) {
      b.addEventListener('click', openFunnel);
    });
    var closeBtn = document.getElementById('funnelClose');
    if (closeBtn) closeBtn.addEventListener('click', closeFunnel);
    funnel.addEventListener('click', function (e) { if (e.target === funnel) closeFunnel(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeFunnel(); });

    // ouverture automatique une fois par session
    try {
      if (!sessionStorage.getItem('mjs_funnel_seen')) {
        setTimeout(function () { openFunnel(); sessionStorage.setItem('mjs_funnel_seen', '1'); }, 1500);
      }
    } catch (err) { /* sessionStorage indisponible : on ignore */ }
  }

  // Formulaire de devis -> ouvre le client mail (fonctionne sans serveur).
  // Pour un envoi automatique, remplacer par un endpoint Formspree dans l'attribut data-endpoint.
  document.querySelectorAll('form.devis-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var endpoint = form.getAttribute('data-endpoint');
      if (endpoint) return; // un vrai endpoint est configuré : laisser l'envoi natif
      e.preventDefault();
      var get = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
      var sujet = 'Demande de devis - ' + (get('besoin') || 'Peinture') + ' (' + (get('nom') || 'Site web') + ')';
      var corps =
        'Nom : ' + get('nom') + '\n' +
        'Téléphone : ' + get('telephone') + '\n' +
        'Email : ' + get('email') + '\n' +
        'Besoin : ' + get('besoin') + '\n\n' +
        'Description :\n' + get('description');
      window.location.href = 'mailto:contact@artisan-peintre-tournefeuille31.fr'
        + '?subject=' + encodeURIComponent(sujet)
        + '&body=' + encodeURIComponent(corps);
    });
  });
})();
