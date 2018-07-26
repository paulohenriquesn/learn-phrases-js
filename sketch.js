var __phrase__ = decodeURI(location.search.substr(1,location.search.length));

var alphabet = "ABCEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz";
var phrase = "";
var phraseBckp = "";

var __nph__ = "";

fitness = __phrase__.length;
calcf = 0;

nota = 0;
defnota = 0;

var learn = {
  people:[],
  generations:[],
  goods:[],
  repeats:[],
  counter:0,
  achou:false
}

$("#setPhrase").click(()=> {
  location.href = "?" + $("#inputphrase").val();
});


window.setInterval(()=>{
  $("#generations").text("Learning: " + __phrase__ + " [Generations: " + learn.counter + "]");
  if(phrase.length <15){
  var randomAlpha = Math.floor(Math.random() * alphabet.length);
  phrase = phrase + alphabet[randomAlpha];
}else{
  //fitness = fitness+1;
  for(c=0;c<learn.goods.length;c++){
    if(learn.repeats.includes(learn.goods[c])){

    }else{
      if(learn.achou == true){
        //
      }else{
      if(learn.goods[c] == __phrase__){
        $("body").append("<li><font color='green'>" + learn.goods[c] + " [" + learn.counter + "]" + " [" + nota + "]" + "</font></li>");
        learn.achou = true;
      }else{
    $("body").append("<li><font color='black'>" + learn.goods[c] + " [" + learn.counter + "]" + " [" + nota + "]" + "</font></li>");
  }
  }
    learn.repeats.push(learn.goods[c]);
  }
  }
//  if(fitness>5){

      for(x=0;x<phrase.length;x++){
      if(__phrase__.includes(phrase[x])){
        phraseBckp = phraseBckp + phrase[x];
        learn.generations.push(phraseBckp);
        if(learn.achou == false){
        learn.counter = learn.counter +1;
      }
      }
      }

      for(c=0;c<learn.generations.length;c++){
        for(p=0;p<learn.generations[c].length;p++){
          for(w=0;w<__phrase__.length;w++){
            if(phrase[w] == learn.generations[c][p]){
              learn.people.push(learn.generations[c]);
              if(learn.achou == false){
              learn.counter = learn.counter +1;
            }
            }
          }
        }
      }

      //
      for(c=0;c<learn.people.length;c++){
          for(p=0;p<learn.people[c].length;p++){
          if(learn.people[c][p] == __phrase__[p]){
            calcf = calcf +1;
            defnota = defnota +1;
            if(calcf>fitness){
            learn.goods.push(learn.people[c]);
            learn.counter = learn.counter+1;
            if(calcf>nota){
              nota = defnota;
              __nph__ = learn.people[c];
              defnota = 0;
            }
            defnota=0;
            calcf=0;
          }
          }
        }
      }
      //

      for(c=0;c<__nph__.length;c++){
          for(p=0;p<__nph__[c].length;p++){
              if(__nph__[c][p] == __phrase__[p]){
                if(learn.goods.includes(__nph__)){
                }else{
                  learn.goods.push(__nph__);
                }
              }
          }
      }

      phraseBckp = "";

    //learn.history.push(phrase);
  phrase = "";
}
},1);
