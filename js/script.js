const sidebar = document.querySelector('.sidebar')
const btnMenu = document.querySelector('.button-menu')
const links = document.querySelectorAll('.sidebar div ul li a')
const section = document.querySelector('#skills');

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

function handleAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar .bar span').forEach((bar) => {
        bar.classList.add('animate');
      })
    } else {
    	entry.target.querySelectorAll('.skill-bar .bar span').forEach((bar) => {
        bar.classList.remove('animate');
      })
    }
  })
}

const observer = new IntersectionObserver(handleAnimation, {
  root: null,
  threshold: 0.03,
})

observer.observe(section)
