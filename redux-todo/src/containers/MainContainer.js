import React from "react";
import { connect } from "react-redux";
import Main from "../components/Main";
import { addTodo } from "../actions";
const MainContainer = props => <Main {...props} />;
const mapStateToProps = state => ({
  filter: state.filter,
  todos: state.todos
});

// connect 方法第一次调用时，第二个参数是 mapDipsptchToProps 的简写形式，会将对象下的方法加持上 dispatch ，在展示组件直接调用该方法就是使用 dispatch 触发 action
export default connect(
  mapStateToProps,
  { addTodo }
)(MainContainer);
