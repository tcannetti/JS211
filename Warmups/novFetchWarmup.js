// we have a server
// that is the backend for a todo app

// 1. add a new item to the list (needs the item info)
// 2. mark an item as done (needs the id of the item to mark done)
// 3. delete and item (need the id of the item)
// 4. fetch all the items (needs nothing else)

//CRUD -> create, read, update, delete

//http://todoapp.com/ //GET -> list all items
//http://todoapp.com/4  //Get -> get item with id 4
//http://todoapp.com/4 //Delete -> delete item with id 4
//http://todoapp.com  //POST + item info (create a new item)
//http://todoapp.com/4  //POST + item info (update item with id 4 with the new info)


let promise = fetch("randomuser.me/api", {
  method: "PUT",
  body: {} // you would have to look at the backend's requirements
  
});