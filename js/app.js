var Calculadora={
  op1:0,
  op2:0,
  oper:"",
  resultado:0,

  reset: function(){
    Calculadora.resultado=0
    Calculadora.op1=0
    Calculadora.op2=0
    Calculadora.oper=""
    document.getElementById('display').innerText=Calculadora.resultado
  }  ,
  suma:function() {
    Calculadora.resultado=parseFloat(Calculadora.op1)+parseFloat(Calculadora.op2)
    if (Calculadora.resultado.toString().length>8) {
      document.getElementById('display').innerText=Calculadora.resultado.toString().slice(0,8)

    }
    else {
      document.getElementById('display').innerText=Calculadora.resultado
    }

  },
  resta:function() {
    Calculadora.resultado=parseFloat(Calculadora.op1)-parseFloat(Calculadora.op2)
    if (Calculadora.resultado.toString().length>8) {
      document.getElementById('display').innerText=Calculadora.resultado.toString().slice(0,8)

    }
    else {
      document.getElementById('display').innerText=Calculadora.resultado
    }
  },
  mult:function() {
    Calculadora.resultado=parseFloat(Calculadora.op1)*parseFloat(Calculadora.op2)
    if (Calculadora.resultado.toString().length>8) {
      document.getElementById('display').innerText=Calculadora.resultado.toString().slice(0,8)

    }
    else {
      document.getElementById('display').innerText=Calculadora.resultado
    }
  },
  divid:function() {
    if (Calculadora.op2!=0) {
      Calculadora.resultado=parseFloat(Calculadora.op1)/parseFloat(Calculadora.op2)
      if (Calculadora.resultado.toString().length>8) {
        document.getElementById('display').innerText=Calculadora.resultado.toString().slice(0,8)

      }
      else {
        document.getElementById('display').innerText=Calculadora.resultado
      }
    }
    else {
      document.getElementById('display').innerText="Error"

    }
  },
  mostrarResultado:function(){
    switch (Calculadora.oper) {
      case '+': Calculadora.suma()
      break;
      case '-': Calculadora.resta()
      break;
      case '*': Calculadora.mult()
      break;
      case '/': Calculadora.divid()
      break;
      default:

    }
      Calculadora.oper=""
  },
  inicialize:function(){
    document.getElementById('1').addEventListener('click',function(){
      Calculadora.escribir("1")
    })
    document.getElementById('2').addEventListener('click',function(){
      Calculadora.escribir("2")
    })
    document.getElementById('3').addEventListener('click',function(){
      Calculadora.escribir("3")
    })
    document.getElementById('4').addEventListener('click',function(){
      Calculadora.escribir("4")
    })
    document.getElementById('5').addEventListener('click',function(){
      Calculadora.escribir("5")
    })
    document.getElementById('6').addEventListener('click',function(){
      Calculadora.escribir("6")
    })
    document.getElementById('7').addEventListener('click',function(){
      Calculadora.escribir("7")
    })
    document.getElementById('8').addEventListener('click',function(){
      Calculadora.escribir("8")
    })
    document.getElementById('9').addEventListener('click',function(){
      Calculadora.escribir("9")
    })
    document.getElementById('0').addEventListener('click',function(){

      Calculadora.escribir("0")

    })
    document.getElementById('punto').addEventListener('click',function(){
      Calculadora.escribir(".")
    })
    document.getElementById('sign').addEventListener('click',function(){
      Calculadora.escribir("+/-")
    })
    document.getElementById('mas').addEventListener('click',function(){
      Calculadora.escribir("+")
    })
    document.getElementById('menos').addEventListener('click',function(){
      Calculadora.escribir("-")
    })
    document.getElementById('por').addEventListener('click',function(){
      Calculadora.escribir("*")
    })
    document.getElementById('dividido').addEventListener('click',function(){
      Calculadora.escribir("/")
    })
    document.getElementById("igual").addEventListener('click',function(){
      Calculadora.escribir('=')
    })
    document.getElementById("on").addEventListener('click',function(){
      Calculadora.escribir('r')
    })
//Para lograr el efecto de boton presionado
var hoja = document.createElement('style')
hoja.innerHTML = ".tecla:active{transform-origin: center !important; transform: scale(0.98);}";
document.head.appendChild(hoja);

  },
  escribir:function(car){
    var pantalla=document.getElementById('display')
    if (car=='r') {
      Calculadora.reset()
    }
    else if (pantalla.innerText=="Error") {

    }
    else if (pantalla.innerText=="0" && car=='.' && pantalla.innerText.length<8) {
      pantalla.innerText+=car
    } else if (pantalla.innerText=="0" && (car>0 && car<=9)&&pantalla.innerText.length<8) {
      pantalla.innerText=car
    }
    else if (car=='.'&&(pantalla.innerText.indexOf('.') == -1)&&pantalla.innerText.length<8) {
      pantalla.innerText+='.'
    }
    else if (car>=0 && car<=9 && pantalla.innerText!='0'&& pantalla.innerText.length<8) {

      pantalla.innerText+=car
    }
    else if (car=="+/-") {
      pantalla.innerText*=(-1)
    }
    else if (car=="+") {
      if (Calculadora.oper=="") {
        Calculadora.op1=pantalla.innerText
        Calculadora.oper='+'
        pantalla.innerText=''
      }
      else {
        Calculadora.op2=pantalla.innerText
        Calculadora.mostrarResultado()
        Calculadora.op1=Calculadora.resultado
        Calculadora.escribir('+')
      }

    }
    else if (car=="-") {
      if (Calculadora.oper=="") {
        Calculadora.op1=pantalla.innerText
        Calculadora.oper='-'
        pantalla.innerText=''
      }
      else {
        Calculadora.op2=pantalla.innerText
        Calculadora.mostrarResultado()
        Calculadora.op1=Calculadora.resultado
        Calculadora.escribir('-')
      }
    }
    else if (car=="*") {
      if (Calculadora.oper=="") {
        Calculadora.op1=pantalla.innerText
        Calculadora.oper='*'
        pantalla.innerText=''
      }
      else {
        Calculadora.op2=pantalla.innerText
        Calculadora.mostrarResultado()
        Calculadora.op1=Calculadora.resultado
        Calculadora.escribir('*')
      }
    }
    else if (car=="/") {
      if (Calculadora.oper=="") {
        Calculadora.op1=pantalla.innerText
        Calculadora.oper='/'
        pantalla.innerText=''
      }
      else {
        Calculadora.op2=pantalla.innerText
        Calculadora.mostrarResultado()
        Calculadora.op1=Calculadora.resultado
        Calculadora.escribir('/')
      }
    }
    else if (car=='=') {
      Calculadora.op2=pantalla.innerText
      Calculadora.mostrarResultado()
    }


  }


}
Calculadora.inicialize();
