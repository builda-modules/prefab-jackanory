import type { Meta, StoryObj } from '@storybook/react';

import %PASCAL_CASE% from './index';
const meta: Meta<typeof %PASCAL_CASE%> = {
  component: %PASCAL_CASE%
};

export default meta;

type Story = StoryObj<typeof %PASCAL_CASE%>;

export const Default: Story = {};

export const WithExampleProp: Story = {
  args: {
    exampleProp: 'I am an example prop'
  }
};
