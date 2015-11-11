var value = 42;

if(value >= 53){
	value += 42;
}else{
	value -= 13;
}

value += "11";

var array=[];

for(var i=0 ; i< value.length ; i++){
	array.push(value.charAt(i));
};

array.pop();

array.shift();

var backwardsValue = "";


for(var c = array.length - 1; c > -1; c--){
	backwardsValue += array[c];	
};

value = parseInt(value, 10);

backwardsValue = parseInt(backwardsValue, 10);
value = value + backwardsValue;

if (value < 60){
	value = 14;
}
else if (value === 2930){
	value = 27;
}
else {
	value = 2;
}

var count = 10;
while (count > 0){
	value++;
	count--;
}


function happy(val){
	val = val.toString();
	if (val.length > 1){
		val = val.slice(1, val.length);
	}
	return val;
}

value = happy(value);

console.log(value);