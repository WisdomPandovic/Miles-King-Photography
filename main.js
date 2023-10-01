const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper")

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
       (portfolioItem.childNodes[1].classList);
       portfolioItem.childNodes[1].classList.add('img-darken');
    })


    portfolioItem.addEventListener('mouseout', () => {
        (portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.remove('img-darken');
     })

})


// set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


