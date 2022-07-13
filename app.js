const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for (let i = 0; i<sectBtn.length; i++){ // set an event listener to every buttons
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.classList.add('active-btn'); // the space int the beginning of the new class name is important!!
        })
    }

    //section active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id){
            //remove selected from the other button
            //sectBtns.forEach((btn) =>{
            //    btn.classList.remove('active');
            //})
            //e.target.classList.add('active');

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Togle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('dark-mode');
    })
}

PageTransitions();