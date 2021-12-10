/**

Reverse Psychology
For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

Examples
reversePsychology("wash the dishes") ➞ "Do not wash the dishes."
reversePsychology("eat your lunch") ➞ "Do not eat your lunch."
reversePsychology("go to school") ➞ "Do not go to school."

Notes
Are available.
**/

function reversePsychology(s) {
	
  // return `Do not ${s ? s : 'do anything'}.`;
  // return `Do not ${s || `do anything`}.`; 
 /** 
  if (s) {
	return "Do not " + s +".";
  } else {
	return 'Do not do anything.';
  }
  **/

  //return s ? "Do not " + s +"." : "Do not do anything.";
  //return s !== undefined ? `Do not ${s}.` : 'Do not do anything.'
  //return s == null ? "Do not do anything." : "Do not " + s + "."
}

//Let reversePsychology = s => !s ? 'Do not do anything.' : `Do not ${s}.`;
//let reversePsychology = s => `Do not ${s || `do anything`}.`;
//let reversePsychology = s => s ? `Do not ${s}.` : 'Do not do anything.';

console.log( reversePsychology("eat your lunch") );
