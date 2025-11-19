const aluno =[];

aluno[0]= 'samuel';
aluno[1]= 'lucas';
aluno[2]= 'vinicius';
aluno[3]= 'luan';
aluno[aluno.length] ='luiz'; // envia para o ultimo index
aluno.push('carlos');// envia para o ultimo index

//const deletar = delete aluno[1]; // sem alterar o indice
//console.log(deletar)

//let removido = aluno.pop(); // remove o ultimo
//console.log(removido)


//removido= aluno.shift(); // remove o primeiro
//console.log(removido)

//const copia = aluno.slice(); // pode criar copia do arry  e pode pegar uma pardo do arry
//console.log(copia)

//const top3 = aluno.slice(0,3)
//console.log(top3)

aluno.splice(0,1,'ana','pablo') // ele imeda o array remove e adiciona elementos

console.log(aluno)



//aluno.unshift('paulo'); // envia para o primeiro index

//console.log(aluno.length)
