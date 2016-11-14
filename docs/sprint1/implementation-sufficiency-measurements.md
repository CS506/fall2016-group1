# Implementation Sufficiency Measurements

When moving to the implemenation phase of the development process, it is important to follow your design and implemenemt all of the aspects of the detailed requirements. The idea of suffiency in the implementation stage is somewhat straight forward. It measures how many of the detailed requirements you were about to implement. If any unforseen limitations caused a requirement to be skipped, or pushed to the next sprint, this will show up when testing the sufficiency of the implementation. 

We derive our metric for sufficiency from a discussion in the textbook *Software 
Engineering: Modern Approaches*<sup>1</sup>. We define sufficiency, *S*, of implementation as follows:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S = (Number of detailed requirements implemented) / (Number of detailed requirements in design)


In order to measure the sufficiency of implemementation, we examine the detailed requirements and determine if the implementation phase has addressed and completed each detailed requirement.


## Summary of Results

* Number of detailed requirements implemented: 21
* Number of detailed requirements in design: 24
* ***Suffiency metric (S): %***88

## Complete Results

The table lists each detailed requirement and its sufficiency percentage.

Requirements | Implemented | Sufficiency%
--- | :---: | :---:
1 |  | 100
1.i | Yes | 
1.ii | Yes | 
2 | | 78
2.i | Yes |
2.ii | No |
2.iii | Yes |
2.iv.a | No |	
2.iv.b | Yes |	
2.v.a |	Yes |
2.v.b |	Yes |
2.vi.a | Yes |
2.vi.b | Yes |
3 | | 100
3.i | Yes	
3.ii.a | Yes
3.ii.b | Yes	
3.ii.c | Yes	
3.ii.d | Yes
4 |  | 88
4.i.a |	Yes |
4.i.b |	Yes |
4.i.c |	Yes |
4.i.d |	No |
4.ii | Yes |
4.ii.a | Yes
4.ii.b | Yes	
4.ii.c | Yes


---
<sup>1</sup>Braude, E. J., & Bernstein, M. E. (2011). Software Engineering: Modern Approaches 
(2nd ed.). Hoboken, NJ: John Wiley & Sons.
