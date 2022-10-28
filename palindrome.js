function palindrome (str) {
  // strip the string of all non-alphanumeric characters
  let s = [...str].map(s => {
    if (/[a-z0-9]/i.test(s)) {
    	return s.toUpperCase();
    }
  }).join('');
  // return if the string equals the reversed string (palindrome)
  return (s === [...s].reverse().join(''));
}
