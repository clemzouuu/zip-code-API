document.getElementById("cp").addEventListener('input', function (){

    // this.value = the zipcode that the user is entering 
    if(this.value.length == 5){

        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&form at=json&geometry=centre`

        // contact with the server, a response come and need to treat it
        fetch(url).then(response => response.json()).then((data => {
            let affichage = '<ul>'
            for (let ville of data){
                affichage += `<li>La ville possédant ce code postal est ${ville.nom}</li>`
                affichage += `<li>Sa population est de ${ville.population} habitants</li><br>`
                
            }
            affichage += '</ul>'
            document.querySelector("#ville").innerHTML = affichage
        }))
        
    }
})