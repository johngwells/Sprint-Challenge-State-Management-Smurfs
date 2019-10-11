1. What problem does the context API help solve?
   
   used when many of the components use the same props. its a way to share values without having to pass props down to the tree

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
   
   store: holds the data (state) {object} its the source of truth because all components get state for the store.
   actions: handles the logic and tells the reducer how to change state
   reducers: a function that returns state data
   
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  component state is stored locally and doesnt share between components. only its children
  application state is global

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? it looks at actions and if its a function its called
   
5. What is your favorite state management system you've learned and this sprint? Please explain why! 
   
   hooks. its just easier to read & pass data around
