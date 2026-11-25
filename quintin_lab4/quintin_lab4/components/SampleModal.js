
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Modal,
  StyleSheet
} from 'react-native';

export default function SampleModal({ visible, onClose }) {

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >

      <View style={styles.container}>

        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.image}
        />

        <ScrollView style={styles.scrollView}>

          <Text style={styles.description}>
          {`"Honor is not just worn on armor — it is carried in the heart."

          "Do not confuse movement with progress."

          "The universe owes us no explanation, yet we continue to seek one."

          "A disciplined mind can carry what a motivated mind cannot."

          "Love is not possession; it is the freedom to remain together."

          "The greatest prison is the fear of what others might think."

          "Money is a useful servant but a terrible master."

          "Not every battle deserves your sword."

          "Technology advances faster than our understanding of its consequences."

          "Silence sometimes carries the weight of a thousand words."

          "A comfortable life is not necessarily a fulfilled life."

          "Even the strongest fortress has a forgotten entrance."

          "Knowledge gives you answers; wisdom teaches you which questions matter."

          "Time is the only currency you spend without knowing your balance."

          "Some people search for happiness while others quietly build it."

          "The mind remembers what the heart struggles to forget."

          "Your future is constructed from ordinary decisions."

          "A warrior without purpose is merely a weapon."

          "Failure is expensive, but ignorance often costs more."

          "Sometimes the hardest person to understand is yourself."

          "Curiosity is the beginning of every discovery."

          "Do not mistake someone's kindness for their inability to fight."

          "The stars remind us how small our problems can be."

          "Friendship is built through presence, not promises."

          "A thousand opinions cannot replace a single experience."

          "Your comfort zone charges interest on every opportunity you avoid."

          "Peace is not the absence of conflict, but the ability to endure it."

          "Every civilization believes itself more permanent than it truly is."

          "Programming is the art of explaining your intentions to something that takes everything literally."

          "The strongest chains are often invisible."

          "Do not sacrifice your entire life preparing to live it."

          "Ambition without direction is exhaustion disguised as progress."

          "Some wounds heal with time; others heal with understanding."

          "The world becomes smaller when curiosity becomes greater."

          "A crown does not make a king honorable."

          "Learning to rest is also a form of discipline."

          "The best investment is often the knowledge that prevents a terrible investment."

          "People reveal their character when kindness becomes inconvenient."

          "An ocean is not ashamed of its storms."

          "Never underestimate the power of an ordinary day."

          "The past is a teacher, not a permanent residence."

          "A sword can conquer a kingdom, but only wisdom can maintain it."

          "Sometimes doing nothing is the most difficult decision."

          "Machines can calculate possibilities, but humans must choose their purpose."

          "Your reputation is borrowed from others; your character belongs to you."

          "Even the longest journey eventually becomes a collection of memories."

          "Confidence grows when promises to yourself are consistently kept."

          "A meaningful conversation can outlive a thousand entertaining distractions."

          "Not all progress can be measured in numbers."

          "History is filled with people who believed their empire would last forever."

          "The cost of freedom is the responsibility of choosing."

          "A man may defeat armies and still lose a battle against himself."

          "Creativity begins where certainty becomes insufficient."

          "The loudest voice is not always the wisest."

          "Patience is ambition that understands time."

          "Never let temporary emotions make permanent decisions."

          "The purpose of education is not merely to collect information."

          "An intelligent person can solve problems that a wise person knows how to avoid."

          "Every line of code is a decision waiting to be tested."

          "Coffee is proof that humans will willingly consume bitterness for productivity."

          "The mountains do not become shorter because you complain about climbing."

          "Being alone and being lonely are different experiences."

          "Sometimes we miss people who no longer exist in the form we remember."

          "Success becomes dangerous when it convinces you that you cannot fail."

          "The moon does not compete with the sun for attention."

          "Discipline is remembering what you want when temptation offers something easier."

          "Nothing exposes assumptions faster than a broken program."

          "Freedom without responsibility eventually creates another prison."

          "The best leaders create people who no longer need their leadership."

          "A beautiful lie remains a lie."

          "Progress requires accepting that your previous understanding may have been wrong."

          "Do not measure your beginning against someone else's destination."

          "Some victories are invisible to everyone except the person who fought for them."

          "The value of money changes when you understand the time required to earn it."

          "A meaningful life is not always an impressive one."

          "Even a broken clock has more confidence than a student during a surprise examination."

          "The greatest discoveries begin with someone refusing to accept the obvious."

          "Forgiveness does not require forgetting the lesson."

          "Respect is demonstrated through behavior, not demanded through authority."

          "Your attention is valuable because your life is made from what receives it."

          "Sometimes the most productive action is closing your laptop."

          "Courage is acting despite knowing what could go wrong."

          "An empty notebook contains more possibilities than a completed masterpiece."

          "The future belongs not only to those who predict it, but to those who prepare for it."

          "Love requires closeness without the destruction of individuality."

          "The strongest relationships allow two people to grow without growing apart."

          "Do not confuse familiarity with understanding."

          "The universe is under no obligation to match human intuition."

          "Every expert was once confused by something that now seems obvious."

          "The greatest advantage of knowledge is knowing the limits of what you know."

          "Power reveals character more reliably than hardship."

          "You cannot control the wind, but you can learn how to sail."

          "An unanswered question is sometimes more valuable than a convenient answer."

          "Modern technology connects the world while occasionally disconnecting the people inside it."

          "Never judge an entire journey by its most difficult kilometer."

          "A small habit repeated daily becomes a silent architect of character."

          "Money can purchase comfort, but meaning must be cultivated."

          "The difference between a bug and a feature is sometimes a very convincing explanation."

          "A library is a place where the dead continue teaching the living."

          "Do not become so obsessed with efficiency that you forget enjoyment."

          "The strongest armor cannot protect a person from their own decisions."

          "Some things are worth doing even when nobody applauds."

          "Life rarely follows the schedule written in your planner."

          "Knowledge without humility becomes another form of ignorance."

          "The world does not stop changing when you stop paying attention."

          "Good intentions cannot substitute for thoughtful actions."

          "The fear of making mistakes can become the greatest mistake."

          "Every generation inherits problems it did not create and creates problems it will not solve."

          "A bicycle teaches balance through movement."

          "Sometimes happiness is simply having nowhere else you need to be."

          "Computers are exceptionally fast at executing exceptionally bad instructions."

          "A promise means little until keeping it becomes difficult."

          "There is strength in knowing when to walk away."

          "Dreams provide direction, but habits provide transportation."

          "Peace purchased through silence may eventually demand a greater price."

          "The most interesting people never stop being students."

          "Even the greatest empires were built one ordinary day at a time."

          "Do not seek to become irreplaceable; seek to become genuinely useful."

          "Life is not a competition to discover who can become exhausted first."

          "One day, the ordinary moments you overlook may become the memories you treasure most."`}
          </Text>

        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            title="CLOSE"
            color="red"
            onPress={onClose}
          />
        </View>

      </View>

    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 45,
    backgroundColor: 'white',
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },

  scrollView: {
    flex: 1,
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },

  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});
