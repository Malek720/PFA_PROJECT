function applyLang(lang) {
  document.querySelectorAll('.lang-fr').forEach(el => el.style.display = lang === 'fr' ? '' : 'none');
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'fr' ? '🇬🇧 English' : '🇫🇷 Français';
  localStorage.setItem('pfa-lang', lang);
}
function toggleLang() {
  const current = localStorage.getItem('pfa-lang') || 'fr';
  applyLang(current === 'fr' ? 'en' : 'fr');
}
function injectButton() {
  if (document.getElementById('lang-toggle')) return;
  const btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.onclick = toggleLang;
  btn.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;padding:8px 16px;border-radius:20px;border:none;background:#534AB7;color:#fff;font-size:13px;font-weight:500;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.25);`;
  document.body.appendChild(btn);
}
document.addEventListener('DOMContentLoaded', () => { injectButton(); applyLang(localStorage.getItem('pfa-lang') || 'fr'); });
document.addEventListener('DOMContentSwitch', () => { injectButton(); applyLang(localStorage.getItem('pfa-lang') || 'fr'); });
