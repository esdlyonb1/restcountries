
const monBouton = document.querySelector("#fetchAll")

monBouton.addEventListener("click", fetchAll)

function fetchAll(){

    fetch("https://restcountries.com/v3.1/all")
        .then(paysSerialises=>paysSerialises.json())
        .then( paysDeserialises => {

            paysDeserialises.forEach(pays=>{
                let nomDuPays = pays.name.common

                document.querySelector(".lesPays").innerHTML += `<p>${nomDuPays}</p>`

            })

        })
}

