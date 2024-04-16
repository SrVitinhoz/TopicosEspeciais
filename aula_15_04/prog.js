document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("tabela");

  for (var i = 0; i < 4; i++) {
    var linha = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      var celulas = document.createElement("td");
      cell.textContent = i * 4 + j + 1;
      // cria a celular e adciona na linha
      linha.appendChild(celulas);
    }
    // adciona a linha na tabela
    table.appendChild(linha);
  }
});

  
