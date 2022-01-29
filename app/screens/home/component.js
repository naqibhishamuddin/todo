import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SwipeListView} from 'react-native-swipe-list-view';
import UserAvatar from 'react-native-user-avatar';
import {Screen, TaskModal} from 'components';
import {Colors} from 'theme';
import {styles} from './styles';

export const Home = props => {
  const {
    tasks,
    name,
    date,
    isLoading,
    searchData,
    isModalVisible,
    selectedTask,
    onPressTask,
    onRefresh,
    onTaskAction,
    onCloseModal,
    onSelectDate,
    onPressProfile,
    onPressDelete,
    onPressAddTask,
    onChangeTitle,
    onChangeDescription,
    title,
    description,
    actionType,
  } = props;

  const renderTask = ({index, item}) => {
    const {title, description, date} = item;
    return (
      <>
        <TouchableOpacity
          style={styles.task}
          activeOpacity={1}
          onLongPress={() => onPressTask(item)}>
          <Text style={styles.taskTitle}>{title}</Text>
          <Text style={styles.taskDescription}>{description}</Text>
          <Text style={styles.taskDate}>
            {dayjs(date).format('DD MMMM YYYY')}
          </Text>
        </TouchableOpacity>
        {index !== tasks.length - 1 && <View style={styles.divider} />}
      </>
    );
  };

  const renderButton = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressDelete(item._id)}
        style={styles.rowBack}>
        <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return <View style={styles.footer} />;
  };

  const renderEmpty = () => {
    return (
      <Text style={styles.empty}>
        It seems you dont have any tasks, add your task now by clicking the add
        button below
      </Text>
    );
  };

  return (
    <Screen style={styles.container}>
      {isModalVisible && (
        <TaskModal
          isLoading={isLoading}
          onSelectDate={onSelectDate}
          onCloseModal={onCloseModal}
          isVisible={isModalVisible}
          selectedDate={date}
          selectedTask={selectedTask}
          onPress={onTaskAction}
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
          title={title}
          description={description}
          type={actionType}
        />
      )}

      {/** PROFILE IMAGE */}
      <TouchableOpacity onPress={onPressProfile} activeOpacity={0.85}>
        <UserAvatar
          size={hp('6%')}
          style={styles.avatarStyle}
          name={name}
          textStyle={styles.avatarText}
        />
      </TouchableOpacity>

      {/** HEADER */}
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.subtitle}>Let's see what's you need to do today</Text>

      {/** ADD BUTTON */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPressAddTask}
        style={styles.addButton}>
        <Icon name="plus" size={hp('4%')} color={Colors.white} />
      </TouchableOpacity>

      {/** TASKS */}
      <SwipeListView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={searchData.length > 0 ? searchData : tasks}
        disableRightSwipe
        renderItem={renderTask}
        renderHiddenItem={renderButton}
        leftOpenValue={75}
        rightOpenValue={-75}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
      />
    </Screen>
  );
};
