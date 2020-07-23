export const StorageGetToken = async () => {
  const defaultValue = {
    accessToken: '',
    refreshToken: '',
  };
  const token = await localStorage.getItem('@token')
  console.log("StorageGetToken")
  console.log(JSON.parse(token))
  try {
    const token = await localStorage.getItem('@token')
    return JSON.parse(token);
  } catch (error) {
    // Error retrieving data
    return defaultValue;
  }
};

export const StorageSetToken = async (
  accessToken,
  refreshToken,
) => {
  const data = {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
  try {
    await localStorage.setItem('@token', JSON.stringify(data));
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
};

export const StorageClearToken = async () => {
  await localStorage.removeItem('@token');
};
