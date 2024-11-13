import { Link, Redirect } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
    //return <Redirect href="/(stack)/home" />
    //return <Redirect href="/tabs" />
    return <Redirect href="/drawer" />

    // return (
    //     <SafeAreaView>
    //         <View className='mt-6 mx-2.5'>
    //             <Text className='text-5xl' style={{fontFamily: 'WorkSans-Black'}}>Hola mundo</Text>
    //             <Text className='text-4xl text-primary font-work-black'>Hola mundo</Text>
    //             <Text className='text-3xl text-secondary font-work-medium'>Hola mundo</Text>
    //             <Text className='text-2xl text-secondary-100 font-work-light'>Hola mundo</Text>
    //             <Text className='text-xl text-tertiary'>Hola mundo</Text>

    //             <Link href='/products' >
    //                 Productos
    //             </Link>
    //         </View>
    //     </SafeAreaView>
    // );
};

export default App;
