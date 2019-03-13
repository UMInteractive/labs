window.onload = function () {

      var navRoot = new Vue({
      el: '#navRoot',
      data: {
        menu: '<ul><li><a href="./">Home</a></li><li><a href="3DPrinting">3D Printing</a></li><li><a href="PaperCutter">Paper Cutter</a></li></ul>'
      }
    });


    var navLinks = new Vue({
    el: '#navLinks',
    data: {
      menu: '<ul><li><a href="../">Home</a></li><li><a href="./../3DPrinting">3D Printing</a></li><li><a href="./../PaperCutter">Paper Cutter</a></li></ul>'
    }
  });


}

/*
<ul>
  <li><a href="./">Home</a></li>
  <li><a href="./">Home</a></li>

  <li><a href="3DPrinting">3D Printing</a></li>
  <li><a href="PaperCutter">Paper Cutter</a></li>
</ul>


*/
