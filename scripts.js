

function btnnhao(elementoBotao) { 
  
 
  elementoBotao.style.position = 'absolute'; 
  elementoBotao.style.bottom = geraPosicao(10, 90);
  elementoBotao.style.left = geraPosicao(10, 90);
  
  console.log('se fuder hein, aceita essa porra ai');
}


function geraPosicao(min, max) {
    // Math.floor garante que o número seja inteiro
    // (max - min + 1) garante que 'max' seja inclusivo
    const posicao = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Retorna a string com o valor e o '%'
    return posicao + '%';
}
