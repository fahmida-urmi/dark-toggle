 // Toggle the "dark" class on the root element when the button is clicked
 const darkToggleBtn = document.getElementById('darkToggleBtn');
 darkToggleBtn.addEventListener('click', () => {
   document.documentElement.classList.toggle('dark');
 });