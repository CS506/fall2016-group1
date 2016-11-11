# Implementation Flexibility Measurements

One of the basic properties that we would like our implementation to have is
flexibility. This is absolutely important as the requirements, in this era of
computing, keep changing according to the customer's needs, or even simply
due to communication errors. If the implementation is able to accomodate
the changes in the requirements, or even additions to the requirements, it
is said to be flexible.

We derive our metric for flexibility from a discussion in the textbook *Software 
Engineering: Modern Approaches*<sup>1</sup>. There is no direct way to measure the
degree of flexibility but there are attributes which can be measured in order to come
to a conclision about the degree of flexibility of our implementation. The attributes
are as shown below:

Attribute | Reason | Metric
--- | ---
Document precisely and thoroughly | Cannot adapt code that you don't understand | Percentage of comment lines
Name constants | Understandability | Percentage of numerals with names
Hide variables and methods where possible | Redusing complexity increases understanding | Methods with unusually high or low method size(See Note 1)
Collect common code as helper methods and classes | Reduce complexity | Percentage of repeated code paragraphs
Reduce dependency on global and external variables | Allows method to be used in other contexts | Percentage of external variables
Program at a general level | Applies to more situations | Percentage of generic methods
Use undertsandable variable and funtion names | Understandability | Percentage of names clearly difficult to understand

Note 1: This is a comparative measure. We compare all the methods and consider the ones with the highest standard deviation.

Below are the results obtained by measuring the above attributes using their specific metrics.


## Summary of Results

 * Number of methods: 8
 * Number of methods flexible: 8
 * ***Flexibility metric (R): 100% (See Observations)***

## Complete Results

The table below lists the degrees of each attribute, for each method in the implementation based on the above metrics.

Method | Documentation | Named constants | Hide where possible | Common code | External variables | Generic programming | Understandable variable and function names | Flexibile?
--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
Intro view | 0 | 100 | 0 | 0 | 17.65 | 100 | 0 | Yes
Welcome view | 0 | 100 | 0 | 0 | 100 | 100 | 0 | Yes
IntroPageController.login() function | 27.27 | 0 | 0 | 0 | 25 | 100 | 0 | Yes
IntroPageController.logout() function | 18.18 | 100 | 0 | 0 | 0 | 100 | 0 | Yes
IntroPageController.register() function | 20 | 100 | 0 | 0 | 0 | 100 | 0 | Yes
WelcomeController.displayPage() function | 0 | 100 | 0 | 0 | 33.34 | 100 | 0 | Yes
isLoggedIn() function | 20 | 100 | 0 | 0 | 0 | 100 | 0 | Yes
initPassport() > authorize() function | 20 | 100 | 0 | 0 | 33.34 | 100 | 0 | Yes

## Observations

* We can see that some of the mertics are not completely satisfied but with careful observation of the implementation source code we can notice that the code is sufficiently flexible to changes within a desirable range.
* If the requirements undergo drastic changes then the implementation flexibility goes down drastically.

---
<sup>1</sup>Braude, E. J., & Bernstein, M. E. (2011). Software Engineering: Modern Approaches 
(2nd ed.). Hoboken, NJ: John Wiley & Sons.
