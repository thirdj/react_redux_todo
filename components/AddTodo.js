/**
AddTodo는 버튼이 달린 입력 필드입니다.
onAddClick(text: string)은 버튼을 누르면 불러올 콜백입니다.
**/

import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={e => this.handleClick()}>
          Add
        </button>
      </div>
    );
  }

  handleClick() {
    const node = this.refs.input;
    const text = node.value.trim();
    if (text === '') {
      node.value = '';
      node.focus();
      return false;
    }
    this.props.onAddClick(text);
    node.value = '';
    node.focus();
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
