// ---------- CONFIG ----------

const BUSINESS_PHONE = "918787557480";


// ---------- PRODUCTS ----------

const products = [

{
name: "Feet, Wings & Neck",
price: 300,
unit: "kg",
img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600"
},

{
name: "Liver",
price: 500,
unit: "kg",
img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600"
},

{
name: "Kuroiler Meat",
price: 500,
unit: "kg",
img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600"
}

];

let currentProduct = "";
let currentPrice = 0;
let currentUnit = "";


// ---------- NAVIGATION ----------

function showPage(id)
{

document.querySelectorAll(".page")
.forEach(page => page.classList.remove("active"));

document.getElementById(id)
.classList.add("active");

}


// ---------- LOAD PRODUCTS ----------

function loadProducts()
{

let html = "";

products.forEach(product =>
{

html += `
<div class="card">

<img src="${product.img}">

<h3>${product.name}</h3>

<p>
Price: ₹${product.price} per ${product.unit}
</p>

<button onclick="openDetail('${product.name}', ${product.price}, '${product.unit}', '${product.img}')">
Order Now
</button>

</div>
`;

});

document.getElementById("productList").innerHTML = html;

}


// ---------- OPEN DETAIL ----------

function openDetail(name, price, unit, img)
{

currentProduct = name;
currentPrice = price;
currentUnit = unit;

document.getElementById("dName").innerText = name;

document.getElementById("dPrice").innerText =
"Price ₹" + price + " per " + unit;

document.getElementById("dImg").src = img;

showPage("detail");

}


// ---------- PLACE ORDER ----------

function placeOrder()
{

let name =
document.getElementById("custName").value;

let phone =
document.getElementById("custPhone").value;

let qty =
parseFloat(document.getElementById("qty").value);

let notes =
document.getElementById("notes").value;


if (!name || !phone || !qty)
{
alert("Please enter name, phone and quantity");
return;
}


// ---------- CALCULATE TOTAL ----------

let total = qty * currentPrice;


// ---------- CREATE ORDER OBJECT ----------

let order =
{

customerName: name,

customerPhone: phone,

product: currentProduct,

quantity: qty,

unit: currentUnit,

price: currentPrice,

total: total,

notes: notes,

time: new Date().toLocaleString()

};


// ---------- SAVE ORDER ----------

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);


// ---------- WHATSAPP MESSAGE ----------

let message =
`DEMIAN KUROILER ORDER

Customer Name: ${name}

Phone Number: ${phone}

Product: ${currentProduct}

Quantity: ${qty} ${currentUnit}

Price per ${currentUnit}: ₹${currentPrice}

Total Amount: ₹${total}

Notes: ${notes}

Thank you for ordering from Demian Kuroiler App
`;


// ---------- OPEN WHATSAPP ----------

window.open(
`https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(message)}`
);


// ---------- RESET FORM ----------

document.getElementById("custName").value = "";

document.getElementById("custPhone").value = "";

document.getElementById("qty").value = 1;

document.getElementById("notes").value = "";


// ---------- UPDATE UI ----------

showToast();

loadOrders();

}


// ---------- LOAD ORDERS ----------

function loadOrders()
{

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

let html = "";

let totalSales = 0;

orders.forEach((order, index) =>
{

totalSales += order.total;

html += `
<li>

${index + 1}.
${order.customerName}

- ${order.product}

- ${order.quantity} ${order.unit}

- ₹${order.total}

</li>
`;

});


document.getElementById("orderList").innerHTML = html;

let totalBox =
document.getElementById("totalSales");

if (totalBox)
{

totalBox.innerText = totalSales;

}

}


// ---------- CLEAR ORDERS ----------

function clearOrders()
{

if(confirm("Clear all orders?"))
{

localStorage.removeItem("orders");

loadOrders();

}

}


// ---------- TOAST ----------

function showToast()
{

let toast =
document.getElementById("toast");

toast.style.visibility = "visible";

setTimeout(function()
{

toast.style.visibility = "hidden";

}, 2000);

}


// ---------- CONTACT WHATSAPP ----------

function contactWhatsApp()
{

window.open(
`https://wa.me/${BUSINESS_PHONE}`
);

}


// ---------- INIT ----------

window.onload = function()
{

loadProducts();

loadOrders();

};