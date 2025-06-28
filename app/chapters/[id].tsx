
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
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

const CHAPTER_CONTENT: { [key: string]: { title: string; content: string } } = {
  '1': {
    title: 'The Currency of Connection',
    content:
      `In the quiet hum of a bustling city, amidst the clatter of ambition and the whisper of dreams, lived a young woman named Elara. Her life, like many, was a delicate dance between the tangible and the intangible. She understood the power of money, its ability to open doors, to provide comfort, to secure a future. Yet, she also felt the profound, often unspoken, weight of another currency: connection. It wasn't traded on stock markets or held in bank accounts, but its value, Elara knew, was immeasurable. It was the warmth of a shared smile, the strength in a comforting hand, the silent understanding in a knowing glance. This currency, she observed, was often overlooked in the relentless pursuit of the other. People chased fortunes, built empires, and accumulated possessions, sometimes at the expense of the very bonds that nourished their souls. Elara, however, was different. She sought to understand the intricate interplay between these two forces, how the pursuit of one could enrich or impoverish the other. She believed that true wealth lay not just in what one possessed, but in the depth of their connections, the richness of their relationships. This was her journey, a quest to unravel the mysteries of human connection and its often-complicated relationship with the material world. She began to see that every interaction, every shared moment, was an exchange, a deposit or withdrawal in the bank of human connection. And like any currency, it required careful management, conscious investment, and a deep understanding of its true worth. This was the first lesson, the foundational truth upon which her understanding would be built: the currency of connection, though invisible, was the most valuable of all.`,
  },
  '2': {
    title: 'The Weight of Gold',
    content:
      `Elara's journey led her to observe the lives of those around her. She saw couples who, despite their material abundance, seemed to drift apart, their conversations reduced to logistics and their touches devoid of warmth. She saw families fractured by disputes over inheritance, friendships strained by financial imbalances. It was as if the very gold they sought to accumulate carried an unseen weight, a burden that pressed down on their spirits and eroded their relationships. She met a man, a successful entrepreneur named Marcus, who had built a vast fortune from scratch. He lived in a sprawling mansion, drove luxurious cars, and wore designer clothes. Yet, his eyes held a perpetual weariness, and his laughter, when it came, seemed to lack genuine joy. His wife, a beautiful woman named Sophia, spent her days in solitude, surrounded by opulence but starved of genuine companionship. Their conversations revolved around business deals and social obligations, never touching the deeper currents of their hearts. Elara realized that for Marcus, money had become a shield, protecting him from vulnerability but also isolating him from true intimacy. He had equated financial security with emotional security, a dangerous fallacy that left him emotionally bankrupt. The weight of his gold, she understood, was not in its physical mass, but in the emotional toll it exacted, the sacrifices made in its pursuit, and the emptiness it left in its wake. This chapter was a stark reminder that material wealth, without emotional richness, was a hollow victory.`,
  },
  '3': {
    title: 'The Echoes of Childhood',
    content:
      `As Elara delved deeper, she began to understand the roots of these patterns. She realized that many of our adult relationships with money and emotions are shaped by the echoes of our childhood. The lessons we learn, the beliefs we internalize, the experiences we have in our formative years, all contribute to the blueprint of our future interactions. She met a woman named Lena, who, despite earning a good income, constantly struggled with debt. Lena's parents had always emphasized frugality and saving, often instilling a fear of scarcity. As an adult, Lena found herself in a paradoxical loop: she earned money, but a deep-seated anxiety about not having enough led her to overspend, as if to prove to herself that she was finally abundant. Conversely, Elara observed a man named David, who, having grown up in poverty, was now excessively generous to his loved ones, often to his own detriment. His childhood experience of deprivation had instilled in him a desperate need to provide, to ensure that those he cared for never felt the same lack he had. These were not conscious choices, Elara realized, but deeply ingrained emotional responses, echoes from a past that continued to shape their present. Understanding these echoes, she concluded, was the first step towards rewriting the script, towards building healthier, more balanced relationships with both money and emotions.`,
  },
  '4': {
    title: 'The Silent Language of Love',
    content:
      `Elara's observations led her to a profound realization: love, in its purest form, often speaks a silent language, a language that transcends words and material possessions. It was in the small gestures, the unspoken understandings, the shared vulnerabilities. She saw a young couple, struggling financially, yet radiating a profound sense of happiness. They cooked simple meals together, took long walks in the park, and found joy in each other's company. Their love wasn't defined by grand gestures or expensive gifts, but by the quiet intimacy of their shared lives. They communicated through touch, through knowing glances, through the comfort of simply being present with each other. Elara realized that while money could provide comfort and convenience, it could not buy genuine connection. In fact, sometimes, the absence of material distractions allowed for a deeper, more authentic form of intimacy to flourish. It forced couples to rely on each other, to communicate more openly, to find creative ways to express their affection. This silent language, she understood, was a testament to the resilience of the human spirit, its ability to find joy and connection even in the face of adversity. It was a reminder that love, at its core, was about presence, understanding, and a willingness to truly see and be seen by another.`,
  },
  '5': {
    title: 'The Mirror of Money',
    content:
      `Money, Elara discovered, was a powerful mirror, reflecting back our deepest beliefs, fears, and desires. It wasn't just a tool for exchange; it was a psychological construct, imbued with meaning and emotion. She saw how financial discussions often became battlegrounds, not because of the money itself, but because of what it represented: power, control, security, freedom. A couple she observed, Sarah and Tom, constantly argued about their spending habits. Sarah, who valued security, saw Tom's spontaneous purchases as reckless and irresponsible. Tom, who craved freedom, felt stifled by Sarah's meticulous budgeting. Their arguments weren't about the numbers on a spreadsheet, but about their conflicting values, their differing perspectives on what money meant to them. Elara realized that these financial conflicts were rarely about money alone. They were about unmet emotional needs, unacknowledged fears, and unspoken expectations. Money, in these instances, simply held up a mirror to their underlying psychological landscape. Understanding this, she concluded, was crucial for navigating financial discussions in relationships. It required looking beyond the surface, acknowledging the emotional subtext, and addressing the deeper issues that money often brought to light. Only then could couples move from conflict to understanding, from blame to collaboration.`,
  },
  '6': {
    title: 'The Illusion of Scarcity',
    content:
      `One of the most pervasive and damaging beliefs Elara encountered was the illusion of scarcity. It was the deeply ingrained conviction that there was never enough, that resources were limited, and that one had to constantly fight and compete to secure their share. This belief, she observed, often manifested in relationships as a fear of loss, a reluctance to share, and a tendency towards control. She saw couples who, despite having more than enough, hoarded their resources, fearing a future deprivation. They rationed affection, withheld praise, and measured their contributions, as if love and emotional support were finite commodities. This mindset, Elara realized, created a self-fulfilling prophecy. The fear of scarcity led to behaviors that actually created scarcity, eroding trust and fostering resentment. Conversely, she witnessed the transformative power of an abundance mindset. Couples who believed in the limitless nature of love and support were more generous, more open, and more willing to take risks. They understood that giving did not diminish their own resources, but rather expanded them, creating a virtuous cycle of generosity and connection. Breaking free from the illusion of scarcity, Elara concluded, was essential for cultivating truly abundant and fulfilling relationships.`,
  },
  '7': {
    title: 'The Architecture of Trust',
    content:
      `Trust, Elara learned, was the invisible architecture upon which all healthy relationships were built. And in the intricate dance between money and emotions, trust played a pivotal role. Financial transparency, shared goals, and a willingness to be vulnerable were the pillars of this architecture. She observed couples who, despite their love, struggled with financial infidelity, hiding purchases or debts from each other. This secrecy, she realized, chipped away at the foundation of trust, creating cracks that eventually led to collapse. Conversely, she saw couples who openly discussed their financial aspirations and anxieties, who made joint decisions, and who supported each other through financial challenges. Their willingness to be transparent, even when it was uncomfortable, strengthened their bond and deepened their intimacy. Elara understood that building trust required consistent effort, open communication, and a commitment to shared values. It meant being honest about one's financial situation, even when it was less than ideal, and trusting one's partner to respond with understanding and support. This was the bedrock of a secure and lasting relationship, a testament to the power of vulnerability and shared responsibility.`,
  },
  '8': {
    title: 'The Storms We Weather',
    content:
      `Life, Elara knew, was not a calm sea. It was a journey filled with storms, unexpected challenges that tested the resilience of relationships. And often, these storms had a financial component. Job loss, unexpected medical expenses, economic downturns – these external pressures could strain even the strongest bonds. She witnessed couples who, when faced with financial adversity, either crumbled under the pressure or emerged stronger than ever. The difference, she realized, lay in their emotional preparedness, their ability to communicate, and their willingness to support each other. Couples who had cultivated emotional resilience, who had practiced open communication and mutual empathy, were better equipped to navigate these storms. They saw financial challenges not as individual burdens, but as shared obstacles to overcome together. They found strength in their unity, comfort in their shared vulnerability, and hope in their collective determination. Elara understood that while money could provide a buffer against some storms, emotional fortitude was the true anchor. It was the ability to weather the tempest, to find solace in each other's presence, and to emerge from the darkness with their love intact, perhaps even stronger than before.`,
  },
  '9': {
    title: 'The Art of Emotional Alchemy',
    content:
      `Elara began to see that the interplay between money and emotions was not a fixed equation, but an art form – the art of emotional alchemy. It was the ability to transform negative emotions, such as fear, anxiety, and resentment, into positive ones, such as trust, gratitude, and love. She observed how financial stress could trigger deep-seated insecurities, leading to arguments and emotional distance. But she also witnessed couples who, through conscious effort, transformed these challenges into opportunities for growth and deeper connection. They practiced active listening, validated each other's feelings, and worked collaboratively to find solutions. They didn't shy away from difficult conversations, but approached them with empathy and a shared commitment to their relationship. This alchemy, Elara realized, required self-awareness, emotional intelligence, and a willingness to engage with one's own inner landscape. It meant acknowledging one's fears without letting them dictate one's actions, and cultivating a sense of gratitude for what one had, rather than dwelling on what was lacking. It was a continuous process of transformation, turning lead into gold, not in a material sense, but in the realm of human connection.`,
  },
  '10': {
    title: 'The Inheritance of Worth',
    content:
      `Beyond the tangible assets, Elara realized, there was another form of inheritance – the inheritance of worth. It was the legacy of self-esteem, confidence, and a healthy relationship with oneself that parents passed on to their children. She saw how parents who modeled a balanced approach to money, who taught their children the value of both earning and giving, instilled in them a sense of financial well-being. But more importantly, she observed how parents who fostered emotional intelligence, who encouraged open communication and self-compassion, equipped their children with the tools to navigate the complexities of relationships. This inheritance, Elara understood, was far more valuable than any material wealth. It was the foundation upon which children could build fulfilling lives, cultivate healthy relationships, and achieve true financial and emotional independence. It was a reminder that the greatest gift parents could give their children was not a trust fund, but a strong sense of self-worth, a belief in their own capabilities, and a deep understanding of the power of human connection.`,
  },
  '11': {
    title: 'The Tapestry of Shared Dreams',
    content:
      `Elara's journey culminated in the understanding that the most fulfilling relationships were those woven from a tapestry of shared dreams. These dreams were not always grand or ambitious; sometimes, they were as simple as a shared desire for a peaceful home, a loving family, or a life filled with meaningful experiences. And often, these dreams had a financial component, requiring careful planning, mutual effort, and a shared vision for the future. She observed couples who, despite their individual aspirations, found common ground in their shared dreams. They discussed their financial goals openly, created budgets together, and celebrated their progress along the way. They understood that money was not an end in itself, but a tool to facilitate their shared vision, a means to create the life they desired together. This tapestry, Elara realized, was not static. It evolved and changed over time, requiring continuous communication, compromise, and a willingness to adapt. But at its core, it was a testament to the power of collaboration, the beauty of shared purpose, and the profound joy of building a life together, thread by thread, dream by dream.`,
  },
  '12': {
    title: 'The Unseen Balance Sheet',
    content:
      `In the end, Elara understood that life, and especially relationships, operated on an unseen balance sheet. It wasn't just about the debits and credits of money, but about the emotional investments, the acts of kindness, the moments of vulnerability, and the shared experiences that truly enriched one's life. She realized that while financial statements provided a snapshot of material wealth, they failed to capture the true richness of human existence. The unseen balance sheet, however, accounted for everything: the laughter shared, the tears shed, the challenges overcome, the love given and received. It was a testament to the profound truth that true wealth was not measured in dollars and cents, but in the depth of one's connections, the resilience of one's spirit, and the richness of one's emotional life. Elara's journey had come full circle. She had begun by seeking to understand the interplay between money and emotions, and she had ended by realizing that the most valuable currency of all was the currency of connection, the unseen wealth that truly enriched the human experience. And with this understanding, she knew, she could navigate the complexities of life with greater wisdom, compassion, and a profound sense of gratitude for the unseen balance sheet that truly mattered.`,
  },
};

const ChapterScreen = () => {
  const { id } = useLocalSearchParams();
  const chapter = CHAPTER_CONTENT[id as string];

  if (!chapter) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
        <LinearGradient
          colors={['#0f172a', '#1e293b', '#0f172a']}
          style={styles.gradient}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#f1f5f9" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chapter Not Found</Text>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

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
            <Text style={styles.headerTitle}>{chapter.title}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.chapterContent}>{chapter.content}</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ChapterScreen;

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
    flexShrink: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    maxWidth: 600,
    alignSelf: 'center',
  },
  chapterContent: {
    color: '#e2e8f0',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
