function reverseList(list) 
{
  var node = list; 
  var previous = null; 
  var save;
  while(node)
  {
    save = node.next; 
    node.next = previous;
    previous = node
    node = save
  }
  return previous
} 
a = 
{
  value: 1, 
  next: 
  {
    value: 2, 
    next: 
    {
      value: 3, 
        next:null
    }
  }
};
console.log(reverseList(a))

   