import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function Card ({ category, question, answer }) {
  return (
    <View style={styles.card_container}>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <View style={{
          backgroundColor: category.color,
          height: 16,
          borderRadius: 12,
          width: '100%',
          marginBottom: 32
        }} />
        <Text style={styles.card_title}>Cara</Text>
      </View>
      <Text style={styles.card_question}>{question}</Text>
      {/* <Text>{answer}</Text> */}
    </View>
  )
}

Card.propTypes = {
  category: PropTypes.object,
  question: PropTypes.string,
  answer: PropTypes.string
}

const styles = StyleSheet.create({
  card_container: {
    backgroundColor: '#F1D0E7',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    height: 382
  },
  card_title: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  card_question: {
    fontSize: 24,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginTop: 48
  }
})
