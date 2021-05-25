const ctx = document.getElementById('mychart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data:
	 {
        labels: [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6],
        datasets: [{
            label: 'Text',
            data: [30, 39, 30, 50, 41, 35,37,45,29,48,40,60,30,35,40],
            backgroundColor: '#FF3A29',
			borderRadius: 30
			
			
        }]
    },
    options: {
        
        scales: {
            y:{
				beginAtZero: true
            }
        },
        legend: {
            display: false
        }
		
    }
	
});



const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data:
	 {
        labels: [1,2,3,4,5],
        datasets: [{
            axis: 'y',
            label: 'Title',
            data: [32, 19, 30, 25, 35],
            backgroundColor: '#FF3A29',
			borderRadius: 30,
			hoverBackgroundColor: 'red'
			
        }]
    },
    options: {
        indexAxis: 'y',
        
    }
    
});