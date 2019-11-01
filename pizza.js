var amountSmall = prompt("Hoeveel small pizza's wilt u?");
var amountMedium = prompt("Hoeveel medium pizza's wilt u?");
var amountLarge = prompt("Hoeveel large pizza's wilt u?");

const priceSmall = 3.50
const priceMedium = 5.50
const priceLarge = 7.50

var total1S = 3.50*amountSmall
var total1M = 5.50*amountMedium
var total1L = 7.50*amountLarge

alert("De aantal pizza's die je hebt besteld zijn");
alert(+amountSmall+ " Small pizza's");
alert(+amountMedium+ " Medium pizza's");
alert(+amountLarge+ " Large pizza's");

alert("Uw totale prijs voor de small pizza's is " +priceSmall*amountSmall);
alert("Uw totale prijs voor de medium pizza's is " +priceMedium*amountMedium);
alert("Uw totale prijs voor de large pizza's is " +priceLarge*amountLarge);

var totalep = total1S + total1M + total1L;

alert("Uw totale kosten voor alle pizza's zijn " +totalep);