function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('coregir');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    
    uno.onclick = function() {
        resultado.value += '1';
      };

      dos.onclick = function() {
        resultado.value += '2';
      };
      reset.onclick = function() {
        resultado.value = '';
      };

      igual.onclick = function() {
        resultado.value = eval(resultado.value);
      };
    }