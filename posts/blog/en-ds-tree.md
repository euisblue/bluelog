---
title:  "Tree"
subtitle: "Learn about Tree properties and terminology, and how to implement one."
date:   "2021-06-26"
lang: "en"
tags:
- tree
---

## What is Tree?

Tree is a non-linear data structure composed of one or more **nodes**.

![Tree Terms](/images/in-post/dsa/tree/tree-terms.jpg)

The top-most (first) node of the tree is called the **root** node. There is only one *root* in a tree and it can have either 
 0 or more **child** node(s).



A tree is actually a **graph**. It is an **acyclic connected graph**, meaning a graph, where all nodes are connected, without a cycle.



![Tree check](/images/in-post/dsa/tree/tree-cycle.jpg)

The left figure is NOT a tree since it has a cycle. On the other hand, the right figure is a tree.

## Properties
- There is one and only one path between any two nodes in a tree.
- A tree with `N` nodes have exactly `N-1` edges.
- A graph is a tree if and only if minimally connected.

## Implementation

```cpp
#include <iostream>
using namespace std;

class Node {
  public:
    int data;
    Node *left;
    Node *right;

    Node(int _data) : data(_data), left(nullptr), right(nullptr) {;} 
};

int main() {
  Node *root = new Node(10);
  root->left = new Node(20);
  root->right = new Node(30);
  root->right->left = new Node(55);
  root->right->right = new Node(70);
  root->left->left = new Node(40);

  return 0;
}
```

Compile and run the code adove, it will generate the following tree.

![Tree](/images/in-post/dsa/tree/tree-output.jpg)

## C/C++: Memory Deallocation

> Feel free to skip this part if you're using a language that handles the memory for you.


One way to delete all nodes in a tree is to use a recursion. I used a *preorder* traversal.
```cpp
void deleteTreeRec(Node *root) {
  if(!root) return;
  deleteTreeRec(root->left);
  deleteTreeRec(root->right);
  delete root;
}
```



We can also delete nodes level by level in a tree.

```cpp
void deleteTree(Node *root) {
  queue<Node *> q;
  q.push(root);

  while(!q.empty()) {
    Node *temp = q.front();
    q.pop();
    if(temp->left) q.push(temp->left);
    if(temp->right) q.push(temp->right);
    delete temp;
  }
}
```

### Practice
- [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/94))
- [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/144))
- [965. Univalued Binary Tree](https://leetcode.com/problems/univalued-binary-tree/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/965/965.cpp))

## Reference
- [https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [https://fe-churi.tistory.com/16](https://fe-churi.tistory.com/16)
- [https://www.baeldung.com/cs/binary-tree-intro](https://www.baeldung.com/cs/binary-tree-intro)
- [https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)
