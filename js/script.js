const services = document.querySelectorAll('.service');
const servicesContentBox = document.querySelectorAll('.serviceContentBox');
const buttomsTeam = document.querySelectorAll('.btnTeam');
const ourTeamsContents = document.querySelectorAll('.ourTeamContent');


services.forEach((service, content) => {

    service.addEventListener('mouseover', () => {

        services.forEach((service) => {
            service.classList.remove('serviceSelected');
        });

        service.classList.add('serviceSelected');

        servicesContentBox.forEach((serviceContentBox) => {
            serviceContentBox.classList.remove('active');
        });

        servicesContentBox[content].classList.add('active');
    });
});


buttomsTeam.forEach((buttomTeam, index) => {

    buttomTeam.addEventListener('mouseover', () => {

        buttomsTeam.forEach((buttomTeam) => {
            buttomTeam.classList.remove('btnTeamSelected');
        });

        buttomTeam.classList.add('btnTeamSelected');

        ourTeamsContents.forEach((ourTeamContent) => {
            ourTeamContent.classList.remove('activeFlex');
        });

        ourTeamsContents[index].classList.add('activeFlex');
    });
});


