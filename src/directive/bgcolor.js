Vue.directive('bgcolor', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = binding.value;
	}
}); 
