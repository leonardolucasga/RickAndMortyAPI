fetch(`https://rickandmortyapi.com/api/character`,{
    method:'GET'
})
.then((response) => response.json())
.then(function(json){
    let container = document.querySelector('.container');
    json.results.map(function(results){
        container.innerHTML +=`
        <div class="card">
        <a target="_blank" href="pag02.html"><img src=` + results.image +`> </a>
        <br>
        <strong>` + results.name +`</strong>
        <br>
        <span>` + results.origin.name +`</span>
        <br>
        <hr>
        </div>`
        
    })
})
 
 
