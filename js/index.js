const element = document.getElementById("topMenu");

    const linkMenu = document.getElementById("checkbox-menu");
    linkMenu.addEventListener('click', ()=>{

    
    if (element.style.height === "70px"){
        document.getElementById("topMenu").style.height = "0"
        document.querySelector('main').classList.remove('filter');
        document.getElementById("p-grid1").classList.remove('txt1');
        document.getElementById("p-grid3").classList.remove('txt1');

    }else{
    document.getElementById("topMenu").style.height = "70px";
    document.querySelector('main').classList.add('filter');
    document.getElementById("p-grid1").classList.add('txt1');
    document.getElementById("p-grid3").classList.add('txt1');
    


   
  }
    })