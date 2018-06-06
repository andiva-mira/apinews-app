export function splitIntoLetters() {
	let stringArr = [];
	let letterArr = [];
	const _el = document.querySelectorAll(".el");

	// convert nodeList into array
	//const arr = [].slice.call(_el);
	const arr = [... _el];
	let strings;
	let letters;
	let wrappedLetters;

	//console.log(arr);
	
	for (let i = 0;  i < arr.length; i++) {	

		// add indexed based class to every element
		arr[i].className += `  el--${i + 1}`;
	 	strings = arr[i].innerHTML;

	 	// split words into letters
	 	//letters = strings.split('');
	 	letters = [...strings];	 

	 	// clean pushed elements from nested array 
		letterArr = [];
		for (let j=0; j<letters.length; j++) {
			if (letters[j] != " ") { 
				// wrap with span tag and  add class
				wrappedLetters = `<span class='char char-${j + 1}'> ${letters[j]} </span> `;
				letterArr.push(wrappedLetters);	
			} else {
				wrappedLetters =  `<span class='char char-space'> ${letters[j]} </span> `;
				letterArr.push(wrappedLetters);	
			}

			// replace words with letters in the DOM		
			arr[i].innerHTML = letterArr.join(' ');
		}



		//console.log(letterArr);
		stringArr.push(letterArr);

	}
	

	//console.log(stringArr);

}