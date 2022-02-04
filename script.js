
  function EncriptarPalabra(){
            var palabra = document.querySelector('#input-texto').value
            
            // Reemplazando la E
            palabra = palabra.replace(/e/gi,'enter');
            // Reemplazando la I
            palabra = palabra.replace(/i/gi,'imes');
            // Reemplazando la A
            palabra = palabra.replace(/a/gi,'ai');            
            // Reemplazando la O 
            palabra = palabra.replace(/o/gi,'ober');
            // Reemplazando la U
            palabra = palabra.replace(/u/gi,'ufat');
            document.querySelector('#msg').value = palabra
            
        }

        function DesencriptarPalabra(){
            var palabra = document.querySelector('#input-texto').value
            palabra = palabra.replace(/ai/gi,'a');
            palabra = palabra.replace(/enter/gi,'e');
            palabra = palabra.replace(/imes/gi,'i');
            palabra = palabra.replace(/ober/gi,'o');
            palabra = palabra.replace(/ufat/gi,'u');
            document.querySelector('#msg').value = palabra
         
        }
        
        


    
