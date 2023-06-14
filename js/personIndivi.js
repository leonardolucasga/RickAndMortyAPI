fetch(`https://rickandmortyapi.com/api/character`,{
    method:'GET'
})
.then((response) => response.json())
.then(function(json){
    let container = document.querySelector('.container-indiv');
    json.results.map(function(results){
        container.innerHTML +=`
        <div class="card">
        
        <br>
        <img src=` + results.image +`> 
        <br>
        <strong> Nome: ` + results.name +`</strong>
        <br>
        <span> Nº ID: `+results.id+`</span>
        <br>
       
        <span> Gênero: `+results.gender+`</span>
        <br>
        <span> Status: `+results.status+`</span>
        <br>
        <span> Espécie: ` + results.species+`</span>
        <br>
        <span> Tipo: ` + results.type+`</span>
        <br>
        <span> Local: ` + results.location.name+`</span>
        <br>
        <span> Origem: ` + results.origin.name+`</span>
        <br>
        <hr>
        </div>
        
        <a href="index.html"><strong>Voltar a Página inicial</strong></a>
        `
    })
})