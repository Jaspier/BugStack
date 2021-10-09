import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LogItem from './LogItem';

const App = () => {
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: 'Log 1',
      priority: 'low',
      user: 'Allen',
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: 'Log 2',
      priority: 'moderate',
      user: 'Lance',
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: 'Log 3',
      priority: 'high',
      user: 'Daru',
      created: new Date().toString(),
    },
  ]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
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
