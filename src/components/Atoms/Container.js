import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {COLORS} from '@/constants';
import {ErrorNetwork, ErrorServer} from '@/components/Errors';

const Container = ({
  children,
  backgroundColor,
  style = {},
  error = {},
  statusBar = COLORS.primary,
  onRefresh,
}) => {
  const containerStyles = [{...styles.body, ...style}];
  backgroundColor && containerStyles.push({backgroundColor});
  return (
    <>
      <SafeAreaView style={styles.header} />
      <SafeAreaView style={styles.body}>
        <StatusBar backgroundColor={statusBar} barStyle={'light-content'} />
        <View style={containerStyles}>{children}</View>
        {error?.noInternet ? <ErrorNetwork onPress={onRefresh} /> : null}
        {error?.error ? <ErrorServer onPress={onRefresh} /> : null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    flex: 0,
  },
  body: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});

export default Container;
