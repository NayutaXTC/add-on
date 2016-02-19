var videoEl = document.querySelector('.dress .container video')
if(videoEl == null){
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'dress';
	div.innerHTML = '<div class="container"><video width="600" height="400" autoplay="" name="media"><source type="video/mp4"></video></div>'
	var video = document.querySelector('.dress .container video');
	video.style.visibility = "hidden";
	video.src = "http://g-ecx.images-amazon.com/images/G/01/gateway/yiyiz/91BC9GgAhHS._CB299494718_.mp4";
	video.load();
	video.addEventListener('loadeddata', function() {
	   video.style.visibility = "visible"
	   video.play();
	}, false);
	video.onerror = function() {
		alert("( Try another page.");
	};
}
else{
	videoEl.play();
}
