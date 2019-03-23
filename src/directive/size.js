Vue.directive('size', {
	bind(el, binding, vnode) {
		el.style.width = binding.value.width;
		el.style.height = binding.value.height;
	}
}); 
