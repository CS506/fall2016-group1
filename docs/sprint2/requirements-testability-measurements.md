# Requirements Testability Measurements

See [requirements testability metric definition](../metric-definitions/requirements-testability-metric.md) 
for a discussion of this metric.

## Summary of Results

* 29 detailed requirements total
* ***20 (69%) are testable***

## Complete Tabular Results

This table gives each detailed requirement of the baselined requirements<sup>1</sup>. If the 
requirement is testable, we give a "T", "E", or "I" depending on the kind of test 
method appropriate. If the requirement is *not* testable, we give a "no" and a 
reason why the requirement is not testable.

Requirement number | Test method | Reason for not being testable
--- | --- | ---
1 | T | 
2 | E | 
2.1 | I | 
2.2 | I | 
2.2.1 | I | 
2.2.2 | I | 
2.3 | no | necessary details given in later requirements
2.3.1 | no | necessary details not given
2.3.2 | no | necessary details given in later requirements
2.3.2.1 | T | 
2.3.2.2 | T | 
2.3.3 | E | 
2.3.4 | no | meaning is vague
2.3.5 | no | meaning is vague
2.4 | no | necessary details given in later requirements
2.4.1 | T | 
2.4.1.1 | T | 
2.4.1.2 | T | 
2.4.1.3 | T | 
2.4.1.4 | E | 
2.5 | E | 
3 | E | 
3.1 | no | meaning is vague
3.2 | E | 
4.1.1.1 | T | 
4.1.1.2 | no | meaning is vague
4.2 | T | 
4.2.1 | T | 
4.2.2 | no | necessary details not given

## Observations

* In this sprint we include reasons for stating a requirement as not being testable. 
This allows us to see a possible "gray area" on the question of whether a requirement is 
testable. For example, some our of requirements do not have enough details in 
themselves to be testable, but these details are given later. Thus, one should 
consult this table for details that cannot be learned from the single testability metric
measurement.

* After we gained some testing experience and read more about software testing, 
some of our intuition about "what is testable" has changed since sprint 1. We have 
considered some of the data requirements testable in this sprint that we would 
not have considered testable in sprint 1.


---
<sup>1</sup>Note that we have left out a few requirement numbers, particularly from 
the data requirements. These "requirements" were more for grouping the other 
requirements and might not be considered requirements themselves.