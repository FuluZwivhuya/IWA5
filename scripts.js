const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING ="Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let customers = 1;
let shipping;
let currency;
let locationA = "RSA";
console.log(shipping, currency, locationA);

if ((shipping = locationA)) {
  shipping === 400 && currency === "R";
}
console.log("shipping");

let locationB = "NAM";
if ((locationB = "NAM")) {
  shipping === 600 && currency === "$";
} else {
  shipping === 800 && currency === "$";
}
console.log("shipping");

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
console.log(shoes + toys); //test


let calcShipping = null;
 if (shoes + batteries + pens + shirts > 1000 && currency === 'R'){ shipping = 0 || calcShipping};
	if (locationB = 'NAM' && customers < 2) {shipping = 0 || calcShipping};
			if (locationA = 'RSA')
		    {shipping = 0 || calcShipping};
console.log(calcShipping)

shipping = 0;
if ((shipping === 0 && customers !== 1)) 
  {console.log(FREE_WARNING)}

let locationC = "NK";
if ((locationC === "NK")) 
{console.warn(BANNED_WARNING)}

currency = 'R';
{console.log('price',':',currency,shoes + batteries + pens + shirts + shipping)};