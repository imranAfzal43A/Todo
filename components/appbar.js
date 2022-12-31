import { Appbar } from 'react-native-paper';

const MyAppBar = () => (
  <Appbar.Header style={{backgroundColor:'orange'}}>
    <Appbar.Content title="My Todo" />
  </Appbar.Header>
);

export default MyAppBar;