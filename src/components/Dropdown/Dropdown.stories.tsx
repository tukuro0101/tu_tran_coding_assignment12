import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onChange: (value: string) => alert(value),
};
