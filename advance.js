function canopen(){
	var values = ["60000","50000","55000","20000"];
	var click = document.querySelectorAll(".py-3.cursor-pointer.flex.items-center.justify-center");
	var delay = values[Math.floor(Math.random() * values.length)];
	

	for (var i=0; i<click.length;i++)
		{
			click[i].click();
			setTimeout(function(){},delay);
		}
	i=undefined;
}

function pretty(ww)
	{		var c=[];
			c.push(ww.forEach((e)=>carrayc.push(e.innerText)));
			xx = c.join(""); 
			xx = xx.replace("AudiencesShow","\t");
			xx = xx.replace("TargetingShow when the URL is or contains:","\t");
			return ww;
	}
function p2(lang)
	{	
		var c=[];
		for (var a=0; a <lang.length; a++)
			{
				c.push(lang[a].getAttribute("alt"));
			}
		return c;
	}

function minner(){
var tablex = document.querySelectorAll(".min-w-full.divide-y.divide-gray-200 tbody tr");
var result=[];
for (var i=0; i <tablex.length;i++)
{
	var devicex;
	var target="";
	p2(tablex[i].querySelectorAll("img"));
	var dcount = tablex[i].querySelectorAll("td")[5].querySelectorAll("svg").length;
	if(dcount == 1)
		{
			devicex = "Mobile";
		}else
		{
			devicex = "Desktop & Tab";
		}
	var sLang=[]; 
		

	//targets
	//var target = pretty(tablex[i+1].querySelectorAll(".grid.grid-cols-2.px-5 p"));
	

	var name = tablex[i].querySelectorAll("td")[1].innerText;
	var property= tablex[i].querySelectorAll("td")[2].innerText;
	var state = tablex[i].querySelectorAll("td")[3].innerText;
	var IId=tablex[i+1].querySelector(".text-xs.text-gray-400").innerText.split(": ")[1];
	//target = target.replaceAll("\nAudiences","\n\nAudiences");

	result.push(tablex[i].querySelectorAll("td")[2].innerText+
		"\t"+tablex[i].querySelectorAll("td")[1].innerText+
		"\t"+tablex[i].querySelectorAll("td")[3].innerText+
		"\t"+p2(tablex[i].querySelectorAll("img"))+
		"\t"+devicex+
		"\t"+tablex[i+1].querySelector(".text-xs.text-gray-400").innerText.split(": ")[1]+
		"\t"+pretty(tablex[i+1].querySelectorAll(".grid.grid-cols-2.px-5 p")));
	i++;
}
var writedata = result.join('\n');
console.log(writedata);
}

function action()
{
    canopen(); minner();
}
