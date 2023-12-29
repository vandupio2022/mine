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
function minner(){
var tablex = document.querySelectorAll(".min-w-full.divide-y.divide-gray-200 tbody tr");
var result=[];
for (var i=0; i <tablex.length;i++)
{
	lang = tablex[i].querySelectorAll("img");
	var sLang=[]; 
		for (var la=0; la <lang.length; la++)
			{
				sLang.push(lang[la].getAttribute("alt"));
			}
	var name = tablex[i].querySelectorAll("td")[1].innerText;
	var property= tablex[i].querySelectorAll("td")[2].innerText;
	var state = tablex[i].querySelectorAll("td")[3].innerText;
	var IId=tablex[i+1].querySelector(".text-xs.text-gray-400").innerText.split(": ")[1];

	result.push(property+"\t"+name+"\t"+state+"\t"+sLang+"\t"+IId)
	
			i++;
}
var writedata = result.join('\n');
console.log(writedata);
