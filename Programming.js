

 for (var i = 1; i <= 11; i++) {
    document.write(i)
     setTimeout(() => {
        if(i % 2 === 0) {
            document.write(i);
         }else{
            document.write(i);
         }
         document.write("<br>")
     }, 1000);
 }