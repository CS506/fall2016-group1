# Design Understandability Measurements

See [design understandability metric definition](../metric-definitions/design-understandability-metric.md) for a discussion of this metric.

## Summary of Results

* Understandability of the design diagrams: 89%

## Complete Results

We organize our measurements based on the feature. For each feature, the first column lists the type of design diagram. The second column lists the number of strongly cohesive modules. The third column lists the number of modules connected to very few other modules. The fourth column mentions the understandability percentage of that design diagram.

### Display drips
Design diagram | Strongly cohesive modules | Modules connected to very few others | Understandability%
--- | :---: | :---: | :---:
Activity diagram | 7 | 3 | 71%
Data flow model | 4 | 4 | 100%

### Choice of anonymity 
Design diagram | Strongly cohesive modules | Modules connected to very few others | Understandability%
--- | :---: | :---: | :---:
Activity diagram | 6 | 4 | 83%
Data flow model | 6 | 6 | 100%
State diagram | 2 | 1 | 75%

### Logout 
Design diagram | Strongly cohesive modules | Modules connected to very few others | Understandability%
--- | :---: | :---: | :---:
Activity diagram | 3 | 3 | 100%
State diagram | 2 | 2 | 100%

## Notes

* The source and the sink nodes have not been considered in the module counts.
* Percentages have been rounded off to the previous nearest integer. 
* The combined understandability of all the design diagrams is the average understandability percentage of all design diagrams.

