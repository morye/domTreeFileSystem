import React from 'react';
import { List } from '../components/Dom';
import Modal from '../components/Modal';

const App = props => (
  <Modal title="DOM Tree">
    <List nodes={props.nodes.childNodes} type='public' />
  </Modal>
);

export default App;
