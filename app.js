const sections = document.querySelectorAll('.section');
const secButtons = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const languages = document.querySelectorAll('.lang');
const langBtn = document.querySelectorAll('.lang-btn');
const allLanguages = document.querySelector('.lang-controls');
const formSubmit = document.querySelector('.submit-btn');
const fullName = document.getElementById("name");
const company = document.getElementById("company");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");



// Page navigation
function PageNavigation() {
    //Button click active class
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //Section active class management
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //Remove active state
            secButtons.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Hide inactive sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    }) 
    
}


PageNavigation();


// Language selection & translation
function LanguageSelection() {
    //Button click active class
    for(let i = 0; i < langBtn.length; i++) {
        langBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-lang');
            currentBtn[0].className = currentBtn[0].className.replace('active-lang','');
            this.className += ' active-lang';

        })
    }

    //Language selection active class management
    allLanguages.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //Remove active state
            langBtn.forEach((btn) => {
                btn.classList.remove('active-lang')
            })
            e.target.classList.add('active-lang')

            //Hide inactive sections
            languages.forEach((language) => {
                language.classList.remove('active-lang')
            })

            const element = document.getElementById(id);
            element.classList.add('active-lang');
        }

        let activeLang = document.querySelector('.active-lang');
        let selectedLang = document.querySelector('.active-lang').id;
        let name = document.querySelector('.name');
        let name2 = document.querySelector('.name-2');
        let homeDesc = document.querySelector('.home-desc');
        let linkedinBtn = document.querySelectorAll('.linkedin-btn');
        let pageTitle1 = document.querySelector('.page-title1');
        let aboutMe = document.querySelector('.about-me');
        let aboutDesc = document.querySelector('.about-desc');
        let largeText = document.querySelectorAll('.large-text')[2];
        let smallText1 = document.querySelector('.small-text-1');
        let smallText2 = document.querySelector('.small-text-2');
        let smallText3 = document.querySelector('.small-text-3');
        let smallText4 = document.querySelector('.small-text-4');
        let statTitle = document.querySelector('.stat-title');
        let timelineTitle = document.querySelector('.timeline-title');
        let xpTitle1 = document.querySelector('.xp-title-1');
        let xpDesc1 = document.querySelector('.xp-desc-1');
        let xpTitle2 = document.querySelector('.xp-title-2');
        let xpDesc2 = document.querySelector('.xp-desc-2');
        let xpTitle3 = document.querySelector('.xp-title-3');
        let xpDesc3 = document.querySelector('.xp-desc-3');
        let xpTitle4 = document.querySelector('.xp-title-4');
        let xpDesc4 = document.querySelector('.xp-desc-4');
        let xpTitle5 = document.querySelector('.xp-title-5');
        let xpDesc5 = document.querySelector('.xp-desc-5');
        let xpTitle6 = document.querySelector('.xp-title-6');
        let xpDesc6 = document.querySelector('.xp-desc-6');
        let xpTitle7 = document.querySelector('.xp-title-7');
        let xpDesc7 = document.querySelector('.xp-desc-7');
        let xpTitle8 = document.querySelector('.xp-title-8');
        let xpDesc8 = document.querySelector('.xp-desc-8');
        let xpTitle9 = document.querySelector('.xp-title-9');
        let xpDesc9 = document.querySelector('.xp-desc-9');
        let xpTitle10 = document.querySelector('.xp-title-10');
        let xpDesc10 = document.querySelector('.xp-desc-10');
        let portfolioPage = document.querySelector('.portfolio-page');
        let portfolioText = document.querySelector('.portfolio-text');
        let projectSource = document.querySelectorAll('.project-source');
        let contactPage = document.querySelector('.contact-page');
        let contactTitle = document.querySelector('.contact-title');
        let contactDesc = document.querySelector('.contact-desc');
        let location = document.querySelector('.location');
        let location2 = document.querySelector('.location-2');
        let languages = document.querySelector('.languages');
        let languages2 = document.querySelector('.languages-2');
        let education = document.querySelector('.education');
        let education2 = document.querySelector('.education-2');
        let linkedinContact = document.querySelector('.linkedin-contact');
        let githubContact = document.querySelector('.github-contact');


        fetch('./lang.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.fr.name);

                // Iterate over and change elements with collection 
                for (let i=0 ; i < linkedinBtn.length ; i++) {           
                    linkedinBtn[i].innerText = data[selectedLang].linkedin_btn;
                }

                for (let i=0 ; i< projectSource.length ; i++) {
                    projectSource[i].innerText = data[selectedLang].project_source;
                }

                //if(selectedLang === "fr") {
                name.innerHTML = data[selectedLang].name;
                name2.textContent = data[selectedLang].name_2;
                homeDesc.textContent = data[selectedLang].home_desc;
                pageTitle1.innerHTML = data[selectedLang].page_title1;
                aboutMe.textContent = data[selectedLang].about_me;
                aboutDesc.textContent = data[selectedLang].about_desc;
                largeText.innerHTML = data[selectedLang].large_text;
                smallText1.textContent = data[selectedLang].small_text_1;
                smallText2.textContent = data[selectedLang].small_text_2;
                smallText3.textContent = data[selectedLang].small_text_3;
                smallText4.textContent = data[selectedLang].small_text_4;
                statTitle.textContent = data[selectedLang].stat_title;
                timelineTitle.textContent = data[selectedLang].timeline_title;
                xpTitle1.innerHTML = data[selectedLang].xp_title_1;
                xpDesc1.innerHTML = data[selectedLang].xp_desc_1;
                xpTitle2.innerHTML = data[selectedLang].xp_title_2;
                xpDesc2.innerHTML = data[selectedLang].xp_desc_2;
                xpTitle3.innerHTML = data[selectedLang].xp_title_3;
                xpDesc3.innerHTML = data[selectedLang].xp_desc_3;
                xpTitle4.innerHTML = data[selectedLang].xp_title_4;
                xpDesc4.innerHTML = data[selectedLang].xp_desc_4;
                xpTitle5.innerHTML = data[selectedLang].xp_title_5;
                xpDesc5.innerHTML = data[selectedLang].xp_desc_5;
                xpTitle6.innerHTML = data[selectedLang].xp_title_6;
                xpDesc6.innerHTML = data[selectedLang].xp_desc_6;
                xpTitle7.innerHTML = data[selectedLang].xp_title_7;
                xpDesc7.innerHTML = data[selectedLang].xp_desc_7;
                xpTitle8.innerHTML = data[selectedLang].xp_title_8;
                xpDesc8.innerHTML = data[selectedLang].xp_desc_8;
                xpTitle9.innerHTML = data[selectedLang].xp_title_9;
                xpDesc9.innerHTML = data[selectedLang].xp_desc_9;
                xpTitle10.innerHTML = data[selectedLang].xp_title_10;
                xpDesc10.innerHTML = data[selectedLang].xp_desc_10;
                portfolioPage.innerHTML = data[selectedLang].portfolio_page;
                portfolioText.innerHTML = data[selectedLang].portfolio_text;
                contactPage.innerHTML = data[selectedLang].contact_page;
                contactTitle.textContent = data[selectedLang].contact_title;
                contactDesc.textContent = data[selectedLang].contact_desc;
                location.textContent = data[selectedLang].location;
                location2.textContent = data[selectedLang].location_2;
                languages.textContent = data[selectedLang].languages;
                languages2.textContent = data[selectedLang].languages_2;
                education.textContent = data[selectedLang].education;
                education2.textContent = data[selectedLang].education_2;
                linkedinContact.textContent = data[selectedLang].linkedin_contact;
                githubContact.textContent = data[selectedLang].github_contact;
                /*} else if(selectedLang === "en") {
                    name.HTMLContent = data[selectedLang].name;
                    name2.textContent = data[selectedLang].name_2;
                    console.log("English language chosen");
                } else {
                    console.log("Undefined");
                }*/
            })
    }) 

    


}

LanguageSelection();

/*
// Page translation
function PageTranslation() {
    fetch('./lang.json')
        .then(res => res.json())
        .then(data => {
            //console.log(data);
        })

    // Get page elements
    const selLang = LanguageSelection();
    const hompageTitle = document.querySelector('.name')
    const homepageDesc = document.querySelector('.name-2')

    console.log(selLang)

    
}
PageTranslation();
*/