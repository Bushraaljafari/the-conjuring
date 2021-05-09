// start from hear
 
 'by bushra aljafari'
var userName ='bushra'; 
 alert('made by '+userName);

 var x ='my age is ';
 var y ='2';
 var s ='4';
 alert(x+y+s);

  var theConjuring=prompt('do you like this movie?');
        while (theConjuring!=='yes' && theConjuring!=='no'){
theConjuring=prompt('please answer only with yes or no');

  }

 var age=prompt('whats your age?');
alert('Here is a recommendation for a movie that suits your age')

 if(age>=18){
 console.log('then you should watch it and this')
 document.write('<img src="https://m.jwabnet.net/uploads/thumbs/b8c93a617-1.jpg" width="200px">')
  document.write(
      '<a href=" https://back.egybest.co/movie/conjuring-the-devil-2020/">this is a link for new released movie </a>')

  }
else {
  console.log('this film is not for your age')
  document.write('<img src="https://m.media-amazon.com/images/M/MV5BMjA1OTUzNTQ5Ml5BMl5BanBnXkFtZTgwODQ4NDkxNjE@._V1_UX182_CR0,0,182,268_AL_.jpg" width="200px">')
  document.write(
      '<a href=" https://back.egybest.co/movie/goosebumps-2-haunted-halloween-2018/?ref=search-p1"> Watch Goosebumps</a>')


  }
     
/*
     var loveHeart =prompt('last Question how many love Heart would you give my website');

 for(var i=1;i<=loveHeart;i++){
          document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png" width="50px">') 
         document.write('<h3>' +i +' </h3>')
      }*/
      


   var countLoveHeart =function(){
    var loveHeart =prompt('last Question how many love Heart would you give my website');

    var loveHeartResult='';

     for(var i=1;i<=loveHeart;i++){
        loveHeartResult=loveHeartResult+'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png" width="50px">';

        loveHeartResult+=('<h3>' +i +' </h3>');}

      return loveHeartResult;

   }

   function data(name,year,age){
       
       
      console.log(name , year , age);
   }
  
       
      
      
      








 






