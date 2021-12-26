import { mainContentHasOverflow, isElementIntoView, hasScrolled } from './utils.js';

(() => {
    const defineFooterIndent = () => {
        const footer = document.getElementById('footer');
        footer.classList.toggle('has-indent', mainContentHasOverflow());
    };

    const animateContacts = () => {
        const contacts = document.getElementById('contacts');
        contacts.classList.toggle('animate', isElementIntoView(contacts));
    };

    const defineArrow = () => {
        document.getElementById('arrow').classList.toggle('scrolled', hasScrolled());
    };

    const attachHeaderClick = () => {
        const header = document.getElementById('header');

        header.addEventListener('click', () => {
            hasScrolled() ? window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }) : header.scrollIntoView({ behavior: 'smooth' });
        });
    };

    window.addEventListener('resize', () => {
        defineFooterIndent();
    });

    window.addEventListener('scroll', () => {
        animateContacts();
        defineArrow();
    });

    attachHeaderClick();
    defineArrow();
    defineFooterIndent();
    animateContacts();
})();
