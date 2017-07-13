[1mdiff --git a/todo/src/js/app.js b/todo/src/js/app.js[m
[1mindex aad1666..1060003 100644[m
[1m--- a/todo/src/js/app.js[m
[1m+++ b/todo/src/js/app.js[m
[36m@@ -13,53 +13,92 @@[m [mif (module.hot) {[m
 [m
 const Title = props => <h1>{props.text}</h1>[m
 [m
[31m-const TodoNew = (props) => {[m
[31m-  return ([m
[31m-    <form className="form-inline" onSubmit={props.handleSubmit}>[m
[31m-      <input[m
[31m-        type="text"[m
[31m-        className="form-control mb-2 mr-sm-2 mb-sm-0"[m
[31m-        value={props.value}[m
[31m-        placeholder={props.placeholder}[m
[31m-        onChange={props.handleChange}[m
[31m-      />[m
[31m-      <button type="submit" className="btn btn-primary">Submit</button>[m
[31m-    </form>[m
[31m-  )[m
[31m-}[m
[31m-[m
[31m-class App extends React.Component {[m
[32m+[m[32mclass TodoNew extends React.Component {[m
   constructor (props) {[m
     super(props)[m
     this.handleSubmit = this.handleSubmit.bind(this)[m
     this.handleChange = this.handleChange.bind(this)[m
     this.state = {[m
[31m-      add: '',[m
[31m-      todos: [][m
[32m+[m[32m      value: this.props.value[m
     }[m
   }[m
 [m
[31m-  handleSubmit (e) {[m
[31m-    e.preventDefault()[m
[31m-    console.log(this.state.add)[m
[32m+[m[32m  handleChange (e) {[m
[32m+[m[32m    this.setState({[m
[32m+[m[32m      value: e.target.value[m
[32m+[m[32m    })[m
   }[m
 [m
[31m-  handleChange (e) {[m
[32m+[m[32m  handleSubmit (e) {[m
[32m+[m[32m    e.preventDefault()[m
[32m+[m[32m    this.props.add(this.state.value)[m
     this.setState({[m
[31m-      add: e.target.value[m
[32m+[m[32m      value: ''[m
     })[m
   }[m
 [m
   render () {[m
     return ([m
[32m+[m[32m      <form className="form-inline" onSubmit={this.handleSubmit}>[m
[32m+[m[32m        <input[m
[32m+[m[32m          type="text"[m
[32m+[m[32m          className="form-control mb-2 mr-sm-2 mb-sm-0"[m
[32m+[m[32m          value={this.state.value}[m
[32m+[m[32m          placeholder={this.props.placeholder}[m
[32m+[m[32m          onChange={this.handleChange}[m
[32m+[m[32m        />[m
[32m+[m[32m        <button type="submit" className="btn btn-primary">Add</button>[m
[32m+[m[32m      </form>[m
[32m+[m[32m    )[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst Todo = (props) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <li className="list-group-item">{props.text}</li>[m
[32m+[m[32m  )[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst TodoList = (props) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <ul className="list-group">[m
[32m+[m[32m      {props.list.map((v, i) => <Todo id={i} text={v.text} done={v.done}/>)}[m
[32m+[m[32m    </ul>[m
[32m+[m[32m  )[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mclass App extends React.Component {[m
[32m+[m[32m  constructor (props) {[m
[32m+[m[32m    super(props)[m
[32m+[m[32m    this.addTodo = this.addTodo.bind(this)[m
[32m+[m[32m    this.state = {[m
[32m+[m[32m      todos: [[m
[32m+[m[32m        {[m
[32m+[m[32m          done: false,[m
[32m+[m[32m          text: 'Todo 1'[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          done: false,[m
[32m+[m[32m          text: 'Todo 2'[m
[32m+[m[32m        }[m
[32m+[m[32m      ][m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  addTodo (value) {[m
[32m+[m[32m    console.log(value)[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  render () {[m
[32m+[m[32m    return ([m
       <div>[m
         <Title text="Todo Application"/>[m
         <TodoNew[m
           placeholder="New Todo"[m
[31m-          value={this.state.add}[m
[31m-          handleSubmit={this.handleSubmit}[m
[31m-          handleChange={this.handleChange}[m
[32m+[m[32m          value=""[m
[32m+[m[32m          add={this.addTodo}[m
         />[m
[32m+[m[32m        <TodoList list={this.state.todos}/>[m
       </div>[m
     )[m
   }[m
