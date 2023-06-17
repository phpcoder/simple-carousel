import './scss/main.scss'


const carousel = document.querySelector('.carousel')
const items = carousel.querySelectorAll('.carousel-item')
// generate array of item indexes
const index = Array.from(Array(items.length).keys())
// initialize items order
index.push(index.shift())


const setOrder = () => {
	// rotate item indexes
	index.unshift(index.pop())
	items.forEach((el,i)=>{
		items[i].style.order = index[i]
	})
}


const moveStep = () => {
	carousel.style = ''
	const step = items[0].getBoundingClientRect().width
	setOrder()
	setTimeout(()=>{
		carousel.style = `transition: transform 0.5s ease-in-out; transform: translateX(-${step}px)`
	},10)
}


const orderItems = () => {
	moveStep()
	setInterval(()=>{
		moveStep()
	}, 2000)
}

// run carousel on page load
window.addEventListener('load', orderItems)
