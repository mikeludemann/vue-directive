Vue.directive('color', {
	bind(el, binding, vnode) {
		el.style.color = binding.value;
	}
}); 
