const addmoviemodal=document.getElementById('add-modal');
const startmovie=document.querySelector("header button");
const backdrop=document.getElementById('backdrop');
const cancelAddMovieButton=  addmoviemodal.querySelector(".btn--passive");


const togglebackdrop=()=>{
  backdrop.classList.toggle('visible');  
};

const toggleMovie= () => {
     addmoviemodal.classList.toggle('visible');
    togglebackdrop();
    
};
const backDropMovieHandler=()=>{
  toggleMovie();  
};
const cancelmoviebtn=()=>{
     toggleMovie(); 
};

startmovie.addEventListener('click',toggleMovie);
backdrop.addEventListener('click',backDropMovieHandler);
cancelAddMovieButton.addEventListener('click',cancelmoviebtn);