import React from 'react';
import { Text as ReactTextView, TextProps, StyleSheet, TextStyle } from 'react-native';

type TextVariant = 'heading1' | 'heading2' | 'heading3' | 'normal' | 'hint' | 'error' | 'caption';

type AppTextProps = TextProps & {
  variant?: TextVariant,
  bold?: boolean,
  style?: TextStyle | TextStyle[],
  children: React.ReactNode,
}

const Text: React.FC<AppTextProps> = ({
  variant = 'normal',
  bold = false,
  style,
  children,
  ...rest
}) => {
  const stylesList = [styles[variant], style];
  if (bold) stylesList.push(styles['bold']);
  return (
    <ReactTextView style={stylesList} {...rest}>
      {children}
    </ReactTextView>
  );
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 18,
    color: '#222',
  },
  heading2: {
    fontSize: 16,
    color: '#222',
  },
  heading3: {
    fontSize: 14,
    color: '#222',
  },
  normal: {
    fontSize: 14,
    color: '#333',
  },
  hint: {
    fontSize: 12,
    color: '#888',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  caption: {
    fontSize: 12,
    color: '#666',
  },
  bold: {
    fontWeight: 'bold',
  }
});

export default Text;
