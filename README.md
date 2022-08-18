# State management excercise

On this excercise you will build simple state management mechanism.
The mechanism should functions the same as the familiar state management solutions you are familier with in the industry,
it means that every change should be reflected globally on a single store and each component that subscribe to the changes will get the new state in a reactive way for example:
component A set new state globaly.
Component B subscribe to the changes and get it in a reactive way. 
Your mechansim should support the following operations:

```javascript

Class Store  {

   setState(newState) // assign state globaly that available for the whole application


   getSanpshot() // retrieve the current state


   subscribe(listener) // register new subscriber to the store in order to be notified on changes

}

```


You also need to expose an indirect way to comunicate with store 
so please implement the following hooks:

```javascript

let [globalState, setGlobalState] = useStore() // get the current state and function that can manipulate the state


let projectedState = useSelect(projectionFn) 

// the a slice of the state based on the projection function. for example: 

let counter = useSelect((state) => state.counter)


let globalState = useStateSnapshot() // get snapshot of the state

```


# Bonus

We want to support redo/undo operations 

```javascript

Class Store  {

   redo() 
   
   undo()
   
}
``` 


Also supoort it by hooks:

```javascript

let redo = useRedo()

let undo = useUndo()

```


