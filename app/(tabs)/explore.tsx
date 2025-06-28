
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

const SETTINGS_DATA = [
  {
    id: 'account',
    title: 'Account',
    icon: 'person-circle-outline',
    screen: 'AccountSettings',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: 'notifications-outline',
    screen: 'NotificationSettings',
  },
  {
    id: 'appearance',
    title: 'Appearance',
    icon: 'color-palette-outline',
    screen: 'AppearanceSettings',
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: 'lock-closed-outline',
    screen: 'PrivacySettings',
  },
  {
    id: 'help',
    title: 'Help & Support',
    icon: 'help-circle-outline',
    screen: 'HelpAndSupport',
  },
  {
    id: 'about',
    title: 'About',
    icon: 'information-circle-outline',
    screen: 'About',
  },
];

const SettingsScreen = () => {
  const handleSettingPress = (screen: string) => {
    if (screen === 'AppearanceSettings') {
      router.push('/settings/appearance');
    } else {
      
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <LinearGradient
        colors={['#0f172a', '#1e293b', '#0f172a']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.headerSubtitle}>
              Manage your app preferences
            </Text>
          </View>

          <View style={styles.settingsContainer}>
            {SETTINGS_DATA.map((setting) => (
              <TouchableOpacity
                key={setting.id}
                style={styles.settingItem}
                onPress={() => handleSettingPress(setting.screen)}
                activeOpacity={0.8}
              >
                <View style={styles.settingInfo}>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={setting.icon as any}
                      size={22}
                      color="#cbd5e1"
                    />
                  </View>
                  <Text style={styles.settingTitle}>{setting.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#64748b" />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>App Version 1.0.0</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Terms of Service</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: '#f1f5f9',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  settingsContainer: {
    paddingHorizontal: 24,
    maxWidth: 380,
    alignSelf: 'center',
    width: '100%',
  },
  settingItem: {
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
  settingInfo: {
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
  settingTitle: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '300',
  },
  footer: {
    marginTop: 48,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  footerText: {
    color: '#64748b',
    fontSize: 12,
    marginBottom: 16,
  },
  linkText: {
    color: '#94a3b8',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
});

