This project is from React.js tutorial. I gained insight for following problems by doing it.

1. What is the specialty of JavaScript?
    Object definitions: simply put curly brackets around something and no declarations needed.
    Parameters passing: if only one parameter, pass the name; if more than one, you need curly brackets.(HARD TO DEBUG!)
    Pass a function: function name or ()=>{}. (DON'T CALL THE FUNCTION)

2. How does React approach the GUI programming problem?
    React uses html tags to build GUI elements(component) which is easy and intuitive. The underlying difficulty is how to 
    synchronize data across components. I call it copy-consistency problem. When you develop a typical program, this problem
    is almost nonexistent because the value is stored in memory and any output procedure can either retrieve it by a reference
    or stay outdated. But in GUI programming, when user performed an action, the visible result needs to be updated right away.

    Like other GUI frameworks, React provides an abstraction called 'state'. One component owns the state, and provides a function
    to update it. It passes the function to any component that will receive the action. So the whole synchronization loop is 
    Action -> Special Function to owner -> (implicit) Update the value of all users.

3. How to learn a new library/framework in general?
    There are basically two paths to take:
    1) Theoretical analysis:
         What is the use case of the library/framework? 
         Where is the underlying complexity?
         What are the most useful abstractions?
         How is it compared to other things that I know about?
    2) Hands-on experience:
         Tutorial examples.
         Project examples.
         Build small projects.
    It's best to interweave the two paths: theory guides and distills experience, experience completes and hardens theory.