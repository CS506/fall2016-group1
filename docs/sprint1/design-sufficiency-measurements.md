# Design Sufficiency Measurements 

Listing requirements help developers to know what to build. Developers and other stakeholders benefit from the design diagrams in understanding the requirements well and to know, whether the requirements are covered. Simply, they act as base to implement the application.  

*Software Engineering, Modern Approaches 2nd Edition written by Eric J. Braude, John Wily & Sons* says, sufficiency is a measure of how good design accommodates the requirements. Also, it gives a way to measure the sufficiency of a design as follows.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sufficiency metric = Percentage of detailed requirements clearly accommodated by the design

## Summary of Results

#* Sufficiency assured by the design diagrams: 56%

## Complete Results

We organize our measurements based on the requirements provided in revised-requirements.md. The first column lists the requirements considered in the sprint 1. The second column tells whether the requirements are covered by the design. The third column mentions the sufficiency percentage of the design diagram.

Requirements | Handled by design? | Sufficiency%
--- | :---: | :---:
1.i | Yes |	50
1.ii | No	
2	| Yes |	70
2.i |	Yes	
2.ii |	Yes	
2.iii |	Yes	
2.iv.a |	Yes	
2.iv.b |	Yes	
2.v.a |	No	
2.v.b |	Yes	
2.vi.a |	No	
2.vi.b |	No	
3 |	Yes |	83
3.i |	Yes	
3.ii.a |	No	
3.ii.b |	Yes	
3.ii.c |	Yes	
3.ii.d |	Yes	
4.i |	Yes |	22
4.i.a |	No	
4.i.b |	No	
4.i.c |	No	
4.i.d |	No	
4.ii |	Yes	
4.ii.a | No	
4.ii.b |	No	
4.ii.c | No	

# Notes
1.	Percentages have been rounded off to the previous nearest integer.
2.	Total sufficiency of all the design diagrams is the average sufficiency percentage of each set of requirements.

&nbsp;&nbsp;&nbsp;The following tables provide information about what are the requirements covered by our design models. The first column in every table tells the type of design diagram. The second column lists the requirements covered by the design.

### Login
Design diagram |	Requirements Covered
--- | :---:
Activity diagram | 3.i
 | 3.ii(b,c,d)
Data flow model |	3.i
 | 3.ii(b,d)
State diagram |	3.ii(b,d)

### Register
Design diagram |	Requirements Covered
--- | :---:
Activity diagram |	2.i
 | 2.iii
 | 2.iv(a,b)
 | 2.v(b)
Data flow model |	2.i
 | 2.ii
 | 2.iii
 | 2.iv(a,b)
 | 2.v(b) 
State diagram |	2.i
 | 2.ii
 | 2.iv(a,b)
 | 2.v(b)
 

### Use case diagram
Design diagram |	Requirements Covered
--- | :---:
Use case Diagram |	1.i
 | 2
 | 3
 | 4(i,ii)


