function deepComparison(v1, v2) {
  if(!v1 || !v2) {
    if(typeof v1 == typeof v2) {
      return true;
    } else {
      return false;
    }
  }

  if(typeof v1 === typeof {} && typeof v2 === typeof {}) {
    for(key of Object.keys(v1)) {
      if(!deepComparison(v1[key], v2[key])) {
        return false;
      } 
    }

    return true;
  }

  if(v1 === v2) {
    return true;
  }
  
  return false;
}

console.log(deepComparison({name: 'Matheus', numberBig: 3}, {name: 'Matheus', number: 3}));