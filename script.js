const nameApi = 'https://api.foodifyy.com/pred/'
const urlApi = 'https://api.foodifyy.com/predict/'

$("#load").hide()
async function fetchViaName(food) {
	console.log(nameApi + encodeURI(food))
	await axios.get(nameApi + encodeURI(food))
	  .then(response => {
		  let nutrients = response.data
		  $("#load").show()
		  $("#name").html(nutrients.item_name)
		  $("#servings").html(nutrients.Serving_Size)
		  $("#calories").html(nutrients.Calories)
		  protienVal = nutrients.Protein_g ? parseInt(nutrients.Protein_g) : 0
		  carbsVal = nutrients ? parseInt(nutrients.Total_Carbohydrate_g) : 0
		  fatVal = nutrients ? parseInt(nutrients.Total_Fat_g) : 0
		  loadChart(["Protien (%)", "Fat (%)", "Carbs (%)"], [protienVal, carbsVal, fatVal])
		  generateTable(nutrients)
	  })
	  .catch(error => {
	    console.error(error)
	  });
}

function generateTable(json) {
	for (let key in json) {
		subList = []
		subList.push(`<tr><td>${key}</td><td>${json[key]}</td></tr>`)
		$("#table-data").append(subList)
	}
}