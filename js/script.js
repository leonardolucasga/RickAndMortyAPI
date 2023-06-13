fetch(`https://rickandmortyapi.com/api/character`,{
    method:'GET'
})
.then((response) => response.json())
.then(function(json){
    let container = document.querySelector('.container');
    json.results.map(function(results){
        container.innerHTML +=`
        <div class="card">
        <img src=` + results.image +`> 
        <br>
        <strong>` + results.name +`</strong>
        <br>
        <span>` + results.origin.name +`</span>
        <br>
        <hr>
        </div>`
    })
})
 
 
