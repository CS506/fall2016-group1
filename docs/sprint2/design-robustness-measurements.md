# Design Robustness Measurements

See [design robustness metric definition](../metric-definitions/design-robustness-metric.md) 
for a discussion of this metric.

## Summary of Results

* Total number of error conditions (C<sub>t</sub>): 4
* Number of error conditions handled by design (C<sub>h</sub>): 0
* ***Robustness metric (R): 0%***

## Complete Results

We organize our measurements based on the feature. For each feature, the first 
column lists the possible error conditions that may occur. The second column 
specifies whether the error condition is handled by the design. If it is 
handled, we give the design artifact(s) that account for the error condition. 

### Create Drip

Error Condition | Handled by design?
--- | ---
No hashtag specifying a bucket name is given | No (but generally handled with the vague term "valid" drip text)
Length of drip text over the limit | No (but generally handled with the vague term "valid" drip text)
Same bucket name given twice | No


### Display Bucket List
Error Condition | Handled by design?
--- | ---
No buckets exist | No