/*global $ */
var IPOyear;
var lastSale;
var marketCap;
var name;
var sector;
var summaryQuote;
var symbol;
var industry;

$('#companies').click(function(event) {
	event.preventDefault();
		$.get('/api/companies', function(company) {
			//here the parameter company is the document that gets returned from the server.
			console.log("I am Here");
			console.log(company);
			for (var i=0;i<company.length;i++) {
				//console.log(company[i]);
	          	var displayCompany = document.createElement("li");
	          	//console.log(displayCompany);
	          	displayCompany.innerHTML =  "Name " + company[i].Name;
				//console.log(company[i].Name);
				console.log(displayCompany);
				console.log(document.getElementById('result'));
	          	document.getElementById('result').appendChild(displayCompany);
//	          	displayCompany.setAttribute("value", "IPOyear "+ company[i].IPOyear);
//	          	document.getElementById('result').appendChild(displayCompany);
//	          	displayCompany.setAttribute("value", "LastSale " + company[i].LastSale);
//	          	document.getElementById('result').appendChild(displayCompany);
//	          	displayCompany.setAttribute("value", "MarketCap" + company[i].MarketCap);
//	          	document.getElementById('result').appendChild(displayCompany);
		      }
		});
	
});

$('#form').submit(function(event) {	
     event.preventDefault();
	var symbol = document.getElementById("input").value;
     console.log(symbol);
	   $.get('/api/companybySymbol/' + symbol, function(company) {//using route to make the AJAX call.
		   console.log(company);
		   //var response = JSON.parse( company );
	   
	   IPOyear = "  " + company.IPOyear;
	   console.log(IPOyear);
	   lastSale = "  " + company.LastSale;
	   marketCap = "  " + company.MarketCap;
	   name = "  " + company.Name;
	   sector = "  " + company.Sector;
	   summaryQuote = "  " + company.SummaryQuote;
	   symbol = "  " + company.Symbol;
	   industry = "  " + company.industry;
	   dispStockDetails();
	   });
	   
});                

function dispStockDetails() {
	document.getElementById("ipo").innerHTML = IPOyear;
	document.getElementById("lastsale").innerHTML = lastSale;
	document.getElementById("market").innerHTML = marketCap;
	document.getElementById("name").innerHTML = name;
	document.getElementById("sector").innerHTML = sector;
	document.getElementById("sumQ").innerHTML = summaryQuote;
	document.getElementById("symbol").innerHTML = symbol;
	document.getElementById("industry").innerHTML = industry;
	
}


