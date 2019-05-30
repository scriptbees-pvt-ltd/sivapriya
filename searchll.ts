var linkedList = {
    element: 'head',
    next: {
      element: 'SF',
      next: {
        element: 'LA',
        next: {
          element: 'SD',
          next: null
          }
        }
      }
    }
  function getItem(city, list) {
    var item = list
    if (item.element != city) {
      item = item.next
      getItem(city, item)
    }
    return item
  }
  console.log( getItem('SD', linkedList ));