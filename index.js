/**
   D3 demo: transition basics
   Clyde "Thluffy" Sinclair
   SoftDev2 pd0
   2099-12-31
 **/

//build horiz bar chart...
//2015
//income tax 14000
//corp tax 313
//payroll tax 969
//excise tax 89.4
//other tax 184

//2016
//income tax 14600
//corp tax 262
//payroll tax 986
//excise tax 86.7
//other tax 195

var list = ["Income tax", "Corporate tax", "Payroll tax", "Excise tax", "Other Tax"]
var budget2015 = [14000, 313, 969, 89.4, 184];
var budget2016 = [14600, 262, 986, 86.7, 195];
// true = 2015, f = 2016
var first = true;
//var combined_budget = [14000, 14600, 313, 262, 969, 986, 89.4, 86.7, 184, 195]

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var changeButton = document.getElementById("change");
var chartHTML = document.getElementById("remove");
var barUpdate = bar.data(budget2015);
var barEnter = barUpdate.enter().append("div");

function generate(data){
	bar = chart.selectAll("div");
	barUpdate = bar.data(data);
	barUpdate.transition().duration(500).style("width", function(d) {return 120 + d / 10.75 + "px";}).style("height", "30px");
	barUpdate.text(function(d) {return "$" + d + " Billion"});
  bar.data(list).append("b").attr("style","float:left").text(function(d){return d;});
}


var change = function(){
	if (first){
		changeButton.innerHTML = "2015"
		first = false;
		generate(budget2015);
	}
	else{
		changeButton.innerHTML = "2016"
		first = true;
		generate(budget2016);
	}

}

changeButton.addEventListener("click",change);




generate(budget2015);
