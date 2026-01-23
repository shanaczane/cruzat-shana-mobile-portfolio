import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../types';

interface NavigationProps {
  theme: Theme;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onNavigate: (position: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  isDarkMode,
  onToggleTheme,
  onNavigate,
}) => {
  return (
    <View
      style={[
        styles.sectionNav,
        {
          backgroundColor: theme.navBg,
          shadowColor: isDarkMode ? "#00d4ff" : "#0080ff",
        },
      ]}
    >
      <TouchableOpacity onPress={() => onNavigate(0)} style={styles.navButton}>
        <Text style={[styles.navText, { color: theme.textSecondary }]}>
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate(542)} style={styles.navButton}>
        <Text style={[styles.navText, { color: theme.textSecondary }]}>
          Tech Stack
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate(1358)} style={styles.navButton}>
        <Text style={[styles.navText, { color: theme.textSecondary }]}>
          Projects
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate(2200)} style={styles.navButton}>
        <Text style={[styles.navText, { color: theme.textSecondary }]}>
          Contact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onToggleTheme} style={styles.themeToggle}>
        <Ionicons
          name={isDarkMode ? "sunny" : "moon"}
          size={24}
          color={theme.accent}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    paddingTop: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    elevation: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  navButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  navText: {
    fontSize: 14,
    fontWeight: "600",
  },
  themeToggle: {
    padding: 8,
  },
});