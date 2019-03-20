Vue.directive('animation', {
	bind(el, binding, vnode) {
		const bvalue = binding.value;
		const elemStyle = el.style;

        var originalWidth = elemStyle.width;
        var originalHeight = elemStyle.height;
        var originalTextSize = elemStyle.fontSize;

		el.addEventListener('mouseenter', function(){
            elemStyle.width = bvalue.width;
		    elemStyle.height = bvalue.height;
		    elemStyle.fontSize = bvalue.fontSize;
		    elemStyle.transition = "all 1s ease-in-out";
        });

		el.addEventListener('mouseleave', function(){
            elemStyle.width = originalWidth;
		    elemStyle.height = originalHeight;
		    elemStyle.fontSize = originalTextSize;
		    elemStyle.transition = "all 1s ease-in-out";
        });
	},
    unbind(el, binding, vnode) {
        el.removeEventListener('mouseenter');
        el.removeEventListener('mouseleave');
    }
}); 
