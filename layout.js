let acc = document.getElementsByClassName("tab_button");
//       for (let i = 0; i < acc.length; i++)
  
      for (let a of acc.length){
        a.addEventListener("click", function () {
//           for (let j = 0; j < acc.length; j++)
          for (let b of acc.length) {
            if(b.classList.contains("tab_button--active")) {
              b.classList.remove("tab_button--active");
            }
          }
          this.classList.toggle("tab_button--active");
        });
        a.addEventListener("dblclick",function() {
          a.classList.remove("tab_button--active");
        });
      }

