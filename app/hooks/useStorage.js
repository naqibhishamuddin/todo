import MMKVStorage, {create} from 'react-native-mmkv-storage';

const storage = new MMKVStorage.Loader().withEncryption().initialize();
export const useStorage = create(storage);
