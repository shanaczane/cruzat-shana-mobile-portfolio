import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, ListRenderItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme, Project } from '../types';

interface ProjectsProps {
  theme: Theme;
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ theme, projects }) => {
  const renderProjectItem: ListRenderItem<Project> = ({ item }) => (
    <TouchableOpacity
      style={[styles.projectCard, { backgroundColor: theme.cardBg }]}
      onPress={() => Linking.openURL(item.link)}
      activeOpacity={0.8}
    >
      <Text style={[styles.projectTitle, { color: theme.text }]}>
        {item.title}
      </Text>
      <Text style={[styles.projectDescription, { color: theme.textSecondary }]}>
        {item.description}
      </Text>
      <View style={styles.techContainer}>
        {item.technologies.map((tech, index) => (
          <View
            key={index}
            style={[styles.techTag, { backgroundColor: theme.tagBg }]}
          >
            <Text style={[styles.techText, { color: theme.accent }]}>
              {tech}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.projectLink}>
        <Text style={[styles.projectLinkText, { color: theme.accent }]}>
          View Project
        </Text>
        <Ionicons name="arrow-forward" size={16} color={theme.accent} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name="folder-open" size={24} color={theme.accent} />
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Projects
        </Text>
      </View>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.projectsList}
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
  projectsList: {
    gap: 20,
  },
  projectCard: {
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  techTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  techText: {
    fontSize: 12,
    fontWeight: "600",
  },
  projectLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  projectLinkText: {
    fontSize: 15,
    fontWeight: "600",
  },
});