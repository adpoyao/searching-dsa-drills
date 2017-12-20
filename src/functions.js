///// EXERCISE 3

// **PROMPT**
// Imagine you are looking for a book in a library with a Dewey Decimal index.
// How would you go about it? Can you express this process as a searching algorithm?

// **DATA**
// const library = [
//   '005.133 Mike Cowlishaw: The REXX Language',
//   '005.133 Sams: Teach Yourself C++ In 21 Days',
//   '005.133 Bjarne Stroustrup: The C++ Programming Language',
//   '005.2762 Douglas Crockford: JavaScript: The Good Parts',
//   '005.2762 David Flanagan: JavaScript: The Definitive Guide',
//   '005.44684 Meinhard Schmidt: Windows Vista for Dummies', //It certainly is...
//   '220.52081 Zondervan: NIV Study Bible',
//   '231.7652 Dr Russell Humphries: Starlight and Time',
//   '623.82509051 Frederick Thomas Jane: Jane\'s Fighting Ships', //So far, the ships are winning.
//   '796.8092 Chuck Norris: The Official Chuck Norris Fact Book',
// ];

// let searchBook = (library, search) => {
//   let length = search.length;
//   let results = [];

//   for (let i = 0; i < library.length; i++) {
//     if (library[i].slice(0, length) === search) {
//       results.push(library[i]);
//     }
//   }

//   if (!results.length) {
//     throw new Error('Book not found');
//   } else {
//     return results;
//   }
// };

// console.log(searchBook(library, '7'));

// EXERCISE 4
// Implement a Binary tree and its insertion function. Then implement in-order, pre-order, and post-order functions. Insert the following data in your binary tree -

// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22

// Check your answers:

// A Pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// InOrder: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

'use strict';

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }


  get(key){
    if(this.key === key){
      return this.value;
    }
    else if(key < this.key && this.left){
      return this.left.get(key);
    }
    else if(key > this.key && this.right){
      return this.right.get(key);
    }
    else {
      throw new Error('Key Error');
    }
  }


  remove(key){
    if (this.key === key){
      if (this.left && this.right){
        const successor = this.left._findMax();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left){
        this._replaceWith(this.left);
      }
      else if (this.right){
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left){
      this.left.remove(key);
    }
    else if (key > this.key && this.right){
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }


  _replaceWith(node){
    if(this.parent){
      if(this === this.parent.left){
        this.parent.left = node;
      }
      else if(this === this.parent.right){
        this.parent.right = node;
      }
      if(node){
        node.parent = this.parent;
      }
    }
    else{
      if (node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }


  _findMax(){
    if(!this.right){
      return this;
    }
    else {
      return this.right._findMax();
    }
  }


  _findMin(){
    if(!this.left){
      return this;
    }
    else {
      return this.left._findMin();
    }
  }
}

let newTree = new BinarySearchTree();
let array = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

function growTree(array, tree){
  for(let i=0; i < array.length; i++){
    tree.insert(array[i], 0);
  }
  return tree;
}

growTree(array, newTree);

//Process, Left, Right
function preOrder(tree){
	console.log(tree.key);
	if(tree.left){
    preOrder(tree.left);
  }
  if(tree.right){
    preOrder(tree.right);
  }
}

function inOrder(tree){
  //Left, Process, Right
	if(tree.left){
  	inOrder(tree.left);
	}
	console.log(tree.key);
	if(tree.right){
		inOrder(tree.right);
	}
}

function postOrder(tree){
	if(tree.left){
		postOrder(tree.left);
	}
	if(tree.right){
		postOrder(tree.right);
	}
	console.log(tree.key);
}

postOrder(newTree);