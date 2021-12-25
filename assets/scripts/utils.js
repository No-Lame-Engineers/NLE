export const randomInt = (maxExclusive, min = 0) => {
    min = Math.ceil(min);
    maxExclusive = Math.floor(maxExclusive);

    return Math.floor(Math.random() * (maxExclusive - min)) + min;
};

export const isMobileDevice = () => {
    return window.matchMedia('(max-width: 992px)');
};