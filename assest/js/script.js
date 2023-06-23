let activelink=document.querySelectorAll('.leftgroup>ul>li>a')

activelink.forEach(a =>{
a.addEventListener('click',function(){
  activelink.forEach(anc=> anc.classList.remove('active'));
  this.classlist.add('active');
});
});

// mega menu  on click start//
function showhide(){
  let click=document.getElementsByClassName("mega-menu");
  if(click.style.display == "none"){
     click.style.display ="block"
  }
  else{
    click.style.display = 'none';
  }
}
// mega menu on click end//
