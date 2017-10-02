import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class Card extends React.Component {
   state = {
     showTerm: false,
   }

   flipCard = () => {
      this.setState({
         showTerm: !this.state.showTerm
      });
   }

   removeCard = () => {
      this.props.removeCard(this.props.position);
   }

   render() {
      const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);

      return (
         <TouchableWithoutFeedback onPress={this.flipCard} >
            <View style={styles.container}>
               <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
               <Text style={styles.deleteButton} onPress={this.removeCard}>X</Text>
               <Text style={styles.subjectText}>{(this.state.showTerm) ? ("") : (this.props.cardData.subject)}</Text>
               <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
            </View>
         </TouchableWithoutFeedback>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300
  },
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 20
  },
  deleteButton: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'Georgia',
    position: 'absolute',
    right: 20,
    top: 20
  },
  subjectText: {
     fontSize: 20,
     fontFamily: 'Georgia',
     paddingBottom: 20
  },
  termText: {
    fontSize: 50,
    fontFamily: 'Georgia-Bold'
  },
  definitionText: {
    fontSize: 30,
    fontFamily: 'Georgia'
  }
});
