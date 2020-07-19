const services = document.querySelectorAll('.service');
const servicesContentBox = document.querySelectorAll('.serviceContentBox');
const buttomsTeam = document.querySelectorAll('.btnTeam');
const ourTeamsContents = document.querySelectorAll('.ourTeamContent');


services.forEach((service, content) => {

    service.addEventListener('click', () => {

        services.forEach((service) => {
            service.classList.remove('serviceSelected');
        });

        service.classList.add('serviceSelected');

        servicesContentBox.forEach((serviceContentBox) => {
            serviceContentBox.classList.remove('visible');
            serviceContentBox.classList.remove('active');
        });

        servicesContentBox[content].classList.add('active');
        setTimeout(()=>{
            servicesContentBox[content].classList.add('visible');
        }, 50);

    });
});


buttomsTeam.forEach((buttomTeam, index) => {

    buttomTeam.addEventListener('click', (e) => {
        e.preventDefault();

        buttomsTeam.forEach((buttomTeam) => {
            buttomTeam.classList.remove('btnTeamSelected');
        });

        buttomTeam.classList.add('btnTeamSelected');

        ourTeamsContents.forEach((ourTeamContent) => {
            ourTeamContent.classList.remove('visible');
            ourTeamContent.classList.remove('activeFlex');
        });
        
        ourTeamsContents[index].classList.add('activeFlex');
        setTimeout(()=>{
            ourTeamsContents[index].classList.add('visible');
        }, 50);
    });
});


