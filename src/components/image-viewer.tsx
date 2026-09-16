import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { url: selectedImage } : imgSource;

  return <Image source={imageSource as any} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
