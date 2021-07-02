let email = 'joao@hcode.com.br';

email = 'glaucio@hcode.com';

console.log(email);
console.log('O seu e-mail é ' + email);
console.log(`O seu e-mail é ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botao foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulario');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulario');
});

document.querySelector('#form-login').addEventListener('submit', e=> {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
        
    };
    
    if (!json.email) {

        console.error("O campo  email deve ser preenchido!");
    } else if (!json.password){

        console.error("O campo Password deve ser preenchido");

    } else {

        console.info("Dados Validados com Sucesso!");
        
    }

});