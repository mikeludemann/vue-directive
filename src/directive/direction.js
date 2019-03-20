Vue.directive('direction', {
	bind(el, binding, vnode) {
		el.style.direction = binding.value;
	}
}); 
