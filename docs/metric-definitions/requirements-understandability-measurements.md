# Requirements Understandability Metric

Understandability is defined as the degree to which a requirement is understandable by the reader. The amount of comprehensiveness is measured using a checklist that is as mentioned in the book *Software Engineering, Modern Approaches 2nd Edition* written by Eric J. Braude, John Wily & Sons. The checklist is as mentioned below:

* Are the requirements written in a language that its typical reader would understand?
* Do they use the vocabulary of the client problem domain?
* Do the requirements describe only external behaviour - that is, as seen from the user's point of view ("User" can include external systems rather than just people.)
* Do the requirements avoid stating how the problem is to be solved, what techniques are to be used, or how the application is to be designed? (The exceptions to this are when such specifications are indeed required up front)

A requirement is *understandable* if the above checklist is completely met with affirmative results (denoted by "U").
A requirement is *partially understandable* if at least one item from the above checklist is met by the requirement (denoted by "P").
A requirement is *not understandable* is none of the items on the checklist are met by the requirement (denoted by "NU").