# Design Robustness Measurements

According to Aggarwal et al.<sup>1</sup>, a robust design prescribes error conditions that may occur and what to do to "cleanly terminate processing." A robust design accounts for *all* error conditions, not just those specified in the requirements. Error conditions may be exceptional, miscellaneous, or unusual conditions and include user error and bad data. The authors propose metrics for measuring robustness, but these metrics deal with low level details and can be measured only later in the software life cycle. Indeed, other design metrics for measuring robustness are suggested in the literature, but these too rely on implementation details, such as organization of class, cyclomatic complexity, code coverage, use of `catch` exception blocks, etc. We do not use these metrics because we need a measurement of robustness based solely on the design artifacts themselves.

We propose a simple metric for measuring robustness of design that follows from the definition of robustness given above. We define robustness of design, *R*, as follows:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R = C<sub>h</sub>/C<sub>t</sub>

where 

* C<sub>h</sub> is the number of error conditions *that the design can handle*; and

* C<sub>t</sub> is the *total* number of error conditions that could occur in the application. To determine this number, we combine insights gained from (1) the requirements, (2) our interview with the customer, and (3) previous experience of the team members as users of web applications.

## Summary of Results

* Number of error conditions handled by design (C<sub>h</sub>): 6
* Total number of error conditions (C<sub>t</sub>): 12
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
