import { Tab } from '@headlessui/react';
import React from 'react';

const TaskLists = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>
          {({ selected }) => {
            <button className={selected ? 'text-white' : 'text-slate-600'}>In progress</button>;
          }}
        </Tab>
        <Tab>Completed</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Tasks in progress</Tab.Panel>
        <Tab.Panel>Tasks completed</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TaskLists;
