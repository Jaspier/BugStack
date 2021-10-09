import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
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

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: 'success',
  });

  function addItem(item) {
    if (item.text === '' || item.user === '' || item.priority === '') {
      showAlert('Please enter all fields', 'danger');
      return false;
    }

    item._id = Math.floor(Math.random() * 9000) + 10000;
    item.created = new Date().toString();
    setLogs([...logs, item]);
    showAlert('Bug Log added to Stack');
  }

  function showAlert(message, variant = 'success', seconds = 3000) {
    setAlert({
      show: true,
      message,
      variant,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        variant: 'success',
      });
    }, seconds);
  }

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
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
