/* -----For Product gallery-------*/

const imgSet = document.querySelector('#img-set')
const productGallery = document.querySelector('#product-detail')




//setting function setImage
const setImage = function(event){
    const whichOneImage =event.target

  if(whichOneImage.matches('.product-view'))  {

    let imgSrc = whichOneImage.getAttribute('src')
    let imgAlt = whichOneImage.getAttribute('alt')

    //updating bigger image attributes

    imgSet.setAttribute('src', imgSrc)
    imgSet.setAttribute('alt', imgAlt)

  }

}

//Adding listener to product gallery
productGallery.addEventListener('click', setImage)







/*----------- TOGGLE MENU---------- */

//-------Toggle dropdwon TOP-BAR (LARGEST VIEW PORT)

var menu_link = document.querySelectorAll(".menu_link");

menu_link.forEach(function(list_item){
    list_item.addEventListener("click", function(){

        menu_link.forEach(function(list_item){
            list_item.classList.remove("active");
        })
        list_item.classList.add("active");
    })
})


//--------Toggle dropdwon TOP-BAR (SMALLEST VIEW PORT)

function myFunction() {
    var menu = document.getElementById("myLinks");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }





  

/* -----POPUP CART FORM----- */

function openCart() {
    document.getElementById("popup_form").style.display = "block";
  }
  
  function closeCart() {
    document.getElementById("popup_form").style.display = "none";
  }



