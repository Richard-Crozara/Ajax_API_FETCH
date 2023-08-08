let btn = document.querySelector("button");



btn.addEventListener("click", function (event) {
  event.preventDefault();
  let input = document.querySelector("#cep");
  let valor = input.value;

  input.parentElement.reset()
  
  console.log(form)
  let url = "https://viacep.com.br/ws/01001000/json/";

    // requisição HTTP do tipo GET

    fetch(url)     // definindo a requisição

        // tratamento da resposta
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            let tags =[]
            let tagsACriar = ['td', 'td', 'td', 'td', 'td', 'td']
        
            tagsACriar.forEach(element => {
                tags = criarElementos(element, tags)
            });

            let tr = document.querySelector('.linha')

            console.log(tags)
        });

});

function criarElementos(element, listaTags){
    let td = document.createElement(element)
    listaTags=push(td)
    return listaTags
}

function incluirNaTela(element, listaTags){
    let td = document.createElement(element)
}