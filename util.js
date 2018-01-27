
function firstDuplicate(a) {
  // Description: 
  // https://codefights.com/interview-practice/task/pMvymcahZ8dY4g75q
  // TODO: performance
  // https://stackoverflow.com/questions/44732552/speeding-up-this-code-for-codefighters-javascript-firstduplicate-function
  let minIndex = a.length + 1;
  for (let i = 0; i < a.length; i++) {
      if(i >= minIndex)
          return a[minIndex];
      let find = a.indexOf(a[i], i + 1);
      if(find >= 0 && minIndex > find)
          minIndex = find;
  }
  return -1;
}