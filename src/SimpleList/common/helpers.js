import { uuid } from 'uuidv4';

export const INIT_DATA = [
  {
    id: 'todo',
    items: []
  },
  {
    id: 'progress',
    items: []
  },
  {
    id: 'complete',
    items: []
  }
];

export const FAKE_DATA = [
  {
    id: 'todo',
    items: [
      {id: uuid(), label: 'Code refactoring'},
      {id: uuid(), label: 'Fix a bug'},
    ]
  },
  {
    id: 'progress',
    items: [
      {id: uuid(), label: 'Add new feature'}
    ]
  },
  {
    id: 'complete',
    items: [
      {id: uuid(), label: 'Create APP'},
    ]
  }
];