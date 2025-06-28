
import { useThemeContext } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AppearanceSettingsScreen = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <LinearGradient
        colors={['#0f172a', '#1e293b', '#0f172a']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#f1f5f9" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Appearance</Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.optionItem}>
              <View style={styles.optionInfo}>
                <View style={styles.iconContainer}>
                  <Ionicons name="color-palette-outline" size={22} color="#cbd5e1" />
                </View>
                <Text style={styles.optionTitle}>Theme</Text>
              </View>
              <View style={styles.themeSelector}>
                <TouchableOpacity
                  style={[styles.themeButton, theme === 'light' && styles.selectedThemeButton]}
                  onPress={() => setTheme('light')}
                >
                  <Text style={styles.themeButtonText}>Light</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.themeButton, theme === 'dark' && styles.selectedThemeButton]}
                  onPress={() => setTheme('dark')}
                >
                  <Text style={styles.themeButtonText}>Dark</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AppearanceSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  gradient: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#f1f5f9',
  },
  optionsContainer: {
    paddingHorizontal: 24,
    maxWidth: 380,
    alignSelf: 'center',
    width: '100%',
  },
  optionItem: {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(51, 65, 85, 0.5)',
  },
  optionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(71, 85, 105, 0.8)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionTitle: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '300',
  },
  themeSelector: {
    flexDirection: 'row',
    backgroundColor: 'rgba(71, 85, 105, 0.8)',
    borderRadius: 8,
    padding: 4,
  },
  themeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  selectedThemeButton: {
    backgroundColor: '#a855f7',
  },
  themeButtonText: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '300',
  },
});
