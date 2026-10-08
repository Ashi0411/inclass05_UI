import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  const handleAddPoints = () => {
    setPoints((prev) => prev + 1);
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Top Header / App Bar with Safe Area */}
      <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>
      </SafeAreaView>

      {/* Main Content Area */}
      <View style={styles.content}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Savishka&glasses=round',
              }}
              style={styles.avatarImage}
            />
            {/* Green Checkmark Badge */}
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>✓</Text>
            </View>
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Profile Info Items */}
        <View style={styles.detailsContainer}>
          {/* Name */}
          <View style={styles.detailItem}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Savishka</Text>
          </View>

          {/* Email */}
          <View style={styles.detailItem}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.row}>
              <Text style={styles.icon}>✉</Text>
              <Text style={styles.value}>savishka@gmail.com</Text>
            </View>
          </View>

          {/* Points */}
          <View style={styles.detailItem}>
            <Text style={styles.label}>Points</Text>
            <View style={styles.row}>
              <Text style={styles.icon}>★</Text>
              <Text style={styles.value}>{points}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={handleAddPoints}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerSafeArea: {
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 12,
  },
  avatarWrapper: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FECACA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatarImage: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -2,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#1E1E1E',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  detailsContainer: {
    marginTop: 6,
  },
  detailItem: {
    marginBottom: 22,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    color: '#4B5563',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    fontSize: 16,
    color: '#111827',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '300',
    marginTop: -2,
  },
});
