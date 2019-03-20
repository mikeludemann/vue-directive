Vue.directive('bold', {
	bind(el, binding, vnode) {
		el.style.fontWeight = "bold";
	}
}); 
