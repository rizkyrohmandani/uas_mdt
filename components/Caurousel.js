import { Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';

const Caurousel = () => {
  const images = [
    'https://img.freepik.com/free-vector/laundromat-cartoon-illustration-with-people-using-laundry-iron-service-washing-machines-background_1284-65157.jpg?w=996&t=st=1686300118~exp=1686300718~hmac=78c0cc2445899db347e47af583c974211a655690585016523a0fdfef465f9053',
    'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800',
    "https://img.freepik.com/free-vector/laundry-dry-cleaning-concept-illustration_114360-7391.jpg?w=996&t=st=1686300217~exp=1686300817~hmac=767bc954babc48b1c6ec2904021fda6a3863c8cec84b19d8b346d665513035ad",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor={'#13274F'}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: '94%',
        }}
      />
    </View>
  );
};

export default Caurousel;
