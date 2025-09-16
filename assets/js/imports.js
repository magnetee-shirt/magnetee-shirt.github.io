const headerHTML = `
<!-- HEADER -->
<header class="main-header">
    <div class="container">
        <div class="logo">
            <a href="/"><span>Magne</span>Tee</a>
        </div>
        <button class="menu-toggle" aria-label="Ouvrir le menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <nav class="main-nav">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À propos de nous</a></li>
                <li>
             <!--   <div class='center-wrapper'>
                    <label class="theme-switch" for="theme-checkbox">
                        <input type="checkbox" id="theme-checkbox">
                        <div class="slider round">
                            <span class="sun" draggable="false">☀️</span>
                            <span class="moon" draggable="false">🌙</span>
                        </div>
                    </label>
                    </div> -->
                </li>
            </ul>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<!-- FOOTER -->
<footer class="main-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Yannick & Jim</h3>
                <img src="https://magnetee-shirt.github.io/assets/img/avatar_circle.png" style="vertical-align: middle; width: 20%">
            </div>
            <div class="footer-section">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/news">À propos de nous</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <a href="mailto:liveweeeb@proton.me">contact.magnetee@proton.me</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 <a href="https://github.com/liveweeeb13">Yannick & Jim</a>. Tous droits réservés.</p>
        </div>
    </div>
</footer>
`;

function injectHTML(html, position = 'end') {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const element = wrapper.firstElementChild;

    if (position === 'start') {
        document.body.prepend(element);
    } else {
        document.body.append(element);
    }
}

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
    injectHTML(headerHTML, 'start');
    injectHTML(footerHTML, 'end');

    loadScript('/assets/js/themes.js');
    loadScript('/assets/js/menu.js');
});
