## Storyboard (Round 2)

Experiment 1: Implementation of stack using linked list

### 1. Story Outline:
The experiment is based on implementation of stack by linked list. Student approaches the simulator to understand the concept of stack through experimental setup.Discussion about Singly linked list. Learning the concepts and how to implement Linked List.
The objective of the experiment is to implementation of stack using linked list with push and pop operations. The student uses the simulator wherein he/she selects the Push and Pop button, simulate and verify the results. By performing this experiment the student is able to understand the concept and how to implement stack using Linked List.

### 2. Story:

Stacks entered the pc science literature in 1946, when Alan M. Turing used the terms "bury" and "unbury" as a way of calling and strolling back from subroutines.Subroutines had already been implemented in Konrad Zuse's Z4 in 1945.Klaus Samelson and Friedrich L. Bauer of Technical University Munich proposed the thought of a stack in 1955 and filed a patent in 1957.In March 1988, by which era Samelson was deceased, Bauer received the IEEE Computer Pioneer Award for the invention of the stack principle. Similar concepts were developed, independently, by Charles Leonard Hamblin within the half of 1954 and by Wilhelm Kämmerer in 1958.
Stacks are often described using the analogy of a spring-loaded stack of plates in a very cafeteria. Clean plates are placed on top of the stack, pushing down any already there. When a plate is far away from the stack, the one below it pops up to become the new top plate. A stack is a type of queue that in practice is implemented as an area of memory that holds all local variables and parameters employed by any function and remembers the order in which functions are called so that function returns occur correctly. Each time a function is called, its local variables and parameters are “pushed onto” the stack. When the function returns, these locals and parameters are “popped.” Because of this, the size of a program’s stack fluctuates constantly as the program is running, but it has some maximum size. a stack is a last-in, first-out (LIFO) abstract data type, and linear data structure. The PUSH & POP operations occur only at one end of the structure, referred to as the top of the stack. This data structure makes it possible to implement a stack as a singly linked list and a pointer to the top element. A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept an entity to be pushed, the stack is then considered to be in an overflow state. The pop operation removes an item from the top of the stack. In linked list implementation of a stack, every new element is inserted as 'top' element. That means every newly inserted element is pointed by 'top'. Whenever we want to remove an element from the stack, simply remove the node which is pointed by 'top' by moving 'top' to its previous node in the list. The next field of the first element must be always NULL.
A linked list is a data structure consisting of a group of nodes that together represent a sequence.The major problem with the stack implemented using an array is, it works only for a fixed number of data values. That means the amount of data must be specified at the beginning of the implementation itself. Stack implemented using an array is not suitable, when we don't know the size of data that we are going to use. A stack data structure can be implemented by using a linked list data structure. The stack implemented using a linked list can work for an unlimited number of values. That means, stack implemented using the linked list works for the variable size of data. So, there is no need to fix the size at the beginning of the implementation. The Stack implemented using the linked list can organize as many data values as we want.

#### 2.1 Set the Visual Stage Description:

When the student visits the link of the simulator page, he/she sees canvas of screen size (a grey shade).The process starts with a screen in which the user first presses the next button it will give the brief idea of the experiment and simulator button which opens the simulator screen. In the simulator screen, a small animation explaining the basic functioning of the stack is displayed. On scrolling the screen we have a stack visualizer screen where we have various buttons and a text field where the user has to enter an input in case push operation is to be performed. The simulator also has pop/clear operation and some playback option also. 
In this simulator, Stack is a protected (Singly) Linked List where we can only peek at the head item, push a new item only to the head (insert at head). All operations are O(1).In the input area, the user will be able to give it number/alphabet/string. After pressing the push button it will start its execution of the algorithm. As iterations are executing they are highlighted and show its execution and relate output in the Simulation section.

The input values simulator show how to push/pop operation happens in a linked list based stack data structure. Users will be able to visualize that in different iterations condition of linked based stack as how each node in the link list changes as the operation is formed. The user has access to some playback options also, with which speed of the visualizer.


#### 2.2 Set User Objectives & Goals:

1. The prime objective of the experiment is to implement stack using linked list.<br>
2. To be able to implement the linked list.<br>
3. To understand the performance of the implementations of basic linear data structures.<br>
4. To understand push,pop expression formats.<br>
5. To use stacks to evaluate push expressions.<br>
6. Attempt the assessment questions<br>

Goal: To enhance computational skill that how implementation of stack using linked list is used in the system.

#### 2.3 Set the Pathway Activities:

1. The simulator gives a visual display where the user has to click on the Simulator button.
2. Now with the simulator window open, stack animation is displayed at the top
3. On scrolling down, the stack visualizer appears. 
4. Users set playback speed by using a slider.
5. When the push button is pressed with an entry in the input field, Stack operation is performed at the center of the screen.
6. Users can perform various other operations on the stack displayed at the center of the screen.

##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:

The challenge to user is to push , pop using link list
and also in finding complexity of this algorithm.
1. A linear collection of data element given by mean of pointer is called ______________.
<br>A. Graph
<br>B. Queue
<br>C. Stack
<br>D. Linked List
2. Consider a linked list of n elements. What is the time taken to insert an element after element pointed by same pointer ?
<br>A. O(log n)
<br>B. O(n-1)
<br>C. O(n)
<br>D. O(1)
3. Time require to find any element of the linked list is _______.
<br>A. None of these
<br>B. O(n^2)
<br>C. O(n)
<br>D. O(1)
    
##### 2.5 Allow pitfalls:
If the user gives negative value then,it will not accept it

##### 2.6 Conclusion:
When we say "implementing Stack using Linked List", we mean how we can make a Linked List behave like a Stack, after all they are all logical entities. So for any data structure to act as a Stack, it should have push() method to add data on top and pop() method to remove data from top. Which is exactly what we did and hence accomplished to make a Linked List behave as a Stack.

##### 2.7 Equations/formulas:
We can use the following steps to insert a new node into the stack...

PUSH(S, x)
    S.top = S.top+1
    if S.top > S.size
        Error "Stack Overflow"
    else
        S[S.top] = x

We can use the following steps to delete a node from the stack...

POP(S)
    if IS_EMPTY(S)
        Error “Stack Underflow”
    else
        S.top = S.top-1
        return S[S.top+1]

### 3. Flowchart 4
<img src="flowchart/flowchart.png"/><br>
link to flow chart Here : Store in the  /flowchart folder within Round2 folder in your repo
<br>
(guide :The lab proposer should extract logic from the story, prepare a flowchart from the story narration and write the algorithm to execute the black box.  use Google Drawings https://docs.google.com/drawings/ (send the link to your flowchart and also attach .png by exporting it )

### 4. Mindmap:
<img src="mindmap/mindmap.png"/>
 Link to mindmap here : Store the mindmap in both .mm & .png extension in the  /mindmap folder and include link of only .pdf verison here
 <br>
 (guide : An elaborate mind map (connecting all the points in the experiment flow ) should be prepared and submitted by the lab proposer. The mind map should be a clear and detailed document that takes into account all minute intri5acies involved in the development of virtual lab. The mindmap should be self-content and any developer across the globe should be able to code it with all those details. using only FreeMind http://freemind.sourceforge.net/wiki/index.php/Main_Page (send the .png file and also the original .mm extension project file. )

### 5. Storyboard :
![Storyboard animantion](images/storyboard.gif)
<br>
Storyboard: <a href="Storyboard/carwiper.gif"> [here]</a>
Link to storybaord (.gif file ) here :
(guide: This document should include sketching and description scene wise (duration, action, description). Software to be used for storyboarding : https://wonderunit.com/storyboarder/ (Its a FOSS tool) . tutorial on how to use it https://www.youtube.com/watch?v=LAeCEpG0KX4
