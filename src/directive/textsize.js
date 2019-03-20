Vue.directive('textsize', {
	bind(el, binding, vnode) {
		el.style.textSize = binding.value + "px";
	}
}); 
