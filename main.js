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

function log(){
    var done = 0;
    var mail= document.getElementById('mail');
    var mail2 = mail.value.toLowerCase();
   console.log(mail2);
    if (mail2 == "" ) {
      window.location = "log.html";
      done = 1;
    }
    if (done == 0) {
      alert("Dados incorretos, tente novamente");
  
    }

const mail =document.getElementById('mail');

 mail.onclick = function(){ 
   axios({
    method:'GET',
    url: 'http://localhost:5000/correntista'
   }).then(res=>{
     console.log(res.data);
   })
 }
}