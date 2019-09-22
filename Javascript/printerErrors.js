function printerError(s) {
    alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    low = s.toLowerCase(s)
    count = 0
    for (let i = 0 ; i < low.length ; i++) {
      if (alphabets.includes(low[i]) != true) {
        count += 1
      }
    }
    return String(count) + '/' + String(low.length)
}