import React from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme, TechStackCategory } from '../types';

interface TechStackProps {
  theme: Theme;
  techStack: TechStackCategory[];
}

export const TechStack: React.FC<TechStackProps> = ({ theme, techStack }) => {
  const renderTechStackItem: ListRenderItem<TechStackCategory> = ({ item }) => (
    <View style={[styles.techStackCategory, { backgroundColor: theme.cardBg }]}>
      <Text style={[styles.categoryTitle, { color: theme.text }]}>
        {item.category}
      </Text>
      <View style={styles.skillBadgesContainer}>
        {item.skills.map((skill, index) => (
          <View
            key={index}
            style={[styles.skillBadge, { backgroundColor: theme.tagBg }]}
          >
            <Text style={[styles.skillBadgeText, { color: theme.accent }]}>
              {skill}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name="code-slash" size={24} color={theme.accent} />
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Tech Stack
        </Text>
      </View>
      <FlatList
        data={techStack}
        renderItem={renderTechStackItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.techStackList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  techStackList: {
    gap: 20,
  },
  techStackCategory: {
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  skillBadgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  skillBadgeText: {
    fontSize: 13,
    fontWeight: "600",
  },
});