# Design Understandability Measurements

Software engineers use software designs as a powerful communication tool to help with understanding how the software is to be implemented. Communication is absolutely necessary if the whole team is to perform in unison and achieve the targets that have been set by the management. In order for the designs to be of good quality and in turn easily and unambiguously communicated they have to be understandable. *Software Engineering, Modern Approaches 2nd Edition* written by Eric J. Braude, John Wily & Sons*, gives a way to measure the understandability of design as follows:

Understandability metric = 1/2 * percentage of strongly cohesive modules + 1/2 * Percentage of modules connected to very few others

where 

* strongly cohesive is when a module depends on or is dependent on another module, and the design does not make sense if either of the two modules was to be removed from the design; and

* connected means that the module is directly connected to another module (the connection could be in-bound or out-bound).

* connected to very few others means that the module has at most one in-bound connection and one out-bound connection. We have modified this parameter to suit out project designs.

## Summary of Results

* Understandability of the design diagrams: 82.5%

## Complete Results

We organize our measurements based on the feature. For each feature, the first column lists the type of design diagram. The second column lists the number of strongly cohesive modules. The third column lists the number of modules connected to very few other modules. The fourth column mentions the understandability percentage of that design diagram.

### Register

Design diagram | Strongly cohesive modules | Modules connected to very few others | Understandability%
--- | :---: | :---: | :---:
Activity diagram | 5 | 3 | 80%
Data flow model | 7 | 5 | 85%
State diagram | 3 | 2 | 83%

### Login   
Design diagram | Strongly cohesive modules | Modules connected to very few others | Understandability%
--- | :---: | :---: | :---:
Activity diagram | 5 | 3 | 80%
Data flow model | 7 | 6 | 92%
State diagram | 2 | 1 | 75%

## Notes

* The source and the sink nodes have not been considered in the module counts.
* Percentages have been rounded off to the previous nearest integer.
* The combined understandability of all the design diagrams is the average understandability percentage of each individual design diagram.

