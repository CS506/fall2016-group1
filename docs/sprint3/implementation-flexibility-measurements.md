# Implementation Flexibility Measurements

See [implementation flexibility metric definition](../metric-definitions/implementation-flexibility-metric.md) for a discussion of this metric.


## Summary of Results

 * Number of methods: 13
 * Number of methods flexible: 13
 * ***Flexibility metric: 100% (See Observations)***

## Complete Results

The table below lists the degrees of each attribute, for each method in the implementation based on the above metrics.

Method | Comment lines(%) | Named constants(%) | Methods with unusual size(%) | Repeated code(%) | External variables(%) | Generic methods(%) | Variable and function names difficult to understand(%) | Flexibile?
--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
Intro view | 5.06 | 0 | 0 | 0 | 33.34 | 100 | 0 | Yes
Home view | 4.55 | 0 | 0 | 0 | 57.14 | 100 | 0 | Yes
Error view | 13.04 | 0 | 0 | 0 | 100 | 100 | 0 | Yes
Bucket view | 7.89 | 0 | 0 | 0 | 100 | 100 | 0 | Yes
IntroPageController.login() function | 27.27 | 100 | 0 | 0 | 100 | 100 | 0 | Yes
IntroPageController.logout() function | 18.18 | 0 | 0 | 0 | 100 | 100 | 0 | Yes
IntroPageController.register() function | 23.40 | 100 | 0 | 0 | 45.45 | 100 | 0 | Yes
HomeController.displayPage() function | 22.03 | 100 | 0 | 0 | 36.36 | 100 | 0 | Yes
HomeController.createDrip() function | 16.98 | 100 | 0 | 0 | 50 | 100 | 0 | Yes
HomeController.showDrip() function | 23.08 | 100 | 0 | 0 | 40 | 100 | 0 | Yes
HomeController.getBucketNameArray() function | 22.23 | 50 | 0 | 0 | 25 | 100 | 0 | Yes
isLoggedIn() function | 25 | 0 | 0 | 0 | 100 | 100 | 0 | Yes
initPassport() > authorize() function | 17.39 | 0 | 0 | 0 | 62.5 | 100 | 0 | Yes

## Observations

* We can see that some of the metrics are not completely satisfied but with careful observation of the implementation source code we can notice that the code is sufficiently flexible to changes within a desirable range.
* By _desirable range_ we mean a situation when a subpoint of one or more of the core requirements has to be modified to accommodate a change in requirements.
* If the requirements undergo drastic changes then the implementation flexibility goes down drastically.
* There are some attributes, like the number of comment lines, which are present at appropriate places but not in high numbers. These attributes would have a low value based on the actual count but are sufficiently placed in order to account for flexibility in our opinion. We feel that there is no need to clutter the file with a lot of comments in order to explain trivial concepts. 
* One of the areas where we have improved is the named constants (e.g., the status codes have been given meaningful names in order to facilitate easy understanding)
