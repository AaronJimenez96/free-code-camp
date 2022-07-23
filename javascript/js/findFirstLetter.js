function validate(){
	let formInputs = Array.prototype.slice.call(document.querySelectorAll('input'));

	formInputs.forEach((valInput) => {
			if(valInput.classList.contains('val-email')){
				extraEval(valInput,0) == true?
						valInput.classList.remove('borde-invalid'):valInput.classList.add('borde-invalid');
			}
			else if(valInput.parentElement.classList.contains('val-tel') || valInput.classList.contains('val-tel')){		
					extraEval(valInput,1) == true?
							valInput.classList.remove('borde-invalid'):valInput.classList.add('borde-invalid');
			}
	});	
}