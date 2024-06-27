import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
  title: 'Example/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Header 1', 'Header 2', 'Header 3'],
  data: [
    ['Cell 1', 'Cell 2', 'Cell 3'],
    ['Cell 4', 'Cell 5', 'Cell 6'],
  ],
};
