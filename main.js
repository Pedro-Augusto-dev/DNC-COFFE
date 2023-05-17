function Open(){
    const modal = document.getElementById('func');
    modal.classList.add('abrir');

    modal.addEventListener("click", (e) => {
        if(e.target.id == 'buttonClose' || e.target.id == 'func'){
            modal.classList.remove('abrir')
        }
    });
}

function entrar(){
    pedro.style.display = 'block';
}
function sair(){
    pedro.style.display = 'none';
}

function openn(){
    mari.style.display = 'block';
}
function closee(){
    mari.style.display = 'none';
}

function openn2(){
    raissa.style.display = 'block';
}
function closee2(){
    raissa.style.display = 'none';
}

function openn3(){
    rhanya.style.display = 'block';
}
function closee3(){
    rhanya.style.display = 'none';
}





