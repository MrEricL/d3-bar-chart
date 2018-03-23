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
var budget2015 = [14000, 313, 969, 89.4, 184];
var budget2016 = [14600, 262, 986, 86.7, 195];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(budget2015);
var barEnter = barUpdate.enter().append("div");




   //USAGE: reload index.html before executing each from the console...
//instant transition:
barEnter.style("width", function(d) {
  return d / 10 + "px"; });
/*
//5s transition:
barEnter.transition().duration(5000).style("width", function(d) {
  return d * 10 + "px"; });
//trans time prop to bar width
barEnter.transition().duration( function(d){ return d*1000; } )
  .style("width", function(d) {
    return d * 10 + "px"; });
 */

barEnter.text(function(d) { return d; });