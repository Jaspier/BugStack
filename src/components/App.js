import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LogItem from './LogItem';
import AddLogItem from './AddLogItem';

const App = () => {
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: 'Bug 1',
      priority: 'low',
      user: 'Allen',
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: 'Bug 2',
      priority: 'moderate',
      user: 'Lance',
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: 'Bug 3',
      priority: 'high',
      user: 'Daru',
      created: new Date().toString(),
    },
  ]);

  function addItem(item) {
    item._id = Math.floor(Math.random() * 9000) + 10000;
    item.created = new Date().toString();
    setLogs([...logs, item]);
  }

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Bug</th>
            <th>User</th>
            <th>Logged</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <LogItem key={log._id} log={log} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
