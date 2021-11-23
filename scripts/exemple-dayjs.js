import './../node_modules/dayjs/dayjs.min.js';

export const demarrerHorloge = (element) => {
    element.innerHTML = dayjs().format('HH:mm:ss');

    setInterval(() => {
        element.innerHTML = dayjs().format('HH:mm:ss');
    }, 1000);
};
