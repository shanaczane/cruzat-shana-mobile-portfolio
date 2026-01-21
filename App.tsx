import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Linking,
  Dimensions,
  Animated,
  StatusBar,
  ListRenderItem,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const profileImg = require("./assets/profile.jpg");

const { width, height } = Dimensions.get("window");

interface Theme {
  background: string;
  headerBg: string;
  navBg: string;
  cardBg: string;
  text: string;
  textSecondary: string;
  accent: string;
  skillBarBg: string;
  tagBg: string;
}

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  profileImage: any;
}

interface TechStackCategory {
  id: string;
  category: string;
  skills: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

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

  const theme: Theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (y: number): void => {
    scrollViewRef.current?.scrollTo({ y, animated: true });
  };

  const profileData: ProfileData = {
    name: "Shana Czane M. Cruzat",
    title: "Computer Science Student",
    bio: "Passionate developer with a love for creating beautiful and functional mobile applications. I specialize in React Native and modern web technologies, always eager to learn and tackle new challenges.",
    email: "shanaczanecruzat@gmail.com",
    github: "https://github.com/shanaczane",
    linkedin: "https://linkedin.com/in/shana-cruzat",
    twitter: "https://twitter.com/yourusername",
    profileImage: profileImg,
  };

  const techStack: TechStackCategory[] = [
    {
      id: "1",
      category: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "TailwindCSS",
        "Bootstrap",
        "Vite",
      ],
    },
    {
      id: "2",
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python"],
    },
    {
      id: "3",
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      id: "4",
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel"],
    },
    {
      id: "5",
      category: "Programming Languages",
      skills: ["C++", "Python", "PHP"],
    },
  ];

  const projects: Project[] = [
    {
      id: "1",
      title: "FurSure",
      description:
        "An ongoing pet care companion application designed to centralize essential pet services. It enables users to book appointments, manage pet information, and access care-related features in one convenient platform.",
      technologies: ["React", "Supabase", "Node.js"],
      link: "https://github.com/shanaczane/FurSure-frontend",
    },
    {
      id: "2",
      title: "Computer Shop System",
      description:
        "A system developed to monitor and manage computer usage within a computer shop. It allows administrators to track which users are accessing each PC while providing full CRUD functionality and structured data management.",
      technologies: ["PHP", "HTML", "CSS"],
      link: "https://github.com/shanaczane/computer_shop_system",
    },
    {
      id: "3",
      title: "Weather Forecast App example",
      description:
        "Beautiful weather app with 7-day forecasts, location-based weather, and interactive maps.",
      technologies: ["React Native", "OpenWeather API", "Maps"],
      link: "https://github.com/yourusername/project3",
    },
    {
      id: "4",
      title: "Task Management System example",
      description:
        "Collaborative task manager with real-time updates, team management, and progress tracking.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/yourusername/project4",
    },
  ];

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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      {/* Section Navigation */}
      <View
        style={[
          styles.sectionNav,
          {
            backgroundColor: theme.navBg,
            shadowColor: isDarkMode ? "#00d4ff" : "#0080ff",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => scrollToSection(0)}
          style={styles.navButton}
        >
          <Text style={[styles.navText, { color: theme.textSecondary }]}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection(450)}
          style={styles.navButton}
        >
          <Text style={[styles.navText, { color: theme.textSecondary }]}>
            Tech Stack
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection(900)}
          style={styles.navButton}
        >
          <Text style={[styles.navText, { color: theme.textSecondary }]}>
            Projects
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection(1500)}
          style={styles.navButton}
        >
          <Text style={[styles.navText, { color: theme.textSecondary }]}>
            Contact
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Ionicons
            name={isDarkMode ? "sunny" : "moon"}
            size={24}
            color={theme.accent}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Profile Section */}
          <View style={styles.section}>
            <View style={styles.profileContainer}>
              <View
                style={[
                  styles.profileImageContainer,
                  { borderColor: theme.accent },
                ]}
              >
                <Image
                  source={
                    typeof profileData.profileImage === "string"
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

          {/* Tech Stack Section */}
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

          {/* Projects Section */}
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

          {/* Contact Section */}
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
                  style={[
                    styles.socialButton,
                    { backgroundColor: theme.cardBg },
                  ]}
                  onPress={() => Linking.openURL(profileData.github)}
                >
                  <Ionicons name="logo-github" size={28} color={theme.text} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.socialButton,
                    { backgroundColor: theme.cardBg },
                  ]}
                  onPress={() => Linking.openURL(profileData.linkedin)}
                >
                  <Ionicons name="logo-linkedin" size={28} color={theme.text} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.socialButton,
                    { backgroundColor: theme.cardBg },
                  ]}
                  onPress={() => Linking.openURL(profileData.twitter)}
                >
                  <Ionicons name="logo-twitter" size={28} color={theme.text} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Footer */}
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

const darkTheme: Theme = {
  background: "#0a0e27",
  headerBg: "#131829",
  navBg: "#1a1f3a",
  cardBg: "#1a1f3a",
  text: "#ffffff",
  textSecondary: "#a0aec0",
  accent: "#00d4ff",
  skillBarBg: "#2d3748",
  tagBg: "#2d3748",
};

const lightTheme: Theme = {
  background: "#f7fafc",
  headerBg: "#ffffff",
  navBg: "#ffffff",
  cardBg: "#ffffff",
  text: "#1a202c",
  textSecondary: "#718096",
  accent: "#0080ff",
  skillBarBg: "#e2e8f0",
  tagBg: "#edf2f7",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    paddingTop: 50,
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
  scrollView: {
    flex: 1,
  },
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
  footer: {
    alignItems: "center",
    paddingVertical: 30,
    gap: 8,
  },
  footerText: {
    fontSize: 14,
  },
});
