import { demarrerHorloge } from './exemple-dayjs.js';
import { creerCalendrierVueMois } from './exemple-fullcalendar.js';

demarrerHorloge(document.getElementById('temps'));

const calendrierVueMois = creerCalendrierVueMois(
    document.getElementById('calendrier')
);
console.log(calendrierVueMois);
