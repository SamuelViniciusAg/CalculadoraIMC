/*const pessoa= {
nome: 'samuel',
sobrenome: 'alves',
idade: 25
};*/

// Criar função pessoa

function criarPessoa(nome , sobrenome, idade){

    return{

        nome:nome,
        sobrenome:sobrenome,
        idade:Number(idade)

    };
}

const pessoa1 = criarPessoa('samu','vini', 25)

//pessoa1.falar = function(){
//    console.log(`meu nome é ${this.nome}`);
//}

pessoa1.incrementar = function(){

    
    this.idade++;
    console.log(`minha idade é ${this.idade}`);


}

pessoa1.incrementar();
pessoa1.incrementar();
pessoa1.incrementar();
pessoa1.incrementar();
