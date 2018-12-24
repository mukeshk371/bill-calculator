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
	price.innerHTML = "&#8377;" + details.price;

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
var displayCart = document.getElementById("cart");

function addToCart(elem) {
	
	var itemDetail = {
		"name" : elem.parentNode.childNodes[0].innerHTML,
		"quantity" : elem.parentNode.childNodes[1].innerHTML,
		"price" : elem.parentNode.childNodes[3].innerHTML,
	}
	addedItems.push(itemDetail);
	console.log(addedItems);
}

