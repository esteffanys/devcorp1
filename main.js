function trazerRepositorio() {
 axios
    .get(' http://localhost:5000/correntista')
    .then((response) => {
      const repos = response.data;
     console.log(repos);

     var lista=document.querySelector('#repos');
    console.log(lista);
    var nome = document.querySelector('#nome')
    nome.innerHTML = repos[0].CodigoCorrentista

    })
    .catch((error) => console.error(error));
}
trazerRepositorio() 
