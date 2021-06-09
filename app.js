const inputPelicula = document.querySelector('#pelicula');
const btnBuscar = document.querySelector('#buscar');
const contenedorPelicular = document.querySelector('#contenedorPelicular');

const APIKEY = '2edc3a83ae1cf16d560b6f4adf77b80a';


btnBuscar.addEventListener('click', function (event){
    event.preventDefault();
    const pelicula = inputPelicula.value;
    cargarPeliculas(pelicula);

    })

    const cargarPeliculas = (pelicula) => {
        
    contenedorPeliculas.innerHTML = ''; //Acá se limpia la busqueda anterior para mostrar la nueva cada vez que se ejecute la función
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${pelicula}`;
    fetch(url).then( respuesta => respuesta.json() ).then( datos =>{
        //console.log(`Fecha del lanzamiento ${datos.results[10].release_date}`  );
        for (let i = 0; i < datos.results.length; i++) {
            let datosPelicula = datos.results[i];
            //console.log(datosPelicula);
            const peliculaDiv = document.createElement('div');
            peliculaDiv.classList.add('pelicula');
            let portadaPelicula = `http://image.tmdb.org/t/p/original${datosPelicula.poster_path}`;
            const peliculahtml = `
            <div class="imgContenedor">
                <img src="${portadaPelicula}" />
            </div>
            <div class="informacion">
                <p class="titulo">${datosPelicula.original_title}</p>
                <h3 class="votacion">Puntuación: ${datosPelicula.vote_average}</h3>
                <h4 class="fecha">Fecha de lanzamiento: ${datosPelicula.release_date}<h4>
            </div>
            `;
            peliculaDiv.innerHTML = peliculahtml;
            contenedorPeliculas.appendChild(peliculaDiv);
        }
    
})
}
    /*event.preventDefault();/*Esta función no permite que el submit refresque la página, que es lo que ocupamos en este
    console.log(event)*/