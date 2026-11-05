import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from "./Components/Movie";

class AllMovies extends React.Component {
    render(){
        return(
            <ScrollView>
                <Text></Text>
                <Text></Text>


                <Movie title={'Doctor Sleep'} year={2019} icon_name={'skull'} icon_color={'grey'}
                poster={require('./Images/doctor-sleep.jpg')}/>
                <Movie title={'Midway'} year={2020} icon_name={'person-rifle'} icon_color={'grey'}
                poster={require('./Images/midway.jpg')}/>
                <Movie title={'Bolt'} year={2008} icon_name={'bolt'} icon_color={'grey'}
                poster={{uri: 'https://lumiere-a.akamaihd.net/v1/images/p_bolt_19881_2a6c5fc2.jpeg'}} />


                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </ScrollView>
        );
    };
};

export default AllMovies;