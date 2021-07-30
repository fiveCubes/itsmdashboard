import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Ticket_Reader' },
    position: { x: 100, y: 200 },
  },
//   default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Ticket_Assigner</div> },
    position: { x: 300, y: 200 },
  },
  {
    id: '3',
    // you can also pass a React component as a label
    data: { label: <div>Ticket_Runner</div> },
    position: { x: 600, y: 75 },
  },
  {
    id: '4',
    // you can also pass a React component as a label
    data: { label: <div>Ticket_Validator</div> },
    position: { x: 600, y: 150},
   },
  {
    id: '5',
    // you can also pass a React component as a label
    data: { label: <div>Ticket_Writer</div> },
    position: { x: 600, y: 225 },
  },
  {
    id: '6',
    // you can also pass a React component as a label
    data: { label: <div>Email_Passwords</div> },
    position: { x: 900, y: 225 },
  },
  {
    id: '7',
    type: 'output', // output node
    data: { label: 'Service_Now_Updater' },
    position: { x: 900, y: 150 },
  },
  // animated edge
{ id: 'e1-2', source: '1', target: '2', animated: true },
{ id: 'e2-3', source: '2', target: '3', animated: true },
{ id: 'e2-4', source: '2', target: '4', animated: true },
{ id: 'e2-5', source: '2', target: '5', animated: true },
{ id: 'e5-6', source: '5', target: '6', animated: true },
{ id: 'e5-7', source: '5', target: '7', animated: true },
//   { id: 'e2-3', source: '2', target: '3' },
];

const MicroServices= () => (
  <div style={{ height: 500 }}>
    <ReactFlow elements={elements} />
  </div>
);

export default MicroServices;