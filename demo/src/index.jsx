import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactBellIcon from "../../src/index.jsx";
import Checkbox from "material-ui/Checkbox";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardHeader } from "material-ui/Card";
import TextField from "material-ui/TextField";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

const Demo = () => {
  const [state, setState] = useState({
    width: "40",
    height: "40",
    animationSpeed: "0.3",
    color: "#000",
    animate: true,
    active: true
  });

  const updateState = (propName, value) => {
    setState({
      ...state,
      [propName]: value
    });
  };

  const { width, height, animationSpeed, color, animate, active } = state;

  const gcLink = (
    <a style={styles.link} href="https://twitter.com/gauravchl" target="_blank">
      GAURAV
    </a>
  );
  const gitHubLink = (
    <a
      style={styles.link}
      href="https://github.com/gauravchl/react-bell-icon"
      target="_blank"
    >
      GITHUB
    </a>
  );

  console.log(state)

  return (
    <MuiThemeProvider>
      <div style={styles.root}>
        <h2>~~React Bell Icon~~</h2>

        <ReactBellIcon
          width={width}
          height={height}
          animationSpeed={animationSpeed}
          color={color}
          animate={animate}
          active={active}
          style={styles.bell}
        />

      <Card style={{ maxWidth: "600px", margin: "0 auto" }}>
          <CardHeader
            title="Props"
            actAsExpander={true}
            style={{ background: "#efefef" }}
          />
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>

              <Row title="active">
                <Checkbox
                  defaultChecked={active}
                  onCheck={(e, value) => updateState("active", value)}
                  />
              </Row>

              <Row title="animate">
                <Checkbox
                  defaultChecked={animate}
                  onCheck={(e, value) => updateState("animate", value)}
                />
              </Row>

              <Row title="animationSpeed">
                <TextField
                  defaultValue={animationSpeed}
                  onChange={(e, value) =>
                    updateState("animationSpeed", value)
                  }
                  hintText="animationSpeed"
                />
              </Row>
              <Row title="color">
                <TextField
                  defaultValue={color}
                  onChange={(e, value) => updateState("color", value)}
                  hintText="color"
                />
              </Row>

              <Row title="width">
                <TextField
                  defaultValue={width}
                  onChange={(e, value) => updateState("width", value)}
                  hintText="width"
                />
              </Row>
              <Row title="height">
                <TextField
                  defaultValue={height}
                  onChange={(e, value) => updateState("height", value)}
                  hintText="height"
                />
              </Row>
            </TableBody>
          </Table>
        </Card>

        <div style={styles.footer}>
          <p>
            MADE IN 🇮🇳 BY {gcLink}, FIND THIS ON {gitHubLink}{" "}
          </p>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Demo />, document.getElementById("main"));
});

const Row = props => (
  <TableRow>
    <TableRowColumn>{props.title}</TableRowColumn>
    <TableRowColumn>{props.children}</TableRowColumn>
  </TableRow>
)



const styles = {
  root: {
    textAlign: 'center',
    padding: "12px"
  },
  bell: {
    margin: "82px auto",
  },

  link: {
    color: "#666"
  },

  footer: {
    fontSize: "12px",
    color: "#666",
    padding: "0 22px",
    borderTop: "solid 2px #ddd",
    marginTop: "62px"
  }
};
