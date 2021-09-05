let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry)=>{
    return entry.isIntersecting
}

const loadImage= (entry)=>{
    const container =entry.target//container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;

    imagen.onload=()=>{
        loadedImages += 1;
        logState();
    }
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) =>{
    observer.observe(image);
    totalImages += 1 ;
    logState();
}

function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
  }
export const removeState=()=>{
    totalImages = 0;
    loadedImages = 0;
    logState()
 }