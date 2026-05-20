// Tab switching for sample data section
document.querySelectorAll('.tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    var target = this.dataset.tab;

    // Remove active from all tabs and content
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });

    // Activate clicked tab and matching content
    this.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

// Smooth scroll for dataset card links that point to sample tabs
document.querySelectorAll('.ds-card').forEach(function(card) {
  card.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    if (!href || href === '#') return;

    // Extract tab name from anchor e.g. #sample-oswal -> oswal
    var tabId = href.replace('#sample-', '');
    var tabBtn = document.querySelector('.tab[data-tab="' + tabId + '"]');
    if (tabBtn) {
      e.preventDefault();
      tabBtn.click();
      document.getElementById('samples').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
