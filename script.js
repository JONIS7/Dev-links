function toggleMode(){
    const hmtl = document.documentElement
    hmtl.classList.toggle('light')

//pegar a img
    const img = document.querySelector("#profile img")

// substituir a img
    if(hmtl.classList.contains('light')) {
        img.setAttribute('src','./assets/avatar-light.png' )
    } else {
      //se tiver light mode manter a img normal
      img.setAttribute('src','./assets/Avatar.png' )
 }
 
}