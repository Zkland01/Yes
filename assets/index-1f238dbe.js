document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  const second=document.getElementById('second')
  const closeBtn = document.getElementById('closeBtn');

  toggleButton.addEventListener('click', function () {
      navbarMenu.style.display ='block';
       toggleButton.style.display='none'
       second.style.display='block'
 closeBtn.style.display='block'
    });
 closeBtn.addEventListener('click', function () {
     navbarMenu.style.display = 'none';
     toggleButton.style.display='block'
     closeBtn.style.display='none'
     
 });
});
