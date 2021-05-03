
//-- STORING PRODUCTS INTO ARRAY
const myProducts =[

    {
        title:'Pochette',
        price:479.85,
        bagImage:'3.jpg',
        bagName:'Pochette'
    },
    
    {
        title:'Passy',
        price:235.50,
        bagImage:'15.jpg',
        bagName:'Passy'
    },

    {
        title:'mini-tote',
        price:200.00,
        bagImage:'41.jpg',
        bagName:'Mini-Tote'
    },

    {
        title:'Tote',
        price:350.00,
        bagImage:'29.jpg',
        bagName:'Tote'
    },

    {
        title:'Mini Douphine',
        price:250.00,
        bagImage:'50.jpg',
        bagName:'Mini Douphine'
    },

    {
        title:'Vanity',
        price:455.00,
        bagImage:'16.jpg',
        bagName:'Vanity'
    },

    {
        title:'Palm Springs',
        price:125.67,
        bagImage:'8.jpg',
        bagName:'Palm Springs'
    },

    {
        title:'Graceful',
        price:344.50,
        bagImage:'4.jpg',
        bagName:'Graceful'
    },

    {
        title:'Carry It',
        price:340.00,
        bagImage:'40.jpg',
        bagName:'Carry It'
    },

    {
        title:'Pithu',
        price:150.00,
        bagImage:'55.jpg',
        bagName:'Pithu'
    },

    {
        title:'Savage Pink',
        price:425.50,
        bagImage:'56.jpg',
        bagName:'Savage Pink'
    },

    {
        title:'Clutch',
        price:230.00,
        bagImage:'58.jpg',
        bagName:'Clutch'
    }

];


//----REFERENCING PRODUCTS THROUGH JS

const productTable = document.querySelector('.products-body')


    myProducts.forEach((pro)=> {

        const products = document.createElement('article')
    
        products.classList.add('pro')
       products.innerHTML=
       `<article class="product">
       <a href="product.html" target="_blank"><img src="/img/products/${pro.bagImage}" alt="${pro.title}" class="product-img"></a>  
         <div class="hover-text">quick view</div>
         <img src="/img/svgs/favourite.svg" alt="fav" class="fav-icon">
         
         <h4>${pro.bagName}    
             <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span>
             <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span>
             <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span>
             <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span></h4>
     <data value="479.85" class="price">$${pro.price}</data><br/>
      <label class="container2">
         <input type="checkbox">
         <span class="check2"></span>
       </label>
       <label class="container3">
       <input type="checkbox">
       <span class="check3"></span>
       </label>
        </article>`
         
        productTable.appendChild(products);
    
         
    
    });

   


//----SEARCH FILTER FUNCTION----

const filterName = document.getElementById('filterName');


const setProFilter= function(myProducts){

    productTable.innerHTML = ''

    myProducts.forEach((pro) =>{

        let item = document.createElement('article');

        item.classList.add('pro');

        item.innerHTML =`<article class="product">
        <a href="product.html" target="_blank"><img src="/img/products/${pro.bagImage}" alt="${pro.title}" class="product-img"></a>  
          <div class="hover-text">quick view</div>
          <img src="/img/svgs/favourite.svg" alt="fav" class="fav-icon">
          
          <h4>${pro.bagName}    
              <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span>
              <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span>
              <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span>
              <span><img src="/img/svgs/star.svg" alt="ratings" class="rating-set"></span></h4>
      <data value="479.85" class="price">$${pro.price}</data><br/>
       <label class="container2">
          <input type="checkbox">
          <span class="check2"></span>
        </label>
        <label class="container3">
        <input type="checkbox">
        <span class="check3"></span>
        </label>
         </article>`
          
         productTable.appendChild(item);
     
    });

}

filterName.addEventListener('input', function(event){
    const query = event.target.value.toUpperCase();
   
   
       const filteredBag=  myProducts.filter(function(pro){
           let bag= pro.bagName.toUpperCase()
   
           if(bag.includes(query)){
               return true
           }
           else{
               return false
           }
       });
       
       setProFilter(filteredBag);
   
   
    
   });
























