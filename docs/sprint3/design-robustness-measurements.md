# Design Robustness Measurements

See [design robustness metric definition](../metric-definitions/design-robustness-metric.md) 
for a discussion of this metric.

## Summary of Results

* Total number of error conditions (C<sub>t</sub>): 5
* Number of error conditions handled by design (C<sub>h</sub>): 4
* ***Robustness metric (R): 80%***

## Complete Results

We organize our measurements based on the feature. For each feature, the first 
column lists the possible error conditions that may occur. The second column 
specifies whether the error condition is handled by the design. If it is 
handled, we give the design artifact(s) that handle the error condition. 


### Display Drips for a Bucket

Error Condition | Handled by design?
--- | ---
No drips for the bucket | Yes (activity diagram)


### Logout Button

Error Condition | Handled by design?
--- | ---
User already logged out | No


### Choice of Anonymity
Error Condition | Handled by design?
--- | ---
No hashtag specifying a bucket name is given | Yes (activity diagram)
Length of drip text over the limit | Yes (activity diagram)
Same bucket name given twice | Yes (activity diagram)