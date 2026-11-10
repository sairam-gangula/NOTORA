import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../../../theme/tokens';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
};

export function SectionHeader({ title, actionLabel }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? <Text style={styles.action}>{actionLabel}  ›</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: {
    color: colors.charcoal,
    fontSize: 18,
    fontWeight: '700',
  },
  action: {
    color: colors.mutedText,
    fontSize: 13,
    fontWeight: '600',
  },
});
