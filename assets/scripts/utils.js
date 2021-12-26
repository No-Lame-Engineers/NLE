'use strict';

export const randomInt = (maxExclusive, min = 0) => {
    min = Math.ceil(min);
    maxExclusive = Math.floor(maxExclusive);

    return Math.floor(Math.random() * (maxExclusive - min)) + min;
};

export const mainContentHasOverflow = () => {
    return document.getElementById('main').clientHeight >= window.innerHeight;
};


export const isElementIntoView = (element) => {
    return element.getBoundingClientRect().top < window.innerHeight;
};

export const hasScrolled = () => {
    return Boolean(window.scrollY);
};