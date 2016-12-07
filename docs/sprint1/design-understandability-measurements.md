# Design Understandability Measurements

See [design understandability metric definition](../metric-definitions/design-understandability-metric.md) for a discussion of this metric.

## Summary of Results

* Understandability of the design diagrams: 83%

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

