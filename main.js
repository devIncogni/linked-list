import LinkedList from "./custom-linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log("Size:", list.size); // 6
console.log("Head:", list.head.value); // dog
console.log("Tail:", list.tail.value); // turtle
console.log("At index 2:", list.at(2).value); // parrot

list.pop();
console.log("After pop:", list.toString()); // ... -> ( snake ) -> null

console.log("Contains 'cat':", list.contains("cat")); // true
console.log("Contains 'turtle':", list.contains("turtle")); // false
console.log("Find 'hamster':", list.find("hamster")); // 3
console.log("Find 'turtle':", list.find("turtle")); // null

list.insertAt("rabbit", 2);
console.log("After insertAt(2):", list.toString()); // insert rabbit at index 2

list.removeAt(4);
console.log("After removeAt(4):", list.toString()); // remove index 4 node
