function upDate(previewPic){
  document.getElementById('image').innerHTML = previewPic.alt;
  var src = previewPic.getAttribute( "src" );
   var alt = previewPic.getAttribute( "alt" );
          document.getElementById('image').style.backgroundImage = "url('" + src + "')";
	}

	function unDo(){
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    x = document.getElementById('image');
   x.style.backgroundImage = "url('')";
  }