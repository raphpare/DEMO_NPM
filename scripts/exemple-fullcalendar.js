export const creerCalendrierVueMois = (refCalendier) => {
    const calendrierVueMois = new FullCalendar.Calendar(refCalendier, {
        initialView: 'dayGridMonth',
    });
    calendrierVueMois.render();
    return calendrierVueMois;
};
