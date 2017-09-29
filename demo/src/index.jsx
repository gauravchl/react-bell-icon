import React from 'react';
import ReactDOM from 'react-dom';
import ReactBellIcon from '../../src/index.jsx';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


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

  updateState(state, value) {
    this.state[state] = value;
    this.forceUpdate();
  }


  render() {
    let { width, height, animationSpeed, color, animate, active } = this.state;

    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <ReactBellIcon
            width={width}
            height={height}
            animationSpeed={animationSpeed}
            color={color}
            animate={animate}
            active={active}
            style={styles.bell}
          />

        <Card style={{ maxWidth: '600px' }}>
            <CardHeader
              title='Props'
              actAsExpander={true}
              style={{ background: '#efefef' }}
            />

            <Table selectable={false}>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn>active</TableRowColumn>
                  <TableRowColumn><Checkbox defaultChecked={active} onCheck={(e, value) => this.updateState('active', value)} /></TableRowColumn>
                </TableRow>

                <TableRow>
                  <TableRowColumn>animate</TableRowColumn>
                  <TableRowColumn><Checkbox defaultChecked={animate} onCheck={(e, value) => this.updateState('animate', value)} /></TableRowColumn>
                </TableRow>

                <TableRow>
                  <TableRowColumn>animationSpeed</TableRowColumn>
                  <TableRowColumn><TextField defaultValue={animationSpeed} onChange={(e, value) => this.updateState('animationSpeed', value)} hintText='animationSpeed'/></TableRowColumn>
                </TableRow>

                <TableRow>
                  <TableRowColumn>color</TableRowColumn>
                  <TableRowColumn><TextField defaultValue={color} onChange={(e, value) => this.updateState('color', value)} hintText='color'/></TableRowColumn>
                </TableRow>

                <TableRow>
                  <TableRowColumn>width</TableRowColumn>
                  <TableRowColumn><TextField defaultValue={width} onChange={(e, value) => this.updateState('width', value)} hintText='width'/></TableRowColumn>
                </TableRow>

                <TableRow>
                  <TableRowColumn>height</TableRowColumn>
                  <TableRowColumn><TextField defaultValue={height} onChange={(e, value) => this.updateState('height', value)} hintText='height'/></TableRowColumn>
                </TableRow>


              </TableBody>
            </Table>
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Demo />, document.getElementById('main'));
});


const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    padding: '12px',
  },
  bell: {
    margin: '82px'
  }
}
