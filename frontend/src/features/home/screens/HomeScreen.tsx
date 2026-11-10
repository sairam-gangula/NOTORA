import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NoteCard } from '../components/NoteCard';
import { SectionHeader } from '../components/SectionHeader';
import {
  pinnedNotes,
  recentNotes,
  upcomingReminder,
} from '../data/mockData';
import { colors, radii, spacing } from '../../../theme/tokens';

const quickActions = [
  { icon: '+', label: 'New note' },
  { icon: '✓', label: 'Tasks' },
  { icon: '◷', label: 'Calendar' },
];

export function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good evening,</Text>
            <Text style={styles.name}>Sai 👋</Text>
          </View>
          <View accessibilityLabel="Profile placeholder" style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
        </View>

        <View accessibilityLabel="Search notes" style={styles.search}>
          <View style={styles.searchIcon}>
            <View style={styles.searchLens} />
            <View style={styles.searchHandle} />
          </View>
          <Text style={styles.searchText}>Search your notes...</Text>
        </View>

        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <View key={action.label} style={styles.quickAction}>
              <View style={styles.quickActionIcon}>
                <Text style={styles.quickActionGlyph}>{action.icon}</Text>
              </View>
              <Text style={styles.quickActionLabel}>{action.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.reminder}>
          <View style={styles.reminderIcon}>
            <Text style={styles.reminderGlyph}>◷</Text>
          </View>
          <View style={styles.reminderContent}>
            <Text style={styles.reminderEyebrow}>UPCOMING REMINDER</Text>
            <Text style={styles.reminderTitle}>{upcomingReminder.title}</Text>
            <Text style={styles.reminderTime}>{upcomingReminder.time}</Text>
          </View>
          <Text style={styles.reminderChevron}>›</Text>
        </View>

        <View style={styles.section}>
          <SectionHeader actionLabel="See all" title="Pinned" />
          {pinnedNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader actionLabel="See all" title="Recent notes" />
          <View style={styles.noteList}>
            {recentNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.sand,
    flex: 1,
  },
  content: {
    gap: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greeting: {
    color: colors.charcoal,
    fontSize: 26,
    fontWeight: '700',
  },
  name: {
    color: colors.charcoal,
    fontSize: 26,
    fontWeight: '700',
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.beige,
    borderColor: colors.white,
    borderRadius: radii.pill,
    borderWidth: 2,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  avatarText: {
    color: colors.terracottaDark,
    fontSize: 17,
    fontWeight: '700',
  },
  search: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: radii.pill,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 50,
    paddingHorizontal: spacing.lg,
  },
  searchIcon: {
    height: 18,
    position: 'relative',
    width: 18,
  },
  searchLens: {
    borderColor: colors.mutedText,
    borderRadius: radii.pill,
    borderWidth: 1.7,
    height: 12,
    width: 12,
  },
  searchHandle: {
    backgroundColor: colors.mutedText,
    borderRadius: 1,
    height: 7,
    left: 12,
    position: 'absolute',
    top: 11,
    transform: [{ rotate: '-45deg' }],
    width: 2,
  },
  searchText: {
    color: colors.stone,
    fontSize: 14,
  },
  quickActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  quickAction: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flex: 1,
    gap: spacing.sm,
    paddingVertical: spacing.md,
  },
  quickActionIcon: {
    alignItems: 'center',
    backgroundColor: colors.softTerracotta,
    borderRadius: radii.pill,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  quickActionGlyph: {
    color: colors.terracottaDark,
    fontSize: 19,
    fontWeight: '700',
  },
  quickActionLabel: {
    color: colors.charcoal,
    fontSize: 12,
    fontWeight: '600',
  },
  reminder: {
    alignItems: 'center',
    backgroundColor: colors.softTerracotta,
    borderColor: colors.beige,
    borderRadius: radii.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.lg,
  },
  reminderIcon: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radii.pill,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  reminderGlyph: {
    color: colors.terracotta,
    fontSize: 23,
  },
  reminderContent: {
    flex: 1,
    gap: spacing.xs,
  },
  reminderEyebrow: {
    color: colors.mutedText,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  reminderTitle: {
    color: colors.charcoal,
    fontSize: 15,
    fontWeight: '700',
  },
  reminderTime: {
    color: colors.mutedText,
    fontSize: 12,
  },
  reminderChevron: {
    color: colors.charcoal,
    fontSize: 26,
  },
  section: {
    gap: spacing.sm,
  },
  noteList: {
    gap: spacing.md,
  },
});
