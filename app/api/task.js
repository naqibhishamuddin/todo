import tasks from './tasksApi';

export const getAllTasks = async () => {
  const response = await tasks.get('tasks');
  return response;
};

export const createTask = async props => {
  const {title, description, date} = props;
  const response = await tasks.post('tasks', {title, description, date});
  return response;
};

export const updateTask = async props => {
  const {title, description, date, id} = props;
  const response = await tasks.put(`tasks/${id}`, {title, description, date});
  return response;
};

export const deleteTask = async props => {
  const {id} = props;
  const response = await tasks.delete(`tasks/${id}`);
  return response;
};
