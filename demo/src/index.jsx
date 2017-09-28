import React from 'react';
import ReactDOM from 'react-dom';
import ReactBellIcon from '../../src/index.jsx';


class Demo extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }


  render() {
    return (
      <div>
        <ReactBellIcon />
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Demo />, document.getElementById('main'));
});
