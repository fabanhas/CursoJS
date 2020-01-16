function checaIdade(idade) {
    return new Promise (function(resolve, reject) {
        if(idade >= 18){
            resolve();
        }
        else if (idade < 18){
            reject();
        }
    })
}
function buscarGit(){
    var user = document.querySelector("#nome").value;
    var list = document.querySelector(".git ul");
    var carga = document.createElement('li');
    list.innerHTML = '';
    carga.innerHTML = 'Carregando...';
    list.appendChild(carga);
    axios.get('https://api.github.com/users/'+ user +'/repos')
    .then(function(response) {
        list.innerHTML = '';
        for(nome of response.data){
            var item = document.createElement('li');
            item.innerHTML = nome.name;
            list.appendChild(item);
        }
        
    })
    .catch(function(error) {
        alert("não existe esse usuario");
    });
}
   checaIdade(19)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });
   
