import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {CustomInput, Button} from 'components';
import {styles} from './styles';

export const TaskModal = props => {
  const {
    isVisible,
    onCloseModal,
    onChangeTitle,
    onChangeDescription,
    onSelectDate,
    selectedDate,
    isLoading,
    onPress,
    type,
    title,
    description,
  } = props;

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const onPressCalendar = () => {
    setIsCalendarVisible(true);
  };

  const onCloseCalendar = () => {
    setIsCalendarVisible(false);
  };

  const selectDate = date => {
    setIsCalendarVisible(false);
    onSelectDate(date);
  };

  const renderCalendar = () => {
    return (
      <DatePicker
        modal
        open={isCalendarVisible}
        date={selectedDate}
        onConfirm={selectDate}
        onCancel={onCloseCalendar}
        mode="date"
      />
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver
      useNativeDriverForBackdrop
      hardwareAccelerated
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
      style={styles.modal}>
      <View style={styles.container}>
        {isCalendarVisible && renderCalendar()}
        {/** TITLE */}
        <CustomInput
          placeholder="Clean my gaming room"
          title="Title"
          value={title}
          onChangeText={onChangeTitle}
          rootStyle={styles.root}
          containerStyle={styles.inputContainer}
        />

        {/** DESCRIPTION */}
        <CustomInput
          placeholder="Need to setup the gaming chair"
          title="Description"
          onChangeText={onChangeDescription}
          rootStyle={styles.root}
          containerStyle={styles.inputContainer}
          value={description}
        />

        {/** DATE */}
        <Text style={styles.placeholder}>Date</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressCalendar}
          style={styles.dateContainer}>
          <Text style={styles.selectedDate}>
            {dayjs(selectedDate).format('DD MMMM YYYY')}
          </Text>
        </TouchableOpacity>

        {/** BUTTON */}
        <Button
          isLoading={isLoading}
          style={styles.button}
          onPress={onPress}
          title={type === 'add' ? 'Add Task' : 'Update Task'}
        />
      </View>
    </Modal>
  );
};

TaskModal.defaultProps = {
  isVisible: false,
  isLoading: false,
  type: 'add',
};
