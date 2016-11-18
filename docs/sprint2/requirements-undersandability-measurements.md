# Requirements Understandability Measurements

Understandability is defined as the degree to which a requirement is understandable by the reader. The amount of comprehensiveness is measured using a checklist that is as mentioned in the book *Software Engineering, Modern Approaches 2nd Edition* written by Eric J. Braude, John Wily & Sons. The checklist is as mentioned below:

* Are the requirements written in a language that its typical reader would understand?
* Do they use the vocabulary of the client problem domain?
* Do the requirements describe only external behaviour - that is, as seen from the user's point of view ("User" can include external systems rather than just people.)
* Do the requirements avoid stating how the problem is to be solved, what techniques are to be used, or how the application is to be designed? (The exceptions to this are when such specifications are indeed required up front)

A requirement is *understandable* if the above checklist is completely met with affirmative results (denoted by "U").
A requirement is *partially understandable* if at least one item from the above checklist is met by the requirement (denoted by "P").
A requirement is *not understandable* is none of the items on the checklist are met by the requirement (denoted by "NU").

## Summary of Results

* 30 detailed requirements total
* ***24 (80%) are understandable***
* ***6 (20%) are partially understandable***
* ***0 (0%) are not understandable***

## Complete Tabular Results

This table gives each detailed requirement of the baseline requirements. Depending on the degree to which a requirement is understandable, we give a "U", "P", or "NU" to that requirement.

Requirement number | Checklist item 1 | Checklist item 2 | Checklist item 3 | Checklist item 4 | Understandable?
--- | --- | --- | --- | --- | ---
1 | Yes | Yes | Yes | Yes | U
2 | Yes | Yes | Yes | Yes | U
2.1 | Yes | Yes | Yes | Yes | U
2.2 | Yes | Yes | Yes | Yes | U
2.2.1 | Yes | Yes | Yes | Yes | U
2.2.2 | Yes | Yes | Yes | Yes | U
2.3 | Yes | Yes | Yes | Yes | U
2.3.1 | Yes | Yes | Yes | Yes | U
2.3.2 | Yes | Yes | Yes | Yes | U
2.3.2.1 | No | Yes | Yes | Yes | P
2.3.2.2 | Yes | Yes | No | No | P
2.3.3 | Yes | Yes | Yes | Yes | U
2.3.4 | Yes | Yes | Yes | Yes | U
2.3.5 | Yes | Yes | Yes | Yes | U
2.4 | No | Yes | Yes | Yes | P
2.4.1 | Yes | Yes | Yes | Yes | U
2.4.1.1 | Yes | Yes | Yes | Yes | U
2.4.1.2 | Yes | Yes | Yes | Yes | U
2.4.1.3 | Yes | Yes | Yes | Yes | U
2.4.1.4 | Yes | Yes | Yes | Yes | U
2.5 | Yes | Yes | Yes | Yes | U
3 | Yes | Yes | Yes | Yes | U
3.1 | No | Yes | Yes | Yes | P
3.2 | Yes | Yes | Yes | Yes | U
4.1 | Yes | Yes | Yes | Yes | U
4.1.1.1 | Yes | Yes | Yes | Yes | U
4.1.1.2 | Yes | Yes | Yes | Yes | U
4.2 | No | Yes | No | Yes | P
4.2.1 | No | Yes | No | Yes | P
4.2.2 | Yes | Yes | Yes | Yes | U


## Observations

* Many of the requirements are partially understandable. These may be necessary in the requirements document as this is the detailed requirements document. Although, we should consider revising the requirements which are not written in a language that its typical reader would understand (i.e. checklist item 1). This could be done by restructuring the requirement sentence, or by solving other checklist items so that it becomes understandable by the typical reader.
