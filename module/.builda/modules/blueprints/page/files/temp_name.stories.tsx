import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';

import %PASCAL_CASE% from './index';
import { WithStore } from '@doc-blocks/with-store';
const meta: Meta<typeof %PASCAL_CASE%> = {
  component: %PASCAL_CASE%,
  parameters: {
    actions: {
      handles: ['click']
    },
    overflow: 'hide-both'
  },
  decorators: [
    //@ts-ignore - this is a 3rd party decorator
    withActions,
    (Story) => {
      return (
        <WithStore>
          <Story />
        </WithStore>
      );
    }
  ]
};

export default meta;

type Story = StoryObj<typeof %PASCAL_CASE%>;

export const Default: Story = {};
