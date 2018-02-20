/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [ ]) {
  var count = 0;
  preferences.unshift(0); 
  for (var CountForArray = 1; CountForArray <= (preferences.length - 1); ) {
    if (preferences[CountForArray] === 0) {
      CountForArray++; 
    } 
    else {
      var y, i, x, z, k;
       y = i = CountForArray;
       x = preferences[i];
       i = x;
       z = preferences[i];
       i = z;
       k = preferences[i];
       if (y === k && preferences[z] !== preferences[x] && preferences[y] !== preferences[x]) {
        count++;
        preferences[y] = 0;
        preferences[x] = 0;
        preferences[z] = 0;
      }else {
        preferences[y] = 0;
      }
  }
}
return count;
};
