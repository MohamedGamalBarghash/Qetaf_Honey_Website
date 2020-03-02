function DeleteData () {
  document.cookie = "userdata=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  displayMessage("تم مسح البيانات بنجاح");
}
function ReEnterData () {
  document.cookie = "userdata=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  checkCookie ();
}
function AccessTheShop () {
  document.location.href = "ShopPage.php";
}
function AccessMainPage () {
  document.location.href = "index.html";
}

class Item {
  constructor(ImgURL, Price, Quantity, Name, Discription, ID) {
    this.imgURL = ImgURL;
    this.price = Price;
    this.quantity = Quantity;
    this.name = Name;
    this.discription = Discription;
    this.id = ID;
  }
}

var cloverName = "عسل برسيم 1ك";
var cloverDiscription = "هو مادة غذائية عالية القيمة و وقائية فهو سهل الامتصاص و التمثيل و يحفظ نسبة السكر بالدم لذلك هو مفيد للكبار و الاطفال و مدر للبول و منفث و يريح الجهاز التنفسي و علاج للاسهال";
var Clover = new Item("pics/Clover.png", 50, 0, cloverName, cloverDiscription, 1);

var citrusName = "عسل موالح 1ك";
var citrusDiscription = "به نسبة عالية من الفيتامينات و خاصة فيتامين (سي), و لذلك فهو مقاوم لحالات الأنفلونزا و البرد و الجهاز العصبي و ضغط الدم";
var Citrus = new Item("pics/Citrus.png", 60, 0, citrusName, citrusDiscription, 2);

var blackSeedName = "عسل حبة البركة 1ك";
var blackSeedDiscription = "من أهم مكوناته مادة (اللجنون) و تفيد في حالات الكحة و الإصابات الرئوية و تقوية عضلة القلب و حفظ نسبة السكر بالدم و تنشيط الدورة الدموية";
var BlackSeed = new Item("pics/Black-Seed.png", 50, 0, blackSeedName, blackSeedDiscription, 3);

var morjoramName = "عسل الكراوية 1/2ك";
var morjoramDiscription = "يفيد في حالات الربو و حساسية الصدر و عسر الطمث عند النساء و تخفيف آلام الكبد و مهدئ للأعصاب و علاح لقرحة الجهاز الهضمي";
var Morjoram = new Item("pics/Marjoram.png", 120, 0, morjoramName, morjoramDiscription, 4);

var blackSeedHalfName = "عسل حبة البركة 1/2ك";
var blackSeedHalfDiscription = "من أهم مكوناته مادة (اللجنون) و تفيد في حالات الكحة و الإصابات الرئوية و تقوية عضلة القلب و حفظ نسبة السكر بالدم و تنشيط الدورة الدموية";
var BlackSeedHalf = new Item("pics/Black-Seed_Half.png", 50, 0, blackSeedHalfName, blackSeedHalfDiscription, 5);

var nutsName = "عسل المكسرات 1ك";
var nutsDiscription = "هو مادة غذائية عالية القيمة و وقائية فهو سهل الامتصاص و التمثيل و يحفظ نسبة السكر بالدم لذلك هو مفيد للكبار و الاطفال و مدر للبول و منفث و يريح الجهاز التنفسي و علاج للاسهال";
var Nuts = new Item("pics/Nuts.png", 50, 0, nutsName, nutsDiscription, 6);

var cloverSqueezeName = "عسل الموالح سكويز 1ك";
var cloverSqueezeDiscription = "هو مادة غذائية عالية القيمة و وقائية فهو سهل الامتصاص و التمثيل و يحفظ نسبة السكر بالدم لذلك هو مفيد للكبار و الاطفال و مدر للبول و منفث و يريح الجهاز التنفسي و علاج للاسهال";
var CloverSqueeze = new Item("pics/Clover-Squeeze.png", 50, 0, cloverSqueezeName, cloverSqueezeDiscription, 7);

var mixName = "خلطة عسل للرجال 1ك";
var mixDiscription = "خلطة من مزيج مختلف أنواع العسل و تساعد علي تنسيط الرجال";
var Mix = new Item("pics/Mix.png", 50, 0, mixName, mixDiscription, 8);

CreateACard(Clover);
CreateACard(Citrus);
CreateACard(BlackSeed);
CreateACard(Morjoram);
CreateACard(BlackSeedHalf);
CreateACard(Nuts);
CreateACard(CloverSqueeze);
CreateACard(Mix);

// creating the product cards
function SpawnHoneyCards () {
  CreateACard(Clover);
    CreateACard(Citrus);
    CreateACard(BlackSeed);
    CreateACard(Morjoram);
    CreateACard(BlackSeedHalf);
    CreateACard(Nuts);
    CreateACard(CloverSqueeze);
    CreateACard(Mix);
}

// check what the product type is
function CheckItem (itemObject) {
  let returnedItem;
  if (itemObject == 1) {
    returnedItem = Clover;
  } else if (itemObject == 2) {
    returnedItem = Citrus;
  } else if (itemObject == 3) {
    returnedItem = BlackSeed;
  } else if (itemObject == 4) {
    returnedItem = Morjoram;
  } else if (itemObject == 5) {
    returnedItem = BlackSeedHalf;
  } else if (itemObject == 6) {
    returnedItem = Nuts;
  } else if (itemObject == 7) {
    returnedItem = CloverSqueeze;
  } else if (itemObject == 8) {
    returnedItem = Mix;
  }
  return returnedItem;
}

// the function to create a product card
function CreateACard (theItem) {
  // create the whole card holder which hold everything in the card
  let cardHolder = document.createElement("div");
  cardHolder.className = "card honey";
  cardHolder.setAttribute("onclick", "enableQuickView (this.getAttribute('productID'));");

  cardHolder.setAttribute("productID", theItem.id);

  // create the image holder which holds the product image
  let imgHolder = document.createElement("div");
  imgHolder.className = "product-img";
  imgHolder.setAttribute("style", "background-image: url(" + theItem.imgURL + ");");

  // create the quick view popup effect
  let quickView = document.createElement("div");
  // set it's class name
  quickView.className = "quick-view";

  // create the label of the quick view thing
  let quickViewText = document.createElement("p");
  quickViewText.className = "quick-view-label";
  quickViewText.innerHTML = "التفاصيل";
  // append the items together
  quickView.appendChild(quickViewText);
  imgHolder.appendChild(quickView);

  // create the name holder which holds the name of the product
  let nameHolder = document.createElement("div");
  nameHolder.className = "product-name";
  // create the paragraph element which contains the name of the product
  let theName = document.createElement("p");
  theName.innerHTML = theItem.name;
  theName.setAttribute("style", "margin: 0vw;");
  // append the name paragraph to the name holder
  nameHolder.appendChild(theName);

  // create the price holder which holds the price of the product
  let priceHolder = document.createElement("div");
  priceHolder.className = "product-price";
  // create the paragraph element which contains the price of the product
  let thePrice = document.createElement("p");
  thePrice.innerHTML = (theItem.price + ".00EGY");
  // append the price paragraph to the price holder
  priceHolder.appendChild(thePrice);

  // append each holder element to the main card holder
  cardHolder.appendChild(imgHolder);
  cardHolder.appendChild(nameHolder);
  cardHolder.appendChild(priceHolder);

  // append the whole card to the products classed object in the html code
  document.getElementById("products").appendChild(cardHolder);
}

function HoneyCheckBox (theCheckBox) {
  if (theCheckBox.checked) {
    SpawnHoneyCards ();
  } else {
    while(document.getElementsByClassName("honey").length > 0) {
      document.getElementsByClassName("honey")[0].remove();
    }
  }
}

function CreateAnAddedItem (theItem) {
  let itemHolder = document.createElement("div");
  itemHolder.className = "item-holder";

  itemHolder.setAttribute("productID", theItem.id);

  let quantityHolder = document.createElement("p");
  quantityHolder.className = "item-quantity";
  quantityHolder.innerHTML = ("x" + theItem.quantity);

  let labelHolder = document.createElement("p");
  labelHolder.className = "item-label-holder";
  labelHolder.innerHTML = theItem.name;

  let deleteImageHolder = document.createElement("img");
  deleteImageHolder.className = "item-delete-button";
  deleteImageHolder.setAttribute("src", "pics/back.png");
  deleteImageHolder.setAttribute("onclick", "DeleteItemFromCart (this);");

  itemHolder.appendChild(quantityHolder);
  itemHolder.appendChild(labelHolder);
  itemHolder.appendChild(deleteImageHolder);

  document.getElementById("cart-items").appendChild(itemHolder);
}

var cartViewActive = false;

function enableItemView () {
  if (cartViewActive) {
    document.getElementById("cart-items").setAttribute("style", "display: none;");
    cartViewActive = false;
  } else {
    document.getElementById("cart-items").setAttribute("style", "display: block;");
    cartViewActive = true;
  }
}

var cartItems = [];

function AddItemToCart (productID) {
  let pushedProduct = CheckItem(parseInt(productID));
  let pushedSecondProduct = new Item("", 0, 0, "", "", 0);
  pushedProduct.quantity = parseInt(document.querySelector(".quantity").value);
  pushedSecondProduct = Object.assign(pushedSecondProduct, pushedProduct);
  if (cartItems.length != 0) {
    let add = 0;
    for (var i = 0; i < cartItems.length; i++) {
      if(cartItems[i].id === pushedProduct.id) {
        cartItems[i].quantity += pushedProduct.quantity;
        for (var o = 0; o < document.getElementsByClassName("item-holder").length; o++) {
          if(parseInt(document.getElementsByClassName("item-holder")[o].getAttribute("productID")) === cartItems[i].id) {
            document.getElementsByClassName("item-holder")[o].children[0].innerHTML = ("x" + cartItems[i].quantity);
          }
        }
        add += 1;
      }
    }
    if(add === 0) {
      cartItems.push(pushedSecondProduct);
      CreateAnAddedItem(pushedSecondProduct);
    }
  } else {
    cartItems.push(pushedSecondProduct);
    CreateAnAddedItem(pushedSecondProduct);
  }
  // alert("تمت الإضافة الي العربة, اضغط علي رمز العربة أسفل يمين الشاشة لرؤية محتويات عربتك");
  SetTotal ();
}

function SetTotal () {
    var total = "";
    var totalPrice = 0;
    for (var i = 0; i < cartItems.length; i++) {
        totalPrice += parseInt(cartItems[i].quantity) * parseInt(cartItems[i].price);
    }
    total = totalPrice.toString() + " EGY";
    document.getElementById("sum").innerHTML = total;
    return total;
}

function DeleteItemFromCart (theXPic) {
  for (var i = 0; i < cartItems.length; i++) {
    if(cartItems[i].id === parseInt(theXPic.parentNode.getAttribute("productID"))) {
      cartItems.splice(i, 1);
    }
  }
  theXPic.parentNode.remove();
}

var theQuickView = document.querySelector(".quick-view-window");
var theDarkArea = document.querySelector(".dark-area");
var theSignUpWindow = document.querySelector("#sign-up-window");

function enableQuickView (theProduct) {
  let itemChecked = CheckItem(theProduct);
  document.querySelector("body").style.overflow = "hidden";
  theQuickView.style.display = "block";
  theDarkArea.style.display = "block";
  document.querySelector(".product-name-quick-view").innerHTML = itemChecked.name;
  document.querySelector(".product-price-quick-view").innerHTML = (itemChecked.price + ".00EGY");
  document.querySelector(".product-image-quick-view").setAttribute("src", itemChecked.imgURL);
  document.querySelector(".product-discription").innerHTML = itemChecked.discription;
  document.querySelector(".add-to-the-cart").setAttribute("productID", itemChecked.id);
}
function enableSignUpWindow () {
  document.body.style.overflow = "hidden";
  theSignUpWindow.style.display = "block";
  theDarkArea.style.display = "block";
}
function disableQuickView () {
  document.querySelector("body").style.overflow = "auto";
  theQuickView.style.display = "none";
  theDarkArea.style.display = "none";
  theSignUpWindow.style.display = "none";
  document.getElementById("thank-you-window").style.display = "none";
}

function displayMessage (message) {
    theSignUpWindow.style.display = "none";
    theDarkArea.style.display = "none";
    document.getElementById("thank-you-window").style.display = "block";
    document.getElementById("thank-you-window").children[0].innerHTML = message;
    setTimeout(disableQuickView, 2000);
}

class UserData {
  constructor (Name, Address, PhoneNumber) {
    this.name = Name;
    this.address = Address;
    this.number = PhoneNumber;
  }
}

var currentUserData = new UserData ("", "", "");

function setCookie(cname, cvalue, exdays) {
  var date = new Date();
  date.setTime(date.getTime()+(exdays*24*60*60*1000))
  var expires = "expires="+date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length+1, c.length);
    }
  }
  return "";
}

var userName = "", userAddress = "", userPhone = "";

function checkCookie() {
    var user = getCookie("userdata");
    if (user != "" && user != null) {
        if (Array.isArray(cartItems) && cartItems.length) {
          var splittedData = user.split("~");
          currentUserData.name = splittedData[0];
          currentUserData.address = splittedData[1];
          currentUserData.number = splittedData[2];
          SendDataToServer();
        } else {
            displayMessage("العربة فارغة");
        }
    } else {
      enableSignUpWindow ();
    }
}

function signUpWindow () {
  userName = document.getElementById("name").value;
  userAddress = document.getElementById("address").value;
  userPhone = (document.getElementById("phone").value).toString();
  if(userName != "" && userAddress != "" && userPhone != "") {
    userName = document.getElementById("name").value;
    userAddress = document.getElementById("address").value;
    userPhone = (document.getElementById("phone").value).toString();
    setCookie("userdata", (userName + "~" + userAddress + "~" + userPhone), 356);
    displayMessage("شكرا للتسجيل علي قطاف, يمكنك الآن التسوق");
  } else {
    if (document.getElementById("name").value === "")
      document.getElementById("name").setAttribute("style", "border: 0.2vw solid red;");
    else
      document.getElementById("name").setAttribute("style", "border: 0.2vw solid #FED158;");
    if (document.getElementById("address").value === "")
      document.getElementById("address").setAttribute("style", "border: 0.2vw solid red;");
    else
      document.getElementById("address").setAttribute("style", "border: 0.2vw solid #FED158;");
    if (document.getElementById("phone").value === "")
      document.getElementById("phone").setAttribute("style", "border: 0.2vw solid red;");
    else
      document.getElementById("phone").setAttribute("style", "border: 0.2vw solid #FED158;");
  }
}



function SendDataToServer () {
  var delivery = "";

  for (var i = 0; i < cartItems.length; i++) {
    delivery += "  x" + cartItems[i].quantity + "   " + cartItems[i].name;
  }

  var str = currentUserData.name + ";" + currentUserData.address + ";" + currentUserData.number + ";" + delivery + ";" + "total price: " + document.getElementById("sum").innerHTML;

  console.log(str);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "ShopPageSend.php?q=" + str, true);

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       displayMessage("شكرا لتسوقكم علي قطاف");
    }
  };
  xmlhttp.send();
}
