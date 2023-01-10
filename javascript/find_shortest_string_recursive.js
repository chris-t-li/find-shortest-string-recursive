function findShortestStringRecursive(arr, shortestString = null) {
  if (!arr.length) {
    return shortestString
  }

  const firstElement = arr.shift()

  if (shortestString === null || firstElement.length < shortestString.length) {
    return findShortestStringRecursive(arr, firstElement)
  } else {
    return findShortestStringRecursive(arr, shortestString)
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
