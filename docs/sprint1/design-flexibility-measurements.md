# Design Flexibility Metrics

According to Cormier et al., The ideal flexible system is one where all of the variables are (potentially) actively adaptable. 
However, for complex systems, it is highly unlikely that all design variables will be capable of being adaptable.
For this reason, robustness is an important aspect of a flexible system design.
When developing a system for mass customization, flexibility is required because the consumer is specifying design requirements that the system must achieve; detailed dimensions for user interfaces may also be specified.

# Mass Dimensional Flexibility: 

Allows for the addition, or removal, of elements in the form of hardware, personnel, or software. 

# Length Dimensional Flexibility: 

Allows for geometric changes within the system after fielding.

# Time Dimensional Flexibility: 

Provides both increased freedom when making decisions about the values of the design and reduces the time required for redesign by utilizing easily modified architectures.

# Metrics:

Let us represent the set of problems as P, the set of implementations as I(7). 

A step in the process of software evolution can be represented as a mapping of the combination of the old problem p_old?P, the shifted problem p_shifted?P, and the old implementation i_old?I into the adjusted implementation i_adjusted?I.

This mapping can thus be represented as the evolution function, a mathematical function E which maps each tuple <pold,pshifted,iold> to the adjusted implementation iadjusted:  
Evolution function is a functional relation E such that  
E : P×P×I ? I 
and E(p_old,p_shifted,i_old)=iadjusted only if i_old realizes p_old and i_adjusted realizes p_shifted. 
Evolution step is a pair E=<<p_old,p_shifted,i_old>,E(p_old,p_shifted,i_old)>

Note: Extensibility is one facet of flexibility, and so another way to measure flexibility, in part, is to make a list of reasonable additions to the application’s requirements and to evaluate the design’s ability to extend and cover them. 

References: 
