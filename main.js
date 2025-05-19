import LinkedList from "./custom-linked-list.js";

const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

// console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// console.log("Size:", list.size); // 6
// console.log("Head:", list.head.value); // dog
// console.log("Tail:", list.tail.value); // turtle
// console.log("At index 2:", list.at(2).value); // parrot

// list.pop();
// console.log("After pop:", list.toString()); // ... -> ( snake ) -> null

// console.log("Contains 'cat':", list.contains("cat")); // true
// console.log("Contains 'turtle':", list.contains("turtle")); // false
// console.log("Find 'hamster':", list.find("hamster")); // 3
// console.log("Find 'turtle':", list.find("turtle")); // null

// list.insertAt("rabbit", 2);
// console.log("After insertAt(2):", list.toString()); // insert rabbit at index 2

// list.removeAt(4);
// console.log("After removeAt(4):", list.toString()); // remove index 4 node

// Test on empty list
console.log("Initial empty list:", list.toString()); // null
console.log("Size:", list.size); // 0
console.log("Head:", list.head); // null
console.log("Tail:", list.tail); // null
console.log("At(0):", list.at(0)); // null
console.log("Contains 'x':", list.contains("x")); // false
console.log("Find 'x':", list.find("x")); // null
list.pop(); // Should handle gracefully
console.log("After pop on empty:", list.toString()); // null
list.removeAt(0); // Should handle gracefully

// Prepend to empty
list.prepend("start");
console.log("After prepend to empty:", list.toString()); // ( start ) -> null

// Insert at head
list.insertAt("new head", 0);
console.log("Insert at head (0):", list.toString()); // ( new head ) -> ( start ) -> null

// Append and insert
list.append("end");
list.insertAt("middle", 1);
console.log("After multiple insertions:", list.toString()); // ( new head ) -> ( middle ) -> ( start ) -> ( end ) -> null

// Remove at head
list.removeAt(0);
console.log("After removeAt(0):", list.toString()); // ( middle ) -> ( start ) -> ( end ) -> null

// Remove at tail
list.removeAt(list.size - 1);
console.log("After removing tail:", list.toString()); // ( middle ) -> ( start ) -> null

// Remove at out-of-bound index
list.removeAt(10); // Should do nothing
console.log("After removeAt(10):", list.toString()); // No change

// Insert at out-of-bound index
list.insertAt("ignored", 10); // Should do nothing
console.log("After insertAt(10):", list.toString()); // No change

