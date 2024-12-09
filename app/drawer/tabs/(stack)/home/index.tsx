import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                

                <CustomButton className='mb-2' color='primary' onPress={() => router.push('/drawer/tabs/products')} >
                  Productos
                </CustomButton>

                <CustomButton className='mb-2' color='secondary' onPress={() => router.push('/drawer/tabs/profile')} >
                  Profile
                </CustomButton>

                <CustomButton className='mb-2' color='tertiary' onPress={() => router.push('/drawer/tabs/settings')} >
                  Ajustes
                </CustomButton>

                <Link href="/drawer/tabs/products" asChild>
                    <CustomButton className='mb-2' variant='text-only'>
                      Productos
                    </CustomButton>
                </Link>

                {/* <Link className='mb-5' href="/products">Productos</Link>
                <Link className='mb-5' href="/profile">Perfil</Link>
                <Link className='mb-5' href="/settings">Settings</Link> */}
              </View>
        </SafeAreaView>
      
    )
}

export default HomeScreen