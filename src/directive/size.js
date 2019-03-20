Vue.directive('size', {
	bind(el, binding, vnode) {
		el.style.width = binding.value.width;
		el.style.heigth = binding.value.heigth;
	}
}); 
