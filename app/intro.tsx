
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

const IntroScreen = () => {
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
            <Text style={styles.headerTitle}>Book Introduction</Text>
          </View>

          <View style={styles.introContent}>
            <Text style={styles.introText}>
              Welcome to &quot;The Unseen Balance Sheet,&quot; a journey into the profound and often overlooked connections between our emotional landscapes and the tangible world of finance. This book delves into the intricate dance of human relationships, the silent echoes of our past, and the powerful influence they exert on our present and future.
            </Text>
            <Text style={styles.introText}>
              Through chapters like &quot;The Currency of Connection,&quot; &quot;The Weight of Gold,&quot; and &quot;The Echoes of Childhood,&quot; we explore how our deepest bonds, our perceptions of wealth, and our formative experiences shape our financial narratives. We uncover &quot;The Silent Language of Love&quot; and its unexpected ties to our economic well-being, and confront &quot;The Mirror of Money&quot; to understand what our financial habits truly reflect about us.
            </Text>
            <Text style={styles.introText}>
              &quot;The Illusion of Scarcity&quot; challenges conventional wisdom, while &quot;The Architecture of Trust&quot; reveals the foundational elements of both personal and financial security. We navigate &quot;The Storms We Weather&quot; – the inevitable challenges that test our resilience – and discover &quot;The Art of Emotional Alchemy,&quot; transforming adversity into growth.
            </Text>
            <Text style={styles.introText}>
              Finally, &quot;The Inheritance of Worth&quot; and &quot;The Tapestry of Shared Dreams&quot; invite us to consider the legacy we build and the collective aspirations that bind us. This book is an invitation to look beyond the numbers, to understand the unseen forces that govern our financial lives, and to cultivate a richer, more balanced existence.
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default IntroScreen;

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
  introContent: {
    paddingHorizontal: 24,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  introText: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    marginBottom: 16,
  },
});
