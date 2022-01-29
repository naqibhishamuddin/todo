import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';

export const Screen = props => {
  const {
    style,
    children,
    isScrollable,
    refreshing,
    onRefresh,
    isRefreshable,
    containerStyle,
    scrollContainerStyle,
  } = props;

  /** Whenever user click anywhere in the screen the keyboard will be dismiss.
   * This is important to handle the keyboard behavior during entering data
   */
  const onPressScreen = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback
        onPress={onPressScreen}
        style={styles.container}>
        {isScrollable ? (
          <KeyboardAwareScrollView
            nestedScrollEnabled
            refreshControl={
              isRefreshable && (
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              )
            }
            showsVerticalScrollIndicator={false}
            style={[styles.container, style]}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          <View style={styles.container}>
            <View style={[styles.container, style]}>{children}</View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

Screen.defaultProps = {
  isScrollable: false,
  refreshing: false,
  isRefreshable: false,
  onRefresh: () => {},
};
