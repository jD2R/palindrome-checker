const palindrome = str => {
  // strip the string of all non-alphanumeric characters
  const s = str.replace(/[^0-9a-zA-Z]/, '').toUpperCase();
  // return if the string equals the reversed string (palindrome)
  return s === [...s].reverse().join('');
}
