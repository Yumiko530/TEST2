myTotal = 0;  //現在の合計値
myInput = "";　// 現在入力している値
myCalc = "+";　// 合計と入力値の演算子
myFlg = 1;　// 一回前に入力したもの　０：数字　１：演算子

function myValue(myData) { //0~9または小数点ボタンを押した
    myFlg = 0; //一回前に入力したものは数値
    myInput += myData;
    document.myForm.myLine.value = myInput;
}

function myCalculate(myData) { //演算ボタンを押した
    if(myFlg == 0) {
        myFlg = 1;
        myWork = myTotal + myCalc + myInput;
        myTotal = eval(myWork);
        myInput ="";
        document.myForm.myLine.value = myTotal;
    }
    
    if(myData == "=") {　//演算ボタンが=の時
        myTotal = 0;
        myCalc = "+";
    } else {　//演算ボタンが＝以外の時
        myCalc = myData;
    }
}

function myC(){ //クリアボタンを押した時
    myTotal = 0;
    myCalc ="+";
    myInput = "";
    document.myForm.myLine.value = myTotal;
}