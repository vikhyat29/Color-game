//let document=require('./views/index.ejs');
let numsq=6;
let colors=[];
let squares=document.querySelectorAll(".square");
let colordisp=document.getElementById("coldisp");
let picked;
let msg=document.querySelector("#message");
let flag=false;
let reset=document.querySelector("div button");
let modes=document.querySelectorAll(".mode");
//let ebt=document.querySelector("#easy");
//let hbt=document.querySelector("#hard");
init();
function init()
{
	for(var i=0;i<modes.length;i++)
	{
		modes[i].addEventListener("click",function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numsq=3:numsq=6;
			resetf();
		});
	}
	for(let i=0;i<squares.length;i++)
	{
	//console.log("Hello");
		squares[i].addEventListener("click",function(){
			if(flag===false){
				if(colors[i]===picked)
				{
					msg.textContent="Correct";
					for(let i=0;i<colors.length;i++)
					{
						squares[i].style.backgroundColor=picked;
					}
					document.querySelector("h1").style.backgroundColor=picked;
					reset.textContent="Play Again?";
					flag=true;
				}
				else{
					this.style.background="#232323";
					msg.textContent="Try Again";
				}
			}
		});
	}
	resetf();
}


/*ebt.addEventListener("click",function(){
	numsq=3;
	colors=genRanCol(numsq);
	ebt.classList.add("selected");
	hbt.classList.remove("selected");
	picked=pickColor();
	msg.textContent="";
	colordisp.textContent=picked;
	reset.textContent="New Colors";
	for(let i=0;i<colors.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	for(let i=colors.length;i<squares.length;i++)
	{
		squares[i].style.display="none";	
	}
	document.querySelector("h1").style.backgroundColor="steelblue";
	flag=false;
});
hbt.addEventListener("click",function(){
	numsq=6;
	colors=genRanCol(numsq);
	ebt.classList.remove("selected");
	hbt.classList.add("selected");
	picked=pickColor();
	reset.textContent="New Colors";
	msg.textContent="";
	colordisp.textContent=picked;
	for(let i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	document.querySelector("h1").style.backgroundColor="steelblue";
	flag=false;
});*/
reset.addEventListener("click",function(){
	resetf();
});

function pickColor()
{
	let rand=Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function genRanCol(num)
{
	
	let colret=[];
	for(var i=0;i<num;i++){
		let r=Math.floor(Math.random()*256);
		let b=Math.floor(Math.random()*256);
		let g=Math.floor(Math.random()*256);
		 colret.push("rgb("+r+", "+b+", "+g+")");
	}
	return colret;
}

function resetf()
{
	colors=genRanCol(numsq);
	picked=pickColor();
	msg.textContent="";
	colordisp.textContent=picked;
	for(let i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	document.querySelector("h1").style.backgroundColor="steelblue";
	reset.textContent="New Colors";
	flag=false;
}

module.exports= init;
