## Storyboard (Round 2)

Experiment 1: Implementation of stck using linked list

### 1. Story Outline:
Stack is a type of queue that in practice is implemented as an area of memory that holds all local variables and parameters  employed by any function, and remembers the order in which functions are called so that function returns occur correctly. Each time a function is called, its local variables and parameters are “pushed onto” the stack. When the function returns,these locals and parameters are “popped.” Because of this, the size of a program’s stack fluctuates constantly as the program is running, but it has some maximum size. stack is as a last in, first out (LIFO) abstract data type and linear data structure. Linked list is a data structure consisting of a group of nodes which together represent a sequence.

The major problem with the stack implemented using an array is, it works only for a fixed number of data values. That means the amount of data must be specified at the beginning of the implementation itself. Stack implemented using an array is not suitable, when we don't know the size of data which we are going to use. A stack data structure can be implemented by using a linked list data structure. The stack implemented using linked list can work for an unlimited number of values. That means, stack implemented using linked list works for the variable size of data. So, there is no need to fix the size at the beginning of the implementation. The Stack implemented using linked list can organize as many data values as we want.

In linked list implementation of a stack, every new element is inserted as 'top' element. That means every newly inserted element is pointed by 'top'. Whenever we want to remove an element from the stack, simply remove the node which is pointed by 'top' by moving 'top' to its previous node in the list. The next field of the first element must be always NULL.

### 2. Story:

In most implementations and also in this simulator, Stack is basically a protected (Singly) Linked List where we can only peek at the head item, push a new item only to the head (insert at head). All operations are O(1).In input area , user will be able to give it number/alphabet/string. After pressing push button it will start its execution of algorithm. As iterations are executing they are highlighted and show its execution and relate output in Simulation section.

With the input values simulator show how push/pop operation happens in linked list based stack data structure. User will be able visualize that in different iterations condition of linked based stack as how each node in link list changes as the opertion are formed.User have access to some playback options also, with which speed of the visualizer

#### 2.1 Set the Visual Stage Description:

In most implementations and also in this simulator, Stack is basically a protected (Singly) Linked List where we can only peek at the head item, push a new item only to the head (insert at head). All operations are O(1).In input area , user will be able to give it number/alphabet/string. After pressing push button it will start its execution of algorithm. As iterations are executing they are highlighted and show its execution and relate output in Simulation section.

#### 2.2 Set User Objectives & Goals:
Describe the objectives and goals in details here : (guide : The user should clearly understand the aims and objective of the experiment. ( how he will begin experiment. ?  in descriptive))

#### 2.3 Set the Pathway Activities:

Describe the pathway activites here : (Guide : Set the pathway activities in line with the learning objectives (LOs)  & with a view to achieve the goals set in round #0 & round#1.  (once he begins, how he will traverse through the entire experiment ? in descriptive))

##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:

The challenge to user is to push , pop using link list
and also in finding complexity of this algorithm.
1. What's the average case time complexity?
2. What's space complexity?
3. What's the best case time complexity?

##### 2.5 Allow pitfalls:
If the user gives negative value or any alphabet then, a pop-up message generated
showing that you have entered wrong input then user have to re-enter the numbers.
After this, the entire program will be restarted.

##### 2.6 Conclusion:
Assessment/evaluation of the pre-test and post-test should run immediately to the user
and marks should even be assigned.

##### 2.7 Equations/formulas: NA
We can use the following steps to insert a new node into the stack...

Step 1 - Create a newNode with given value.
Step 2 - Check whether stack is Empty (top == NULL)
Step 3 - If it is Empty, then set newNode → next = NULL.
Step 4 - If it is Not Empty, then set newNode → next = top.
Step 5 - Finally, set top = newNode.

We can use the following steps to delete a node from the stack...

Step 1 - Check whether stack is Empty (top == NULL).
Step 2 - If it is Empty, then display "Stack is Empty!!! Deletion is not possible!!!" and terminate the function
Step 3 - If it is Not Empty, then define a Node pointer 'temp' and set it to 'top'.
Step 4 - Then set 'top = top → next'.
Step 5 - Finally, delete 'temp'. (free(temp)


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
Storyboard: <a href="Storyboard/carwiper.gif"> [here]</a>
Link to storybaord (.gif file ) here :
(guide: This document should include sketching and description scene wise (duration, action, description). Software to be used for storyboarding : https://wonderunit.com/storyboarder/ (Its a FOSS tool) . tutorial on how to use it https://www.youtube.com/watch?v=LAeCEpG0KX4
