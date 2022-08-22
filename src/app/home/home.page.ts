import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


resultado ?:String
n1:number
n2:number


resu:String
celsius:number
fahren:number


iimc:String
Peso:number
altura:number
res:number

verify:String



ionViewCanEnter(){

}

  constructor() {}
    som(){
      var num = Number(this.n1) + Number(this.n2)

      this.resultado = String(num)


  }



  sub(){
    var num = Number(this.n1) - Number(this.n2)

    this.resultado = String(num)

}


mult(){
  var num = Number(this.n1) * Number(this.n2)

  this.resultado = String(num)

}


divi(){
var N2 = Number(this.n2)
  if(N2!=0){
    var num = Number(this.n1) / N2
    this.resultado = String(num)

}else{this.resultado = ''
}


}


clear(){


   this.resultado = ""
}



convert(){
  var r = (this.celsius * 1.8 )+32

  this.resu = 'ªFahr:' + Number(r)
}


imc(){
  var peso = Number(this.Peso)
  var altura = Number(this.altura)

 var rs = this.res = peso / (altura * altura)

 if (rs < 18.5){
  this.verify = "Abaixo do peso..."
}else if ((rs >18.5) && (rs<24.9)){
  this.verify = "Peso normal..."
}else if (rs >25) {
  this.verify = "Acima do peso..."
}

this.iimc = 'Seu imc é de:' + String(rs.toFixed(2)) +"." + this.verify





  }
}



