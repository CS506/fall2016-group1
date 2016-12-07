# Design Understandability Metric

Software engineers use software designs as a powerful communication tool to help with understanding how the software is to be implemented. Communication is absolutely necessary if the whole team is to perform in unison and achieve the targets that have been set by the management. In order for the designs to be of good quality and in turn easily and unambiguously communicated they have to be understandable. *Software Engineering, Modern Approaches 2nd Edition* written by Eric J. Braude, John Wily & Sons*, gives a way to measure the understandability of design as follows:

Understandability metric = 1/2 * percentage of strongly cohesive modules + 1/2 * Percentage of modules connected to very few others

where 

* strongly cohesive is when a module depends on or is depended by another module, and the design does not make sense if either of the two modules was to be removed from the design; and

* connected means that the module is directly connected, via an edge, to another module (the connection could be in-bound or out-bound).

* connected to very few others means that the module has at most one in-bound connection and one out-bound connection. We have modified this parameter to suit out project designs.
