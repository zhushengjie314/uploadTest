/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;*/


import ImagePicker from 'react-native-image-crop-picker';
class CropPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <Text style={{ padding: 20, backgroundColor: 'pink' }} onPress={this.selectImage}>选择图片</Text>
                <Text style={{ padding: 20, backgroundColor: 'pink' }} onPress={this.selectVideo}>选择视频</Text>
            </View>
        );
    }
    selectImage = () => {
       ImagePicker.openPicker({
             mediaType: "photo",
             cropping: false,
             multiple: true
           }).then(images => {
           console.log(images)
             /*if (this.props.sendImageMessage) {
               let path = image.path;
               if (!Utils.isEmpty(path)) {
                 let name = path.substring(path.lastIndexOf('/') + 1, path.length);
                 this.props.sendImageMessage(image);
               }
             }*/
           });
    }

    selectVideo = () => {
           ImagePicker.openPicker({
                 mediaType: "video",
                 multiple: true
               }).then(videos => {
               console.log(videos)
                 /*if (this.props.sendImageMessage) {
                   let path = image.path;
                   if (!Utils.isEmpty(path)) {
                     let name = path.substring(path.lastIndexOf('/') + 1, path.length);
                     this.props.sendImageMessage(image);
                   }
                 }*/
               });
        }
}
export default CropPicker;
