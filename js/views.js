window.onload = function () {
      var menu = '<ul><li><a href="./">Home</a></li><li><a href="3dprinting.html">3D Printing</a></li><li><a href="vinylcutter.html">Vinyl Cutter</a></li><li><a href="cnc.html">CNC</a></li><li><a href="lasercutter.html">Laser Cutter</a></li><li><a href="equipmentlist.html">Equipment List</a></li></ul>';

      var navRoot = new Vue({
      el: '#navRoot',
      data: {
        menu: menu
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

var title = new Vue({
  el: 'title',
  data: {
    title: 'UM Interactive Media Labs'
  }

});

}

/*
<ul>
  <li><a href="./">Home</a></li>
  <li><a href="3dprinting.html">3D Printing</a></li>
  <li><a href="vinylcutter.html">Vinyl Cutter</a></li>
  <li><a href="cnc.html">CNC</a></li>
  <li><a href="lasercutter.html">Laser Cutter</a></li>
  <li><a href="">Equipment</a></li>
</ul>


*/
