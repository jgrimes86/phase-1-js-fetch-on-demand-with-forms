const init = () => {

    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
    })

        
    // function with event listener that fetches data based on user input
    function movieSearch() {
        const moviesDatabase = 'http://127.0.0.1:3000/movies/'
        const inputForm = document.querySelector('form');
        
        inputForm.addEventListener('submit', (event) => {
            const movieNumber = event.target.querySelector('#searchByID').value;
            
            fetch(moviesDatabase+`/${movieNumber}`)
            .then((movieData) => movieData.json())
            .then(responder);
        })
    }
    movieSearch();

    const titleDisplay = document.createElement('div');
    const summaryDisplay = document.createElement('div');


    // function that adds the data to the page
    function responder(movie) {
        const titleHeader = document.querySelector('#movieDetails h4');
        
        titleDisplay.innerText = movie['title'];
        titleHeader.append(titleDisplay);
        
        const summaryHeader = document.querySelector('#movieDetails p');
        
        summaryDisplay.innerText = movie['summary'];
        summaryHeader.append(summaryDisplay);
    }


}

document.addEventListener('DOMContentLoaded', init);