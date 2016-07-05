/*

Todo는 할일 하나입니다.
text: string은 보여줄 텍스트입니다.
completed: boolean은 할일을 완료된것으로 표시할지 여부입니다.
onClick()은 할일을 누르면 호출할 콜백입니다.

*/

import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
