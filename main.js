const rootelm = document.documentElement,
      toggle = document.querySelector('.toggle')

let getmode = localStorage.getItem('mode')
if (getmode && getmode === 'dark') {
  rootelm.classList.add('dark')
}
      
toggle.addEventListener('click', () => {
  rootelm.classList.toggle('dark')
  if (!rootelm.classList.contains('dark')) {
    return localStorage.setItem('mode','light')
  }
  localStorage.setItem('mode','dark')
})