import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is some text content',
};
