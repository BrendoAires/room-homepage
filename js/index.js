const element = document.getElementById("topMenu");

    const linkMenu = document.getElementById("checkbox-menu");
    linkMenu.addEventListener('click', ()=>{

    
    if (element.style.height === "70px"){
        document.getElementById("topMenu").style.height = "0"
        document.querySelector('main').classList.remove('filter');
        document.getElementById("p-grid3").style.color = "hsl(0, 0%, 63%)";
        document.getElementById("p-grid1" ).style.color = "hsl(0, 0%, 63%)";

    }else{
    document.getElementById("topMenu").style.height = "70px";
    document.querySelector('main').classList.add('filter');
    document.getElementById("p-grid1").style.color = "hsl(0, 0%, 27%)";
    document.getElementById("p-grid3").style.color = "hsl(0, 0%, 27%)";
    //document.querySelector('p').style.color = "red";
    


   
  }
    })