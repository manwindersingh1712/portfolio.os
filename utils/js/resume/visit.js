const countEl = document.getElementById('count');


updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/portfolio/portfolioos/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}