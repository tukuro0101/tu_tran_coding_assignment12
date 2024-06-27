import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
  name: 'radioGroup',
  value: 'option1',
  checked: false,
  onChange: (value: string) => alert(value),
};
