# Implementation Flexibility Metric

One of the basic properties that we would like our implementation to have is
flexibility. This is absolutely important as the requirements, in this era of
computing, keep changing according to the customer's needs, or even simply
due to communication errors. If the implementation is able to accomodate
the changes in the requirements, or even additions to the requirements, it
is said to be flexible.

We derive our metric for flexibility from a discussion in the textbook *Software 
Engineering: Modern Approaches*<sup>1</sup>. There is no direct way to measure the
degree of flexibility but there are attributes which can be measured in order to come
to a conclusion about the degree of flexibility of our implementation. The attributes
are as shown below:

Attribute | Reason | Metric
--- | --- | ---
Document precisely and thoroughly | Cannot adapt code that you don't understand | Percentage of comment lines
Name constants | Understandability | Percentage of numerals with names
Hide variables and methods where possible | Redusing complexity increases understanding | Methods with unusually high or low method size(See Note 1)
Collect common code as helper methods and classes | Reduce complexity | Percentage of repeated code paragraphs
Reduce dependency on global and external variables | Allows method to be used in other contexts | Percentage of external variables
Program at a general level | Applies to more situations | Percentage of generic methods
Use undertsandable variable and funtion names | Understandability | Percentage of names clearly difficult to understand

Note 1: This is a comparative measure. We compare all the methods and consider the ones with the highest standard deviation.

---
<sup>1</sup>Braude, E. J., & Bernstein, M. E. (2011). Software Engineering: Modern Approaches 
(2nd ed.). Hoboken, NJ: John Wiley & Sons.