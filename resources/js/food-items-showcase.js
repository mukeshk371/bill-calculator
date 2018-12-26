function createList(details) {
	var productName = document.createElement("H4");
	productName.innerHTML = details.name;

	var image = document.createElement("IMG");
	image.setAttribute("src", details.pic);

	var figure = document.createElement("FIGURE");
	figure.classList.add("item-photo");
	figure.appendChild(image);

	var quantity = document.createElement("H3");
	quantity.innerHTML = details.quantity;

	var price = document.createElement("H3");
	price.innerHTML = details.price;

	var addButton = document.createElement("BUTTON");
	addButton.classList.add("add-btn");
	addButton.setAttribute("onclick", "addToCart(this)");
	addButton.innerHTML = "Add to Cart";

	var list = document.createElement("LI");
	list.appendChild(productName);
	list.appendChild(quantity);
	list.appendChild(figure);
	list.appendChild(price);
	list.appendChild(addButton);

	return list;
}


function displayShowcase() {
	var showcaseDiv = document.getElementById("showcase");

	while(showcaseDiv.firstChild) {
		showcaseDiv.removeChild(showcaseDiv.firstChild);
	}

	for (var i = 0; i < foodItemsList.length; i++) {
		var li = createList(foodItemsList[i]);
		showcaseDiv.appendChild(li);
	}
}


var addedItems = [];

function addToCart(elem) {
	var itemDetail = {
		"name" : elem.parentNode.childNodes[0].innerHTML,
		"quantity" : 1,
		"price" : elem.parentNode.childNodes[3].innerHTML,
	}
	addedItems.push(itemDetail);
	console.log(itemDetail);
	addItemToCart(itemDetail);
	increaseNumber();
}


function addItemToCart(item){
	var cartDiv = document.getElementById("cart");
	
	var foodItem = document.createElement("TD");
	foodItem.innerHTML = item.name;

	var foodItemQuantity = document.createElement("TD");
	foodItemQuantity.classList.add("quantity");
	foodItemQuantity.innerHTML = item.quantity;

	var foodItemPrice = document.createElement("TD");
	foodItemPrice.classList.add("price");
	foodItemPrice.innerHTML = item.price;

	var content = document.createElement("TR");
	content.appendChild(foodItem);
	content.appendChild(foodItemQuantity);
	content.appendChild(foodItemPrice);

	cartDiv.appendChild(content);

    var total = 0;
    
    for(var i = 0; i < addedItems.length; i++) {
    	var price = parseInt(addedItems[i].price);
    	total += price; 
    }

    var gst = total * 18/100;
    var final = total + gst;
    
	var totalPrice = document.getElementById("total-price");
	totalPrice.innerHTML = "&#8377;" + total;

	var gstAmount = document.getElementById("gst");
	gstAmount.innerHTML = "&#8377;" + gst;

	var finalPrice = document.getElementById("final-price");
	finalPrice.innerHTML = "&#8377;" + final;
}


var n = 0;
function increaseNumber() {
	n += 1;
	document.getElementById("number").innerHTML = n;
	zeroNumber(); 
}


function zeroNumber() {
	if (document.getElementById("number").innerHTML == 0) {
		document.getElementById("box").style.display = "none";
	}
	else {
		document.getElementById("box").style.display = "block";
	}
}