//Rest & Spread
//Utilizando um operador clone o objeto clothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
    var {...todaRoupa} = clothes;
    //*exemplo var {pants:calças} = clothes
    console.log(todaRoupa);
  
  
  //Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
  const {...roupas} = clothes;
  
  const newRoupas = {...roupas, shoes:{colors:['yellow','purple']}} 
  console.log(newRoupas);  