const API_URL="https://api.themoviedb.org/3/movie/76341?api_key="
console.log(`${API_URL}${API_KEY}`);

const button = document.querySelector('#show-menu');
button.onclick = () => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('hide');
    menu.classList.toggle('show');
}