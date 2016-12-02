# Implementation Robustness Measurements

See [implementation robustness metric definition](../metric-definitions/implementation-robustness-metric.md) 
for a discussion of this metric.

## Summary of Results

 * Sum of robustness: 5.5
 * Number of methods: 8
 * ***Robustness metric (R): 69%***

## Complete Results

The table lists each method and its degree of robustness.

Method | Degree of robustness
--- | ---
Intro view | 1
Welcome view | 0
IntroPageController.login() function | 1
IntroPageController.logout() function | 1
IntroPageController.register() function | 0.5
WelcomeController.displayPage() function | 0
isLoggedIn() function | 1
initPassport() > authorize() function | 1