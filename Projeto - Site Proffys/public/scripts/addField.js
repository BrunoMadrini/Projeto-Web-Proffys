//Procurar o botão
document.querySelector('#add-time')

//Quando clicar no botão
.addEventListener('click', cloneField)


//Executar uma ação
function cloneField() {

    //Duplicar os campo. Quais campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limar os valores antes de clonar.
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página. Em que lugar?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}