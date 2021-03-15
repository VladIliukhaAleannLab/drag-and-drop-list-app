import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { uuid } from 'uuidv4';
import { WrapCreateTodo } from "../common/styledComponents";

const CreateTodo = ({items, setItems}) => {
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleOk = () => {
    setVisible(false);
    if (value) {
      const PROGRESS = 0;
      const tempItems = [...items];
      tempItems[PROGRESS].items = [{label:value, id: uuid()}, ...tempItems[PROGRESS].items];
      setItems(tempItems)
    }
  };

  return (
    <WrapCreateTodo>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add new task
      </Button>
      <Modal title="Add new task"
             visible={isVisible}
             onOk={handleOk}
             onCancel={() => setVisible(false)}
      >
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </Modal>
    </WrapCreateTodo>
  );
};

export default CreateTodo