var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   kiyoshitakeuchi.com   https:\/\/www.kiyoshitakeuchi.com   copyright  "
},
{
  "id": "part-1",
  "level": "1",
  "url": "part-1.html",
  "type": "Part",
  "number": "I",
  "title": "Algebraic Geometry",
  "body": " Algebraic Geometry  "
},
{
  "id": "part-2",
  "level": "1",
  "url": "part-2.html",
  "type": "Part",
  "number": "II",
  "title": "Differential Geometry",
  "body": " Differential Geometry  "
},
{
  "id": "machine-learning",
  "level": "1",
  "url": "machine-learning.html",
  "type": "Chapter",
  "number": "1",
  "title": "Machine Learning",
  "body": " Machine Learning   Introduction  I find it easier to remember concepts when I define them in terms of Objects and the Morphisms that act on the objects. Usually a lot of concepts can be reduced to a set , a function that acts on , and its image . To save some brain space, I will define an algorithm to be a pair of functions . Here, computes the time it takes to compute the output. Models are usually the output of the function .   Given an unordered list, the time it will take to order it clearly depends on the size of the list.     Definitions  Perceptron: Consider the set of training datas with labels. In other words, an element of is a set of training data including a label field. A perceptron is a function from to the set of Threshold Functions such that the domain of f(x) is x. A Threshold Function is defined as follows: where . Now, for Neural Networks the definition changes a little. And most other definitions for Neural Networks will be molded similarly defined. This time, the domain and codomain are the product and respectively, where is the set of all single layer neurons.  To define support vector machines, we will need to define a few more concepts and theorems.  Support Vector Machine: A support vector machine is defined as a function , and its  Backpropagation:  Quick-sort: Quicksort is a type of divide and conquer algorithm for sorting lists. Given an unordered list {n_0,\\ldots, n_k}, the algorithm starts by choosing a random element of the list. This element will be called the pivot. By choosing this element, it creates a partition of the list. One partition is the elements on the left  Divide and Conquer   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "machine-learning.html#example-1",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": " Given an unordered list, the time it will take to order it clearly depends on the size of the list.  "
},
{
  "id": "algorithms",
  "level": "1",
  "url": "algorithms.html",
  "type": "Chapter",
  "number": "2",
  "title": "Algorithms",
  "body": " Algorithms   Introduction     "
},
{
  "id": "statistics",
  "level": "1",
  "url": "statistics.html",
  "type": "Chapter",
  "number": "3",
  "title": "Statistics",
  "body": " Statistics   Introduction     "
},
{
  "id": "cybersecurity",
  "level": "1",
  "url": "cybersecurity.html",
  "type": "Chapter",
  "number": "4",
  "title": "Cyber Security",
  "body": " Cyber Security   Introduction     "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
