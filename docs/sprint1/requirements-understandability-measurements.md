# Understandability Measurements

Understandability is defined as the degree to which a requirement is understandable by the reader. The amount of comprehensiveness is measured using a checklist that is as mentioned in the book *Software Engineering, Modern Approaches 2nd Edition* written by Eric J. Braude, John Wily & Sons. The checklist is as mentioned below:

* Are the requriements written in a language that its typical reader would understand?
* Do they use the vocabulary of the client problem domain?
* Do the requirements describe only external behaviour - that is, as seen from the user's point of view ("User" can include external systems rather than just people.)
* Do the requirements avoid stating how the problem is to be solved, what techniques are to be used, or how the application is to be designed? (The exceptions to this are when such specifications are indeed required up front)

A requirement is *understandable* if the above checklist is completely met with affirmative results (denoted by "U").
A requirement is *partially understandable* if at least one item from the above checklist is met by the requirement (denoted by "P").
A requirement is *not understandable* is none of the items on the checklist are met by the requirement (denoted by "NU").

## Summary of Results

* 40 detailed requirements total
* ***20 (50%) are understandable***
* ***16 (40%) are partially understandable***
* ***04 (10%) are not understandable***

## Complete Tabular Results

This table gives each detailed requirement of the baseline requirements. Depending on the degree to which a requirement is understandable, we give a "U", "P", or "NU" to that requirement.

Requirement number | Checklist item 1 | Checklist item 2 | Checklist item 3 | Checklist item 4 | Understandable?
--- | --- | --- | --- | --- | ---
1. | Yes | Yes | Yes | Yes | U
1.i. | Yes | Yes | Yes | Yes | U 
1.ii. | Yes | Yes | Yes | Yes | U
2. | Yes | Yes | Yes | Yes | U
2.i | Yes | Yes | Yes | Yes | U
2.ii. | Yes | No | Yes | Yes | P
2.iii. | No | Yes | Yes | Yes | P
2.iv. | No | No | No | Yes | P
2.iv.a. | No | No | No | Yes | P
2.iv.b. | No | No | Yes | Yes | P
2.v. | No | Yes | Yes | Yes | P
2.v.a. | Yes | Yes | No | Yes | P
2.v.b. | No | No | No | Yes | P
2.vi. | Yes | Yes | Yes | Yes | U
2.vi.a. | Yes | Yes | No | Yes | P
2.vi.a.a. | Yes | Yes | Yes | Yes | U
2.vi.b. | Yes | Yes | No | Yes | P
2.vi.b.a. | Yes | Yes | Yes | Yes | U
3. | Yes | Yes | Yes | Yes | U
3.i. | Yes | Yes | Yes | Yes | U
3.ii. | Yes | Yes | Yes | Yes | U
3.ii.a. | Yes | Yes | No | Yes | P
3.ii.b. | Yes | Yes | No | Yes | P
3.ii.c. | Yes | Yes | Yes | Yes | U
3.ii.d. | Yes | Yes | Yes | Yes | U
4.i.a.a. | Yes | Yes | Yes | Yes | U
4.i.a.b. | Yes | Yes | Yes | Yes | U
4.i.b.a. | No | Yes | Yes | Yes | P
4.i.b.b. | Yes | Yes | Yes | Yes | U
4.i.b.c. | No | No | No | No | NU
4.i.c.a. | No | Yes | Yes | Yes | U
4.i.c.b. | Yes | Yes | Yes | Yes | U
4.i.c.c. | Yes | Yes | Yes | Yes | U
4.i.d.a. | Yes | Yes | Yes | Yes | U
4.i.d.b. | No | No | Yes | Yes | P
4.i.d.c. | No | No | Yes | Yes | P
4.ii. | Yes | No | No | Yes | P
4.ii.a. | No | No | No | No | NU
4.ii.b. | No | No | No | No | NU
4.ii.c. | No | No | No | No | NU


## Observations

* Many of the requirements are partially understandable. These may be necessary in the requirements document as this is the detailed requirements document. Although, we should consider revising the requirements which are not written in a language that its typical reader would understand (i.e. checklist item 1). This could be done by restructuring the requirement sentence, or by solving other checklist items so that it becomes understandable by the typical reader.
* There are also some requirements that are not understandable at all. These requirements have to be restructured in order to make the requirements understandable.
