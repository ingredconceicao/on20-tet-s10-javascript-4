//TODO: Criar uma função que retorma o html
//TODO: Criar uma função asyncrona que realiza a requisição
//TODO: Criar uma função que gerencia toda a funcionalidade da aplicação


const createSection = (film) => {
    return `
      <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
      </div>
    `
  }
  
  const container = document.getElementById('demo')
  
  const getFilms = async () => {
    try{
      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const films = await response.json()
      const ourFilms = films.slice(0, 5)
      return ourFilms
    }
    catch(err) {
      console.error("Capturei um erro: ", err)
    }
  }
  
  getFilms().then((films) => films.map((film) => container.innerHTML += createSection(film)))