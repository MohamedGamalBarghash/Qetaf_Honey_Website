function AccessTheShop () {
  document.location.href = "ShopPage.html";
}
function AccessMainPage () {
  document.location.href = "index.html";
}

if(getCookie("usedcode") != null && getCookie("usedcode") != "") {
  CreateACard("pics/Clover.png", "50.00EGY", "عسل البرسيم");
  CreateACard("pics/Citrus.png", "60.00EGY", "عسل الموالح");
  CreateACard("pics/Black-Seed.png", "50.00EGY", "عسل حبة البركة");
  CreateACard("pics/Clover-Squeeze.png", "50.00EGY", "عسل البرسيم سكويز");
} else {
  CreateACard("pics/Clover.png", "55.00EGY", "عسل البرسيم");
  CreateACard("pics/Citrus.png", "65.00EGY", "عسل الموالح");
  CreateACard("pics/Black-Seed.png", "55.00EGY", "عسل حبة البركة");
  CreateACard("pics/Clover-Squeeze.png", "55.00EGY", "عسل البرسيم سكويز");
}


// the function to create a product card
function CreateACard (imageURL, price, name) {
  // create the whole card holder which hold everything in the card
  var cardHolder = document.createElement("div");
  cardHolder.className = "card";

  // create the image holder which holds the product image
  var imgHolder = document.createElement("div");
  imgHolder.className = "product-img";
  // create the image element that will be held by the image holder above an add it's properties
  var theImage = document.createElement("img");
  theImage.setAttribute("style", "width:100%;height:100%;");
  theImage.setAttribute("src", imageURL);
  // append the image to the image imgHolder
  imgHolder.appendChild(theImage);

  // create the name holder which holds the name of the product
  var nameHolder = document.createElement("div");
  nameHolder.className = "product-name";
  // create the paragraph element which contains the name of the product
  var theName = document.createElement("p");
  theName.innerHTML = name;
  // append the name paragraph to the name holder
  nameHolder.appendChild(theName);

  // create the price holder which holds the price of the product
  var priceHolder = document.createElement("div");
  priceHolder.className = "product-price";
  // create the paragraph element which contains the price of the product
  var thePrice = document.createElement("p");
  thePrice.innerHTML = price;
  // append the price paragraph to the price holder
  priceHolder.appendChild(thePrice);

  // append each holder element to the main card holder
  cardHolder.appendChild(imgHolder);
  cardHolder.appendChild(nameHolder);
  cardHolder.appendChild(priceHolder);

  // append the whole card to the products classed object in the html code
  document.getElementById("products").appendChild(cardHolder);
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) 
  {
    var c = ca[i];
    while (c.charAt(0) == ' ') 
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) 
    {
      return c.substring(name.length+1, c.length);
    }
  }
  return "";
}