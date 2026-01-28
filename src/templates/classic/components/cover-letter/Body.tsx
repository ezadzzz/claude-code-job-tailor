import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { tokens } from '@template-core/design-tokens';
import type { CoverLetterSchema } from '@types';

const { colors, spacing } = tokens.classic;

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: 'column',
    marginBottom: spacing.pagePadding,
  },
  openingLine: {
    fontSize: 10,
    fontFamily: 'Lato',
    color: colors.primary,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  paragraph: {
    fontSize: 10,
    fontFamily: 'Lato',
    color: colors.primary,
    marginBottom: 10,
    lineHeight: 1.5,
  },
});

const Body = ({ data }: { data: CoverLetterSchema }) => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.openingLine}>{data.content.opening_line}</Text>
      {data.content.body.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
};

export default Body;
