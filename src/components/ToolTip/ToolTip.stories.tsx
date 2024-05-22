import type { Meta, StoryObj } from "@storybook/react";
import { css } from "../../../styled-system/css";
import ToolTip from "./ToolTip";

const meta: Meta<typeof ToolTip> = {
  title: "Example/ToolTip",
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: "text",
        defaultValue: "Hover over me!",
      },
    },
    popupContent: {
      control: {
        type: "text",
        defaultValue: "This is a tooltip",
      },
    },
    theme: {
        control: {
          type: "radio",
          options: ["barbie"],
        },
        defaultValue: undefined,
      },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ p: 20 })}>
        <Story />
      </div>
    ),
  ],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hover over me!",
    popupContent: "This is a tooltip",
  },
};

export const Barbie: Story = {
    args: {
      children: "Hover over me!",
      popupContent: "This is a tooltip",
      theme: "barbie",
    },
  };