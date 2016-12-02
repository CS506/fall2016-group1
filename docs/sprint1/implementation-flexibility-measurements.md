# Implementation Flexibility Measurements

See [implementation flexibility metric definition](../metric-definitions/implementation-flexibility-metric.md) for a discussion of this metric.


## Summary of Results

 * Number of methods: 8
 * Number of methods flexible: 8
 * ***Flexibility metric: 100% (See Observations)***

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