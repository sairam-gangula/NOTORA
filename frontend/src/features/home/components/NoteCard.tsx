import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../../../theme/tokens';
import type { HomeNote } from '../data/mockData';

type NoteCardProps = {
  note: HomeNote;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.accent, { backgroundColor: note.accent }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{note.title}</Text>
        <Text numberOfLines={1} style={styles.preview}>
          {note.preview}
        </Text>
      </View>
      <Text style={styles.updatedAt}>{note.updatedAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 76,
    overflow: 'hidden',
    paddingRight: spacing.md,
  },
  accent: {
    alignSelf: 'stretch',
    width: 6,
  },
  content: {
    flex: 1,
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  title: {
    color: colors.charcoal,
    fontSize: 15,
    fontWeight: '700',
  },
  preview: {
    color: colors.mutedText,
    fontSize: 13,
  },
  updatedAt: {
    color: colors.stone,
    fontSize: 11,
  },
});
