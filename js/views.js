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

  var header = new Vue({
  el: 'header',
  data: {
    header: '<h1 id="title">University of Miami Interactive Media Labs</h1>'
  }
});

  var footer = new Vue({
  el: 'footer',
  data: {
    footer: 'For more information about the UM Interactive Media Program, <a href="https://interactive.miami.edu/">click here</a>.'
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
