// Get the canvas element
const canvas = document.getElementById('myChart');

// Create the chart
function loadChart(labelArr, valArr) {
	const myChart = new Chart(canvas, {
		type: 'pie',
		data: {
			labels: labelArr,
			datasets: [{
				label: '# of Votes',
				data: valArr,
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 206, 86, 0.5)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Nutrients'
				}
			}
		}
	});
}
