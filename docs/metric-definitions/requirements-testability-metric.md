# Requirements Testability Metric

We define our metric for testability to be the percentage of detailed requirements 
that are testable. We will use three kinds of test methods in requirements testing 
(adapted from [Requirements Specification and Testing by Tor Stalhane](http://www.idi.ntnu.no/emner/tdt4242/foiler/3-2-Testability.ppt)):

* T – Tests. Input/output. Involves the computer system and peripherals. *(Think: Can we validate that this requirement holds by performing an automated test?)*
* E – Experiments. Input/output but also involves the users. *(Think: Can we validate that this requirement holds by performing a test that involves the users?)*
* I – Inspections. Evaluation based on documents, but does not involve executable test cases. *(Think: Can we verify that this requirements holds through an inspection?)*

A requirement is testable if any of the above test methods can definitely validate 
that the requirement is operative in the finished product (Braude and Bernstein 340).

---

### References

Braude, E. J., & Bernstein, M. E. (2011). Software Engineering: Modern Approaches 
(2nd ed.). Hoboken, NJ: John Wiley & Sons.
