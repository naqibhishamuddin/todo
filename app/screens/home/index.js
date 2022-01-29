import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {getAllTasks, createTask, updateTask, deleteTask} from 'api';
import {flashMessage} from 'utils';
import {Home} from './component';
import {useStorage} from 'hooks';

export const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState();
  const [date, setDate] = useState(new Date());
  const [searchData, setSearchData] = useState([]);
  const [user, setUser] = useStorage('user');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [actionType, setActionType] = useState('add');

  const getTasks = async () => {
    const response = await getAllTasks();
    if (response.status === 200) {
      setTasks(response?.data);
      setIsLoading(false);
    } else {
      flashMessage({
        type: 'danger',
        message: 'Something went wrong while fetching tasks',
      });
      setIsLoading(false);
    }
  };

  const onPressTask = item => {
    setActionType('update');
    setDate(item?.date);
    setTitle(item?.title);
    setDescription(item?.description);
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onRefresh = () => {
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onSelectDate = dates => {
    setDate(dates);
  };

  const onPressProfile = () => {
    Alert.alert('Are you sure?', 'Do you want to logout from your profile?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => setUser()},
    ]);
  };

  const onChangeSearch = value => {
    if (value.length > 0) {
      const searchValueArray = tasks.filter(task =>
        task?.title.toLowerCase().includes(value.toLowerCase()),
      );
      setSearchData(searchValueArray);
    }
  };

  const onPressDelete = async id => {
    const response = await deleteTask({id: id});
    if (response.status === 200) {
      flashMessage({
        type: 'success',
        message: 'Task successfully deleted',
      });
    } else {
      flashMessage({
        type: 'danger',
        message: 'Something went wrong while deleting task',
      });
    }
    getTasks();
  };

  const onPressAddTask = () => {
    setTitle('');
    setDescription('');
    setDate(new Date());
    setActionType('add');
    setSelectedTask(null);
    setIsModalVisible(true);
  };

  const onTaskAction = async () => {
    setIsLoading(true);
    if (actionType === 'update') {
      const response = await updateTask({
        title: title,
        description: description,
        date: date,
      });
      if (response.status === 201) {
        flashMessage({
          type: 'success',
          message: 'Task successfully updated',
        });
      } else {
        flashMessage({
          type: 'danger',
          message: 'Something went wrong while updating task',
        });
      }
      setIsModalVisible(false);
      getTasks();
    } else {
      const response = await createTask({
        title: title,
        description: description,
        date: date,
      });
      if (response.status === 201) {
        flashMessage({
          type: 'success',
          message: 'Task successfully created',
        });
      } else {
        flashMessage({
          type: 'danger',
          message: 'Something went wrong while creating task',
        });
      }
      setTitle('');
      setDescription('');
      setDate(new Date());
      setIsModalVisible(false);
      getTasks();
    }
  };

  const onChangeTitle = enteredTitle => {
    setTitle(enteredTitle);
  };

  const onChangeDescription = enteredDescription => {
    setDescription(enteredDescription);
  };

  const props = {
    tasks,
    name: user?.Name,
    date,
    isLoading,
    isModalVisible,
    selectedTask,
    searchData,
    title,
    description,
    actionType,
    onChangeTitle,
    onChangeDescription,
    onTaskAction,
    onSelectDate,
    onPressTask,
    onRefresh,
    onCloseModal,
    onPressProfile,
    onChangeSearch,
    onPressDelete,
    onPressAddTask,
  };
  return <Home {...props} />;
};
