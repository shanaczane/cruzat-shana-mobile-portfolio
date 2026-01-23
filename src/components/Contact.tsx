import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme, ProfileData } from '../types';

interface ContactProps {
  theme: Theme;
  profileData: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ theme, profileData }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name="mail" size={24} color={theme.accent} />
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Get In Touch
        </Text>
      </View>
      <View style={styles.contactContainer}>
        <TouchableOpacity
          style={[styles.contactItem, { backgroundColor: theme.cardBg }]}
          onPress={() => Linking.openURL(`mailto:${profileData.email}`)}
        >
          <Ionicons name="mail-outline" size={24} color={theme.accent} />
          <Text style={[styles.contactText, { color: theme.text }]}>
            {profileData.email}
          </Text>
        </TouchableOpacity>

        <View style={styles.socialLinks}>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: theme.cardBg }]}
            onPress={() => Linking.openURL(profileData.github)}
          >
            <Ionicons name="logo-github" size={28} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: theme.cardBg }]}
            onPress={() => Linking.openURL(profileData.linkedin)}
          >
            <Ionicons name="logo-linkedin" size={28} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: theme.cardBg }]}
            onPress={() => Linking.openURL(profileData.instagram)}
          >
            <Ionicons name="logo-instagram" size={28} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>
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
  contactContainer: {
    gap: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    gap: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contactText: {
    fontSize: 16,
    fontWeight: "500",
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 10,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});