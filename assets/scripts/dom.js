import { mainContentHasOverflow, isElementIntoView } from './utils.js';

(() => {
    const defineFooterIndent = () => {
        const footer = document.getElementById('footer');
        footer.classList.toggle('has-indent', mainContentHasOverflow());
    };

    const animateContacts = () => {
        const contacts = document.getElementById('contacts');
        contacts.classList.toggle('animate', isElementIntoView(contacts));
    };

    const scrollIntoView = (elementId) => {
        document.getElementById(elementId).scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
    };

    window.addEventListener('resize', () => {
        defineFooterIndent();
    });

    window.addEventListener('scroll', () => {
        animateContacts();
    });

    defineFooterIndent();
})();
