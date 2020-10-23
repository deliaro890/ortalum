var cont = 0
var opciones = document.getElementById('options')

function menu(){
    
    cont ++
    if((cont%2)!=0){
        opciones.style.display='block';
    }else{
        opciones.style.display='none';
    }
}
    


   
function ver(bandera,contenido,mas,display,box_color_menos,box_color_mas,font_color_mas,font_color_menos){

    if((bandera%2)!=0){
            contenido.style.display=display
            mas.innerHTML='-'
            mas.style.backgroundColor=box_color_menos
            mas.style.color=font_color_menos
            mas.style.fontSize='25px'

            
    }else{
            contenido.style.display='none'
            mas.innerHTML='+'
            mas.style.backgroundColor=box_color_mas
            mas.style.color=font_color_mas
    }

}


function naranja(bandera_naranja,contenido,mas){

    var display = 'block'
    var box_color_menos = 'white'
    var box_color_mas = '#DF7F1A'
    var font_color_mas = 'white'
    var font_color_menos = '#DF7F1A'

    ver(bandera_naranja, contenido, mas, display,box_color_menos,box_color_mas,font_color_mas,font_color_menos)   
}

function naranja_web(bandera_naranja_web,contenido_web,mas_web){

    var display = 'flex'
    var box_color_menos = 'white'
    var box_color_mas = '#DF7F1A'
    var font_color_mas = 'white'
    var font_color_menos = '#DF7F1A'

    ver(bandera_naranja_web,contenido_web,mas_web,display,box_color_menos,box_color_mas,font_color_mas,font_color_menos)

}

function blanco(bandera_blanco,contenido,mas){

    var display = 'block'
    var box_color_menos = '#DF7F1A'
    var box_color_mas = 'white'
    var font_color_mas = '#DF7F1A'
    var font_color_menos = 'white'
    ver(bandera_blanco, contenido, mas, display,box_color_menos,box_color_mas,font_color_mas,font_color_menos)   


}

function blanco_web(bandera_blanco_web,contenido,mas){
    var display = 'flex'
    var box_color_menos = '#DF7F1A'
    var box_color_mas = 'white'
    var font_color_mas = '#DF7F1A'
    var font_color_menos = 'white'
    ver(bandera_blanco_web, contenido, mas, display,box_color_menos,box_color_mas,font_color_mas,font_color_menos)   
}


//naranja
var bandera_naranja=0
function mas_naranja(parametros){

    bandera_naranja ++
    var parametros = parametros.split(',')
    var contenido = document.getElementById(parametros[1])
    var mas = document.getElementById(parametros[0])
    naranja(bandera_naranja,contenido,mas)    
}

var bandera_naranja_web=0
function mas_naranja_web(parametros){

    bandera_naranja_web ++
    var parametros = parametros.split(',')
    var contenido = document.getElementById(parametros[1])
    var mas = document.getElementById(parametros[0])
    naranja_web(bandera_naranja_web,contenido,mas)    
}

///blanco
var bandera_blanco = 0
function mas_blanco(parametros){

    bandera_blanco ++
    var parametros = parametros.split(',')
    var contenido = document.getElementById(parametros[1])
    var mas = document.getElementById(parametros[0])
    blanco(bandera_blanco,contenido,mas)    
}

var bandera_blanco_web = 0
function mas_blanco_web(parametros){

    bandera_blanco_web ++
    var parametros = parametros.split(',')
    var contenido = document.getElementById(parametros[1])
    var mas = document.getElementById(parametros[0])
    blanco_web(bandera_blanco_web,contenido,mas)

}


