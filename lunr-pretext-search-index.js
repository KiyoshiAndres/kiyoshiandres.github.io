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
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction  I find it easier to remember concepts when I define them in terms of Objects and the Morphisms that act on the objects. Usually a lot of concepts can be reduced to a set , a function that acts on , and its image .  "
},
{
  "id": "section-2-title",
  "level": "1",
  "url": "section-2-title.html",
  "type": "Section",
  "number": "1.2",
  "title": "Definitions",
  "body": " Definitions  Perceptron: Consider the set of training datas with labels. A perceptron is a function from to the set of Threshold Functions such that the domain of f(x) is x. A Threshold Function is defined as follows: where . Now, for Neural Networks the definition changes a little. And most other definitions for Neural Networks will be molded similarly defined. This time, the domain and codomain are the product and respectively, where is the set of all single layer neurons.  Support Vector Machine:  Backpropagation:  "
},
{
  "id": "section-2-1title",
  "level": "1",
  "url": "section-2-1title.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction    "
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
