
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

const CHAPTERS = [
  { id: 1, title: 'The Currency of Connection' },
  { id: 2, title: 'The Weight of Gold' },
  { id: 3, title: 'The Echoes of Childhood' },
  { id: 4, title: 'The Silent Language of Love' },
  { id: 5, title: 'The Mirror of Money' },
  { id: 6, title: 'The Illusion of Scarcity' },
  { id: 7, title: 'The Architecture of Trust' },
  { id: 8, title: 'The Storms We Weather' },
  { id: 9, title: 'The Art of Emotional Alchemy' },
  { id: 10, title: 'The Inheritance of Worth' },
  { id: 11, title: 'The Tapestry of Shared Dreams' },
  { id: 12, title: 'The Unseen Balance Sheet' },
];

const TableOfContentsScreen = () => {
  const handleChapterPress = (chapterId: number) => {
    router.push(`/chapters/${chapterId}`);
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
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#f1f5f9" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Table of Contents</Text>
          </View>

          <View style={styles.chaptersContainer}>
            {CHAPTERS.map((chapter) => (
              <TouchableOpacity
                key={chapter.id}
                style={styles.chapterItem}
                onPress={() => handleChapterPress(chapter.id)}
                activeOpacity={0.8}
              >
                <Text style={styles.chapterNumber}>{`Chapter ${chapter.id}`}</Text>
                <Text style={styles.chapterTitle}>{chapter.title}</Text>
                <Ionicons name="chevron-forward" size={20} color="#64748b" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default TableOfContentsScreen;

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
  chaptersContainer: {
    paddingHorizontal: 24,
    maxWidth: 380,
    alignSelf: 'center',
    width: '100%',
  },
  chapterItem: {
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
  chapterNumber: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '300',
    marginRight: 16,
  },
  chapterTitle: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '300',
    flex: 1,
  },
});
