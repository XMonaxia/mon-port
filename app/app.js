const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
});

// Contact Me  
// Contact Me  
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtns = document.querySelectorAll('.btn-2.contact-me');

contactMeBtns.forEach(contactMeBtn => {
    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');

                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);

            }, (index + 1) * 200 + 100);
        });
    };
});


// Create reverse index  
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// back profile 
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const coverLeft = document.querySelector('.book-page.page-left');

// Opening animation right

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)


// Opening animation Left  
setTimeout(() => {
    coverLeft.style.zIndex = 20;
}, 3200)

// Opening animation right all

  pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 2100)
  })
    
//   Form  
 const scriptURL =
   "https://script.google.com/macros/s/AKfycbxwHy2eYOvPlCbWP35YKAOcBErqB5_bVc28D_t5BCLE81lAMTRD-blsreW5zSE9XM6XXw/exec";
 const form = document.forms["monaxia"];
 const btnKirim = document.querySelector(".btn-kirim");
 const btnLoading = document.querySelector(".btn-loading");
 const alert = document.querySelector(".alert");
const btnClose = document.querySelector('.btn-close');

 form.addEventListener("submit", (e) => {
   e.preventDefault();
   // Ketika Tombol Di submit
   btnLoading.classList.toggle('d-none');
   btnKirim.classList.toggle('d-none');
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
       .then((response) => {
           console.log("Success!", response);
           btnLoading.classList.toggle("d-none");
           btnKirim.classList.toggle("d-none");
           alert.classList.toggle("d-none");
           form.reset('');
       })
     .catch((error) => console.error("Error!", error.message));
 });


//  Btn Close  
btnClose.addEventListener('click', () => {
    alert.classList.toggle("d-none");
})