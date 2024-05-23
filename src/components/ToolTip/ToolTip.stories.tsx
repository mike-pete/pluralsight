import type { Meta, StoryObj } from "@storybook/react";
import { css } from "../../../styled-system/css";
import ToolTip from "./ToolTip";

const meta: Meta<typeof ToolTip> = {
  title: "Example/ToolTip",
  component: ToolTip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "The content that will trigger the tooltip",
      control: {
        type: "text",
        defaultValue: "Hover over me!",
      },
    },
    popupContent: {
      description: "The hoverable content of the tooltip",
      control: {
        type: "text",
        defaultValue: "This is a tooltip",
      },
    },
    visual: {
      description: "The visual style of the tooltip",
      type: "string",
      control: {
        type: "select",
      },
      options: ["barbie", undefined],
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Standard tooltip",
    popupContent: "This is a tooltip",
  },
};

export const Barbie: Story = {
  args: {
    children: "Barbie tooltip",
    popupContent: "This is a tooltip",
    visual: "barbie",
  },
};
