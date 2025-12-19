import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    textValue: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    textValue: "Click Me",
    className: "btn btn-outline",
  },
};

export const Secondary: Story = {
  args: {
    textValue: "Cancel",
    className: "btn btn-secondary",
  },
};

export const Outline: Story = {
  args: {
    textValue: "Outline",
    className: "btn btn-outline",
  },
};
