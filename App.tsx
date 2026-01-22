import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  StatusBar,
  Text,
} from "react-native";
import { darkTheme, lightTheme } from "./src/config/theme";
import { profileData, techStack, projects } from "./src/data/portfolio";
import {
  Profile,
  TechStack,
  Projects,
  Contact,
  Navigation,
} from "./src/components";

export default function App(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const scrollViewRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (y: number): void => {
    scrollViewRef.current?.scrollTo({ y, animated: true });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <Navigation
        theme={theme}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onNavigate={scrollToSection}
      />

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <Profile theme={theme} profileData={profileData} />
          <TechStack theme={theme} techStack={techStack} />
          <Projects theme={theme} projects={projects} />
          <Contact theme={theme} profileData={profileData} />

          <View style={styles.footer}>
            <Text style={[styles.footerText, { color: theme.textSecondary }]}>
              Made with React Native
            </Text>
            <Text style={[styles.footerText, { color: theme.textSecondary }]}>
              © 2026 {profileData.name}
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 30,
    gap: 8,
  },
  footerText: {
    fontSize: 14,
  },
});
