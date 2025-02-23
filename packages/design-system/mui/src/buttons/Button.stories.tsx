import React, { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import type { Meta, StoryObj } from "@storybook/react";

interface ButtonProps {
  children: ReactNode;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  sx?: SxProps;
}

const meta = {
  title: "UI/Buttons/Button",
  component: Object.assign(Button, { displayName: "Button" }),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## MUI 버튼 컴포넌트

#### 주요 특징
- variant: text, outlined, contained 스타일 지원 (default: outlined)
- 아이콘 버튼 구현할 경우 variant는 text로 설정해야 합니다.
        `,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ margin: "1em" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      description: "버튼 스타일 variant",
      control: "select",
      options: ["text", "outlined", "contained"],
      defaultValue: "outlined",
    },
    disabled: {
      description: "버튼 비활성화 여부",
      control: "boolean",
      defaultValue: false,
    },
    children: {
      description: "버튼 내부 컨텐츠",
      control: "object",
    },
    sx: {
      description: "커스텀 스타일 객체",
      control: "object",
    },
  },
  render: (args) => <Button {...args} />,
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "기본(외곽선) 버튼",
  },
};

export const Text: Story = {
  args: {
    children: "텍스트 버튼",
    variant: "text",
  },
};

export const Contained: Story = {
  args: {
    children: "채우기 버튼",
    variant: "contained",
  },
};

export const CustomStyle: Story = {
  args: {
    children: "커스텀 스타일 버튼",
    sx: {
      borderRadius: "0",
      borderColor: "transparent",
      backgroundColor: "#000",
      color: "#fff",
      "&:hover": {
        backgroundColor: "var(--color-light-black)",
        borderColor: "transparent",
      },
    },
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string) => `
const buttonSx = {
  borderRadius: "0",
  borderColor: "transparent",
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "var(--color-light-black)",
    borderColor: "transparent",
  },
};

<Button sx={buttonSx}>
  커스텀 스타일 버튼
</Button>
        `,
      },
    },
  },
};

export const DisabledDefault: Story = {
  args: {
    children: "비활성화 기본 버튼",
    disabled: true,
  },
};

export const DisabledText: Story = {
  args: {
    children: "비활성화 텍스트 버튼",
    variant: "text",
    disabled: true,
  },
};

export const DisabledContained: Story = {
  args: {
    children: "비활성화 채우기 버튼",
    variant: "contained",
    disabled: true,
  },
};

export const withIcon: Story = {
  args: {
    variant: "contained",
    disabled: false,
  },
  render: (args) => (
    <Button {...args}>
      <CloseIcon fontSize="small" />
      <span>아이콘 버튼</span>
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        transform: (code: string) => `
        <Button variant="contained">
  <CloseIcon fontSize="small" />
  <span>아이콘 버튼</span>
</Button>
        `,
      },
    },
  },
};

export const IconButton: Story = {
  args: {
    variant: "text",
  },
  render: (args) => (
    <Button {...args}>
      <CloseIcon fontSize="large" htmlColor="var(--color-primary)" />
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        transform: (code: string) => `
        <Button variant="text">
  <CloseIcon fontSize="large" htmlColor="var(--color-primary)" />
</Button>
        `,
      },
    },
  },
};
