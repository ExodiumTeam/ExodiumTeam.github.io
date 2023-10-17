const sidebar = document.querySelector('.sidebar')
const btnMenu = document.querySelector('.button-menu')
const links = document.querySelectorAll('.sidebar div ul li a')

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('active')
	sidebar.classList.toggle('active')
})

links.forEach(link => {
	link.addEventListener('click', () => {
		[btnMenu, sidebar].forEach(item => {
			item.classList.remove('active')
		})
	})
})