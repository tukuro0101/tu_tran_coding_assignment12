import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'Example/HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'Hero Image',
  title: 'Hero Title',
};
