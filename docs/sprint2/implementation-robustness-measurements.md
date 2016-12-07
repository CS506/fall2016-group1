# Implementation Robustness Measurements

See [implementation robustness metric definition](../metric-definitions/implementation-robustness-metric.md) 
for a discussion of this metric.

## Summary of Results

 * Sum of robustness: 10.5
 * Number of methods: 11
 * ***Robustness metric (R): 95%***

## Complete Results

The table lists each method and its degree of robustness. For methods that are not
completely robust, we give reasons for our classification.

Method | Degree of robustness | Reasons
--- | --- | ---
Intro view | 1 | 
Home view | 1 | 
Error view | 1 | 
IntroPageController.login() function | 1 |
IntroPageController.logout() function | 1 |
IntroPageController.register() function | 1 |
WelcomeController.displayPage() function<sup>1</sup> | 1 |
WelcomeController.createDrip() function | 0.5 | If `req.user.username` does not fit the length requirements in the model, the application will continue working, but the user will be directed to a useless error page. 
WelcomeController.getBucketNameArray() function | 1 |
BockerRouter.isLoggedIn() function | 1 |
initPassport() > authorize() function | 1 |

---

<sup>1</sup>The `displayPage()` function does not itself handle the error condition
of no buckets found; that is the responsibility of the view to which the bucket list 
is sent.