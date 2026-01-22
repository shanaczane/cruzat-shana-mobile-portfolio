import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme, ProfileData } from '../types';

interface ProfileProps {
  theme: Theme;
  profileData: ProfileData;
}

export const Profile: React.FC<ProfileProps> = ({ theme, profileData }) => {
  return (
    <View style={styles.section}>
      <View style={styles.profileContainer}>
        <View style={[styles.profileImageContainer, { borderColor: theme.accent }]}>
          <Image
            source={
              typeof profileData.profileImage === 'string'
                ? { uri: profileData.profileImage }
                : profileData.profileImage
            }
            style={styles.profileImage}
          />
        </View>
        <Text style={[styles.name, { color: theme.text }]}>
          {profileData.name}
        </Text>
        <Text style={[styles.title, { color: theme.accent }]}>
          {profileData.title}
        </Text>
        <Text style={[styles.bio, { color: theme.textSecondary }]}>
          {profileData.bio}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImageContainer: {
    borderWidth: 4,
    borderRadius: 75,
    padding: 4,
    marginBottom: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  name: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});