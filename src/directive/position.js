Vue.directive('position', {
	bind(el, binding, vnode) {
		el.style.position = binding.value;
	}
}); 
