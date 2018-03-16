var mongoose = require('mongoose');

var companySchema = new mongoose.Schema ({
	Symbol: {
		type: String,
		required: true
	},
	Name: {
		type: String,
		required: true
	},
	LastSale: {
		type: Number,
		required: true
	},
	MarketCap: {
		type: String,
		required: true
	},
	IPOyear: {
		type: String,
		required: true
	},
	Sector: {
		type: String,
		required: true
	},
	industry: {
		type: String,
		required: true
	},
	"Summary Quote": {
		type: String,
		required: true
	}

});


//First parameter is the name of the model Hotel, second is the schema name, and
//third is the collection name which the model will create automatically if omitted.

mongoose.model('Company', companySchema , 'companies');



