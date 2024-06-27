import React from 'react';
import { Meta, Story } from '@storybook/react';
import Img, { ImgProps } from './Img';

export default {
  title: 'Example/Img',
  component: Img,
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
};
