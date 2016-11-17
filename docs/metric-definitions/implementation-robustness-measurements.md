# Implementation Robustness Metric

One characteristic that the customer desires in the application is ease of use. 
We believe robustness of implementation is important, because poor robustness 
will impede usability. If the application crashes or silently accepts invalid 
data, the user may not know how to provide valid data and may become frustrated 
with the application. A robust application should handle anomalous input and 
clearly inform the user of any errors.

We derive our metric for robustness from a discussion in the textbook *Software 
Engineering: Modern Approaches*<sup>1</sup>. We define robustness, *R*, of implementation as follows:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R = (sum of robustness) / (number of methods)

where:

 * Sum of robustness = &sum;<sub>all methods</sub> (degree of method's robustness *d<sub>i</subl>*)
 * We understand a *method* to be a logical block of code that implements a single functionality (e.g. a function in a controller).

A method's robustness (*d<sub>i</subl>*) can be one of the following values:

Value | Explanation
--- | ---
0 | No robustness. Application may crash or silently accept anomalous input. User not informed of error, other than observed crash behavior.
0.5 | Some robustness. Application may handle anomalous input but fail to inform user, or application may inform user of error but does not recover (e.g. may leave data stores in inconsistent states).
1 | Complete robustness. All anomalous input is handled and appropriate error messages displayed to the user. Data stores remain in consistent states.

Therefore, *R* &isin; [0,1], with 0 meaning no robustness and 1 meaning complete robustness.

Informally, to measure degree of robustness, we examine the assumptions that a 
method makes (its *preconditions*) and assess "whether the method allows a 
reasonable recovery if the precondition fails" (Braude, 2011, p. 588).

---
<sup>1</sup>Braude, E. J., & Bernstein, M. E. (2011). Software Engineering: Modern Approaches 
(2nd ed.). Hoboken, NJ: John Wiley & Sons.