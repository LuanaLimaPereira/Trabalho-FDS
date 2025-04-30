  function mostrarMensagem() {
    const msg= document.getElementById("mensagem"); 
   msg.textContent='"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo, fará coisas admiráveis" José de Alencar';
     setTimeout(function() {
   msg.textContent = '';}, 20000);
  }   