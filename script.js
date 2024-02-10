const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
}); 


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const observerTwo = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showTwo');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
}); 


const hiddenElementsTwo = document.querySelectorAll('.logo');
hiddenElementsTwo.forEach((el) => observerTwo.observe(el));

