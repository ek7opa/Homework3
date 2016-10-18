const diamond = function(n) {

if(n%2 === 0) {  // check if even

n = n + 1;
}
	let i = 0;
	let q = 1;
	let s = (n/2)-0.5;
	let space = '';
	let stars = "*"
	while(q<=(n/2)+0.5){ //code for top half
	for(s;s>0;s--)
	{
		space = space + " ";
	}
	console.log(space + stars);
		stars = stars +"**"
		q++;
		s = ((n/2)+0.5)-q;
		space = "";
	}
	s=1;
	q=0;
	stars = "*";
	while(i<(n/2)-0.5){ //code for bottom half
		for(s;s>0;s--)
	{
		space = space + " ";
	}
		q=(n/2)-1.5-i;
		for(q;q>0;q--)
		{
			stars = stars +"**"
		}
		console.log(space+stars);
		
		i=i+1;
		s=i+1;
		space = "";
		stars = "*";


	}
};
diamond(49);