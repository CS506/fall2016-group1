# Design Robustness Measurements

See [design robustness metric definition](../metric-definitions/design-robustness-metric.md) 
for a discussion of this metric.

## Summary of Results

* Total number of error conditions (C<sub>t</sub>): 12
* Number of error conditions handled by design (C<sub>h</sub>): 6
* ***Robustness metric (R): 50%***

## Complete Results

We organize our measurements based on the feature. For each feature, the first column lists the possible error conditions that may occur. The second column specifies whether the error condition is handled by the design. If it is handled, we give the design artifact(s) that account for the error condition.

### Register

Error Condition | Handled by design?
--- | ---
Name value does not satisfy the length requirement. | Yes (activity, data flow)
Username value does not satisfy the length requirement. | Yes (activity, data flow)
Password value does not satisfy the length requirement. | Yes (activity, data flow)
Email value is not valid. | Yes (activity, data flow)
Email value already exists. | No
Username value already exists.  | No
User already logged in. | No

### Login   
Error Condition | Handled by design?
--- | ---
Username value does not satisfy the length requirement. | No
Password value does not satisfy the length requirement. | No
Username not found in the database. | Yes (activity, data flow, activity)
Username found in the database, but passwords do not match. | Yes (activity, data flow, activity)
User already logged in. | No


---
<sup>1</sup>Aggarwal, K. K., Singh, Y., Kaur, A., & Malhotra, R. (2007). Software Design Metrics for Object-Oriented Software. *Journal of Object Technology, 6*(1), 121-138.
