import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type LinkItemProps = {
  id: string;
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
};

const navigationLinks: LinkItemProps[] = [
  { id: 'intro', title: 'Intro', icon: 'book-outline' },
  { id: 'toc', title: 'Table of Contents', icon: 'list-outline' },
  { id: 'author', title: 'About the Author', icon: 'person-outline' },
  { id: 'app', title: 'About the App', icon: 'information-circle-outline' },
];

const HomeScreen = () => {
  const handleLinkPress = (linkId: string) => {
    if (linkId === 'toc') {
      router.push('/toc');
    } else if (linkId === 'intro') {
      router.push('/intro');
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
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <LinearGradient
              colors={['#60a5fa', '#a855f7']}
              style={styles.iconContainer}
            >
              <Ionicons name="book" size={32} color="white" />
            </LinearGradient>

            <Text style={styles.welcomeTitle}>Welcome Reader!</Text>
            <Text style={styles.welcomeSubtitle}>
              Continue your reading journey
            </Text>
          </View>
        </View>

        {/* Navigation Links */}
        <View style={styles.navigationContainer}>
          {navigationLinks.map((link) => (
            <TouchableOpacity
              key={link.id}
              style={styles.linkButton}
              onPress={() => handleLinkPress(link.id)}
              activeOpacity={0.8}
            >
              <View style={styles.linkContent}>
                <View style={styles.linkIconContainer}>
                  <Ionicons name={link.icon} size={20} color="#cbd5e1" />
                </View>
                <Text style={styles.linkText}>{link.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#64748b" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer Info */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.versionInfo}>
              <View style={styles.versionItem}>
                <View
                  style={[styles.statusDot, { backgroundColor: '#10b981' }]}
                />
                <Text style={styles.versionText}>Book Edition: 1st</Text>
              </View>
              <View style={styles.versionItem}>
                <View
                  style={[styles.statusDot, { backgroundColor: '#3b82f6' }]}
                />
                <Text style={styles.versionText}>App Version: 1.0.0</Text>
              </View>
            </View>
            <Text style={styles.readyText}>Ready to read</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  gradient: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  headerContent: {
    alignItems: 'center',
    maxWidth: 320,
    alignSelf: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#f1f5f9',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
  },
  navigationContainer: {
    paddingHorizontal: 24,
    maxWidth: 320,
    alignSelf: 'center',
    width: '100%',
  },
  linkButton: {
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
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  linkIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(71, 85, 105, 0.8)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  linkText: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '300',
    flex: 1,
  },
  footer: {
    paddingHorizontal: 24,
    marginTop: 48,
    paddingBottom: 32,
  },
  footerContent: {
    backgroundColor: 'rgba(30, 41, 59, 0.3)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(51, 65, 85, 0.3)',
    maxWidth: 320,
    alignSelf: 'center',
    width: '100%',
  },
  versionInfo: {
    marginBottom: 8,
  },
  versionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  versionText: {
    color: '#64748b',
    fontSize: 12,
  },
  readyText: {
    color: '#94a3b8',
    fontSize: 12,
    textAlign: 'right',
    fontWeight: '300',
  },
});
