import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { Paper } from "@mui/material";

const ReactGridLayout = WidthProvider(RGL);

const generatePanels = (panelsMeta) =>
  panelsMeta.map((panelProps) => {
    return (
      <div
        key={panelProps.id}
        className="panel"
        data-grid={panelProps.datagrid}
      >
        <div className="titlebar">{panelProps.id}</div>
        <div className="content">Panel - {panelProps.content}</div>
      </div>
    );
  });
const PANELS_NESTED = [
  {
    datagrid: {
      x: 0,
      y: 0,
      w: 4,
      h: 3,
    },
    id: 4.1,
    content: "4.1",
  },
  {
    datagrid: {
      x: 4,
      y: 0,
      w: 4,
      h: 3,
    },
    id: 4.2,
    content: (
      <>
        <span className="text">4.2</span>
      </>
    ),
  },
];

const PANELS = [
  {
    datagrid: {
      x: 0,
      y: 0,
      w: 2,
      h: 3,
    },
    id: 1,
    content: "1",
  },
  {
    datagrid: {
      x: 2,
      y: 0,
      w: 4,
      h: 3,
    },
    id: 2,
    content: "2",
  },
  {
    datagrid: {
      x: 6,
      y: 0,
      w: 2,
      h: 3,
    },
    id: 3,
    content: "3",
  },
  {
    datagrid: {
      x: 8,
      y: 0,
      w: 4,
      h: 5,
    },
    id: 4,
    content: (
      <Paper>
        <span className="text">4 - Draggable with Handle</span>
        <div className="nested-grid-container">
          <ReactGridLayout
            draggableCancel=".content"
            draggableHandle=".titlebar"
            className="layout"
            rowHeight={30}
          >
            {generatePanels(PANELS_NESTED)}
          </ReactGridLayout>
        </div>
      </Paper>
    ),
  },
];
/**
 * This layout demonstrates how to use static grid elements.
 * Static elements are not draggable or resizable, and cannot be moved.
 */
export default class NestedGridLayout extends React.PureComponent {
  onLayoutChange(layout) {
    console.log(layout);
  }

  render() {
    return (
      <ReactGridLayout
        className="layout"
        onLayoutChange={this.onLayoutChange}
        rowHeight={30}
        draggableCancel=".content"
        draggableHandle=".titlebar"
      >
        {generatePanels(PANELS)}
      </ReactGridLayout>
    );
  }
}
