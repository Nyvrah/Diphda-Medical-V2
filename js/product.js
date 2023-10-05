const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get('type');

function setProduct() {
    document.getElementById("product-name").innerHTML = productName;
}

$(document).ready(function(){
  $('input[type=radio]').on('change',function(){
    document.getElementById("product-img").src = "./assets/products/product_imgs/test/" + this.value + ".jpg";
  });
});