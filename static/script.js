/*Abrir e fechar o menu lateral em modo mobile*/
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
})

/*Fechando o menu ao clicar em algum item e mudando o ícone para list*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

//Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {

    const windowTop = window.pageYOffset + window.innerHeight * 0.85

    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate")
        }
        else {
            element.classList.remove("animate")
        }
    })

}

window.addEventListener("scroll", () => { animeScroll() })

//Ativar carregamento no botão enviar 

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoading = document.querySelector('#btn-enviar-loading')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoading.style.display = 'block'
    btnEnviar.style.display = "none"
})

//Tirando a mensagem de sucesso depois de 5 segundos

setTimeout(()=>{
    document.querySelector('#alerta').style.display='none';
},5000)