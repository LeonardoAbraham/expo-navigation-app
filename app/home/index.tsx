import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const HomeScreen = () => {
  return (
    <View className='px-10'>
      <Text>HomeScreen</Text>

      <Link className='mb-5' href="/products">Productos</Link>
      <Link className='mb-5' href="/profile">Perfil</Link>
      <Link className='mb-5' href="/settings">Settings</Link>
    </View>
  )
}

export default HomeScreen