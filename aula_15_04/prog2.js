document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("tabela");
    var numbers = Array.from({length: 16}, (_, i) => i + 1); // Gerador de numeros
    //var achado = false;
    var index = 0; //indice
    var achado = false;

    // criando linhas
    for (var i = 0; i < 4; i++) {
      var row = document.createElement("tr");
      
      // criando celulas nas linhas
      for (var j = 0; j < 4; j++) {
        var cell = document.createElement("td");
        cell.textContent = numbers[index]; // Preenche a célula com Array
        row.appendChild(cell);
        

        if (numbers[index] === 10) {
            cell.style.backgroundColor = "yellow"; // Destaque o número 10
            achado = true; // Atualiza a variável para indicar que o número 10 foi encontrado
        }

        if (numbers[index] != 10) {
            cell.style.backgroundColor = "yellow";
            achado = true; 
        }

        if (numbers[index] < 10) {
            cell.style.backgroundColor = "yellow";
            achado = true; 
        }
        if (numbers[index] > 10) {
            cell.style.backgroundColor = "yellow";
            achado = true; 
        }

        if (numbers[index] <= 10) {
            cell.style.backgroundColor = "yellow";
            achado = true; 
        }
        if (numbers[index] >= 10) {
            cell.style.backgroundColor = "yellow";
            achado = true; 
        }


        index++;
      
      table.appendChild(row); 
    }}// Adiciona a linha à tabela

    
    if (achado) {
        var message = document.createElement("p");
        message.textContent = "O número 10 foi encontrado!";
        document.body.appendChild(message);
    }
    
});
