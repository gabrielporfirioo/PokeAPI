let img = document.getElementById('foto')
let nome = document.getElementById('nome')
let id = document.getElementById('id')

let pokemon = document.getElementById('pokemon')
let buscar = document.getElementById('buscar')

buscar.addEventListener('click',()=>{
    console.log(pokemon.value)
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.value)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data.name)//rastrear nome
        console.log(data.id)//rastrear id
        console.log(data.sprites.other['official-artwork'].front_default)//rastrear link da imagem
    
        img.src = data.sprites.other['official-artwork'].front_default
        nome.innerHTML = data.name
        id.innerHTML = `Recultado para busca: ${data.id}`
    })
    .catch(error=>{
        console.log(error)
    })
})








