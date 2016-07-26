var calculator = {
  screen: null,
  numBtns: null,
  numBtn: null,
  calcBtns: null,
  calcBtn: null,
  enterBtn: null,
  items: {num1:null,operator:null,num2:null},
  add(a,b){
    return a+b;
  },
  minus(a,b){
    return a-b;
  },
  times(a,b){
    return a*b;
  },
  divide(a,b){
    return a/b;
  },
  addCache(item,type){
      //this.items = [];
      var num1 = this.items.num1;
      var num2 = this.items.num2;
      var operator = this.items.operator;
      var itemId = item.childNodes[1].getAttribute("id");
      //NO ITEMS
      if(type === 'num'){
        var itemId = parseInt(itemId);
        if((!num1 && !num2) || (!num1)){
          this.items.num1 = itemId;
        } else if(!num2){
          this.items.num2 = itemId;
        }
      } else if(type === 'calc'){

        if(!operator){
          this.items.operator = itemId;
        }
      }
      this.screen.innerHTML = itemId;
  },
  checkCache(){
    var num1 = this.items.num1;
    var num2 = this.items.num2;
    var operator = this.items.operator;
    if(num1 && num2 && operator){
      var sNum = this[operator](num1,num2); //HIGH ORDER FUNCTION
      this.screen.innerHTML = sNum;
    } else {
      this.screen.innerHTML = "";
    }
    this.items = {num1:null,operator:null,num2:null};
  }
}

calculator.init = function(){
  calculator.numBtns = document.getElementsByClassName("numBtn");
  calculator.calcBtns = document.getElementsByClassName("calcBtn");
  calculator.enterBtn = document.getElementById("calc");
  calculator.screen = document.getElementById("screen");

  //NUMBER BTNs CLICK HANDLER
  for(var i=0; i < calculator.numBtns.length; i++){
    calculator.numBtns[i].addEventListener('click', function(){
      calculator.numBtn = this;
      calculator.addCache(this,'num');
    }, false);
  }

  //CALCULATION BTNs CLICK HANDLER
  for(var i=0; i < calculator.calcBtns.length; i++){
    calculator.calcBtns[i].addEventListener('click',function(){
      calculator.calcBtn = this;
      calculator.addCache(this,'calc');
    }, false)
  }

  //ENTER BTN CLICK HANDLER
  calculator.enterBtn.addEventListener('click',function(){
    calculator.checkCache();
  })
}

window.onload = calculator.init;
