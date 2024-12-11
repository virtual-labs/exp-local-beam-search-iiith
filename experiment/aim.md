This experiment is structured to demonstrate the Beam Search algorithm applied to a simple N Queens problem. It provides a step-by-step understanding of the Beam Search algorithm, the heuristic function it uses, and how it balances between breadth-first and greedy search strategies. The experiment also illustrates how Beam Search can efficiently navigate large search spaces and the trade-offs associated with limiting the beam width.

## Objectives:
- **Understand the Beam Search Algorithm**: Develop a thorough understanding of the Beam Search algorithm, including its iterative execution, the use of heuristic evaluation functions, and its strategy of retaining a fixed number of promising nodes (the beam) at each level of the search tree.  

- **Visualize the Search Dynamics**: Observe and interpret the Beam Search algorithm's operation through visual representations of node expansions, heuristic evaluations, and the selection process within the beam.  

- **Trace Node Selection and Pruning**: Understand how the Beam Search algorithm selectively explores the search space by keeping only the top-k nodes (based on heuristic scores) at each level, emphasizing its focus on promising paths while discarding less favorable options.  

- **Address Trade-offs and Challenges**: Analyze the impact of beam width on the algorithm's efficiency and completeness, and explore how a narrow beam may lead to suboptimal solutions while a wider beam may increase computational overhead.  
 