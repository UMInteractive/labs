window.onload = function () {
      var menu = '<ul><li><strong><a href="./">Home</a></strong></li><li><strong>Labs</strong><ul><li><a href="#eml">Emerging Media Lab</a></li><li><a href="#uel">User Experience Lab</a></li><li><a href="#xrl">XR Lab</a></li></ul></li><li><strong>Resources</strong><ul><li><a href="3dprinting.html">3D Printing</a></li><li><a href="vinylcutter.html">Vinyl Cutter</a></li><li><a href="cnc.html">CNC</a></li><li><a href="lasercutting.html">Laser Cutter</a></li><li><a href="">Equipment</a></li></ul></li></ul>';

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


// <ul>
//   <li><a href="./">Home</a></li>
//   <li>
//     <h5>Labs</h5>
//     <ul>
//     <li><a href="#eml">Emerging Media Lab</a></li>
//     <li><a href="#uel">User Experience Lab</a></li>
//     <li><a href="#xrl">XR Lab</a></li>
//     </ul>
//   </li>
//   <li>
//     <h5>Resources</h5>
//   <ul>
//     <li><a href="3dprinting.html">3D Printing</a></li>
//     <li><a href="vinylcutter.html">Vinyl Cutter</a></li>
//     <li><a href="cnc.html">CNC</a></li>
//     <li><a href="lasercutter.html">Laser Cutter</a></li>
//     <li><a href="">Equipment</a></li>
//   </ul>
//   </li>
//
// </ul>
