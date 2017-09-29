import React from 'react';
import ReactDOM from 'react-dom';
import ReactBellIcon from '../../src/index.jsx';


class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      width : '40',
      height : '40',
      animationSpeed : '0.3',
      color : '#000',
      animate: false,
      active : false,
    };
  }


  render() {
    let { width, height, animationSpeed, color, animate, active } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ReactBellIcon
          width={width}
          height={height}
          animationSpeed={animationSpeed}
          color={color}
          animate={animate}
          active={active}
        />
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Demo />, document.getElementById('main'));
});
