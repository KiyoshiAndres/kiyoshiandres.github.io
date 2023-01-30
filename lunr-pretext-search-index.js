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
  "id": "calculus",
  "level": "1",
  "url": "calculus.html",
  "type": "Chapter",
  "number": "1",
  "title": "Calculus",
  "body": " Calculus   Introduction  Directly to problem solving.    Lagrange Multipliers  For some reason, the method of Lagrange Multipliers shows up frequently in entrance exams to universities in Japan. This method helps with finding the maxima and minima of a function given some constraint .    Integrals  There's various methods of solving integrals that are tested in Japan. The main ones I can think of are using the Residue Theorem, differentiating under the integral sign, and change of variables. Change of variables will be treated elsewhere.   "
},
{
  "id": "machine-learning",
  "level": "1",
  "url": "machine-learning.html",
  "type": "Chapter",
  "number": "2",
  "title": "Machine Learning",
  "body": " Machine Learning   Introduction  I find it easier to remember concepts when I define them in terms of Objects and the Morphisms that act on the objects. Usually a lot of concepts can be reduced to a set , a function that acts on , and its image . To save some brain space, I will define an algorithm to be a pair of functions . Here, computes the time it takes to compute the output. Models are usually the output of the function .   Given an unordered list, the time it will take to order it clearly depends on the size of the list.     Definitions  Perceptron: Consider the set of training datas with labels. In other words, an element of is a set of training data including a label field. A perceptron is a function from to the set of Threshold Functions such that the domain of f(x) is x. A Threshold Function is defined as follows: where . Now, for Neural Networks the definition changes a little. And most other definitions for Neural Networks will be molded similarly defined. This time, the domain and codomain are the product and respectively, where is the set of all single layer neurons.  To define support vector machines, we will need to define a few more concepts and theorems.  Support Vector Machine: A support vector machine is defined as a function , and its  Backpropagation:  Quick-sort: Quicksort is a type of divide and conquer algorithm for sorting lists. Given an unordered list {n_0,\\ldots, n_k}, the algorithm starts by choosing a random element of the list. This element will be called the pivot. By choosing this element, it creates a partition of the list. One partition is the elements on the left  Divide and Conquer   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "machine-learning.html#example-1",
  "type": "Example",
  "number": "2.1",
  "title": "",
  "body": " Given an unordered list, the time it will take to order it clearly depends on the size of the list.  "
},
{
  "id": "algorithms",
  "level": "1",
  "url": "algorithms.html",
  "type": "Chapter",
  "number": "3",
  "title": "Algorithms",
  "body": " Algorithms   Introduction     "
},
{
  "id": "statistics",
  "level": "1",
  "url": "statistics.html",
  "type": "Chapter",
  "number": "4",
  "title": "Statistics",
  "body": " Statistics   Introduction  I find it easier to define things in the formalism of measure theory. Proofs feel more rigorous to me that way.    Definitions  A probability space is  The sample space  A random variable  Expectation  Variance  Covariance   "
},
{
  "id": "cybersecurity",
  "level": "1",
  "url": "cybersecurity.html",
  "type": "Chapter",
  "number": "5",
  "title": "Cyber Security",
  "body": " Cyber Security   Introduction      Definitions  Targeted Email Attack: Targeted refers to the nature of the attack being destined for a specific organization or industry. Email refers to the medium by which the attack is done. An example of this is an email containing malware to steal the data of a certain company. A popular type of targeted email attack is called spear phishing. It involves research on the victim, and tailoring the email to them.     "
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
