import React from 'react';
import { Text, View } from 'react-native';
import { Link, Redirect } from 'react-router-native';

export const WelcomePage = () => (
  <View>
    <Redirect to="/starhop" />
    <Text>Welcome to Star Hop Trainer</Text>
    <Text>
      This is an app to help you learn how to star hop, or even hone your
      skills.
    </Text>
    <Link to="/setup">
      <Text style={{ color: 'blue' }}>Start starhop training</Text>
    </Link>
    <Link to="/starchart">
      <Text style={{ color: 'blue' }}>Show star chart</Text>
    </Link>
    <Link to="/starhop">
      <Text style={{ color: 'blue' }}>Show sample star map</Text>
    </Link>
  </View>
);
