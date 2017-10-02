import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Modal,
  TextInput
} from 'react-native';

/*
  Import our two custom components
*/
import NewCardModal from './NewCardModal';
import Card from './Card';

/*
  Default set of cards
*/
const DEFAULT_CARDS = [
   {
      term: "TERM",
      subject: "subject1",
      definition: "Sample definition"
   },
   {
      term: "TERM1",
      subject: "subject2",
      definition: "Sample definition1"
   },
   {
      term: "TERM2",
      subject: "subject2",
      definition: "Sample definition2"
   }
];

class App extends Component {
  // Fill this out
  state = {
     card: DEFAULT_CARDS,
     modalVisible: false
 }

  /*
    Toggles the new card modal
  */
  _toggleModal = () => {
     this.setState({
        modalVisible: !this.state.modalVisible
     });
  }

  /*
    Passed to the new card modal.
    Called when user decides to add new card.
    Creates card object and adds it to our state
  */
  _addCard = (_term, _subject, _definition) => {
     const cards = this.state.card;

     cards.push({
       term: _term,
       subject: _subject,
       definition: _definition
     });

     this.setState({
       cards: cards
     });

     this.setState({
       modalVisible: false
     });
  }

   _removeCard = (_index) => {
      const cards = this.state.card;
      cards.splice(_index, 1);

      this.setState({
         cards: cards
      });
   }

   render() {
      // Loop through the cards array in state and create Card component for each card
      const cards = this.state.card.map((card, index) => {
         return (
            <Card cardData={card} key={index} removeCard={this._removeCard} position={index} />
         )
      });

      console.log(cards);
      return (
         <View style={styles.container}>
            <NewCardModal
               modalVisible={this.state.modalVisible}
               toggleModal={this._toggleModal}
               addCard={this._addCard}
            />

            <ScrollView>
               {cards}
            </ScrollView>

            <TouchableHighlight
               style={styles.addButton}
               onPress={this._toggleModal}
               underlayColor='#128040'
            >
               <Text style={styles.addButtonText}>Add Card</Text>
            </TouchableHighlight>
         </View>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  addButton: {
    backgroundColor: '#2ecc71',
    paddingTop: 20,
    paddingBottom: 20
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
