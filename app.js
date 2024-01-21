const axios = require('axios');
const apiUrl = 'https://api.github.com/users/google/repos';

axios.get(apiUrl)
  .then(response => {
    const repositories = response.data;

    // Ordena los repositorios por popularidad (cantidad de estrellas) de mayor a menor
    repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // Muestra los 10 repositorios más populares
    const topRepositories = repositories.slice(0, 10);
    topRepositories.forEach(repo => {
      console.log(repo.name);
    });
  })
  .catch(error => {
    console.error(error);
  });