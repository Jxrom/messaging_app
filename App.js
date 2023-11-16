import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/Status';
import BackgroundImage from './components/BackgroundImage';
import MessageList from './components/MessageList';
import { createImageMessage, createLocationMessage, createTextMessage } from './utils/MessageUtils';


state = {
  messages: [ createImageMessage('https://unsplash.it/300/300'),
createTextMessage('World'),
createLocationMessage('Hello'),
createLocationMessage({
  latitude: 37.78825,
  longitude: 122.4324,
}),
],
};

handlePressMessage = () => {}

renderMessageList() {
  const { messages } = this.state;

  return (
    <View style={styles.content}>
        <MessageList messages={messages}
        onPressMessage={this.handlePressMessage} />
    </View>
  );
}

export default function App() {
  return (
    <BackgroundImage>
    <View style={styles.container}>
      <Status style={styles.inputMethodEditor}/>
      <Text>Jerome Marbebe</Text>
    </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white'
  },
});