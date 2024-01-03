function adicionarVitoria(nome) {
  const vitorias = document.getElementById(`vitorias${nome}`);
  const partidas = document.getElementById(`partidas${nome}`);
  const pontuacao = document.getElementById(`pontuacao${nome}`);

  vitorias.textContent = parseInt(vitorias.textContent) + 1;
  partidas.textContent = parseInt(partidas.textContent) + 1;
  pontuacao.textContent = parseInt(pontuacao.textContent) + 1; // Adicionando 3 pontos por vitória (pode ajustar conforme sua competição)
}

function adicionarDerrota(nome) {
  const derrotas = document.getElementById(`derrotas${nome}`);
  const partidas = document.getElementById(`partidas${nome}`);

  derrotas.textContent = parseInt(derrotas.textContent) + 1;
  partidas.textContent = parseInt(partidas.textContent) + 1;
  // Aqui, você pode definir como deseja subtrair pontos por derrota
  // Por exemplo: pontuacao.textContent = parseInt(pontuacao.textContent) - 1; 
}
