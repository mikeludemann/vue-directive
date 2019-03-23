Vue.directive('format', {
	bind(el, binding, vnode) {
		const modifiers = binding.modifiers;

		if(modifiers.bold){
			el.style.fontWeight = "bold";
		}

		if (modifiers.underline) {
			el.style.textDecoration = "underline";
		}
	}
}); 
