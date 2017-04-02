Myo.connect('com.myojs.poseDetector');

Myo.on('status', function(data){
	$('.events').prepend(JSON.stringify(data, null, 2));
})
//Whenever we get a pose event, we'll update the image sources with the active version of the image
Myo.on('fist', function(fist){
	$('img.' + fist).attr('src', 'img/' + fist + '_active.png');
	$('.mainPose img').attr('src', 'img/' + fist + '_active.png');
	$('#blink182')[0].play();
})

//Opposite of above. We also revert the main img to the unlocked state
Myo.on('pose_off', function(pose){
	$('img.' + pose).attr('src', 'img/' + pose + '.png');
	$('.mainPose img').attr('src', 'img/unlocked.png');
	$('#blink182')[0].pause();
});


//Whenever a myo locks we'll switch the main image to a lock image
Myo.on('locked', function(){
	$('.mainPose img').attr('src', 'img/locked.png');
});

//Whenever a myo unlocks we'll switch the main image to a unlock image
Myo.on('unlocked', function(){
	$('.mainPose img').attr('src', 'img/unlocked.png');
});
