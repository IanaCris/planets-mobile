import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { Planet } from '../../model/planet';
import { getPlanets } from '../../services/planet.service';
import PlanetItem from '../../components/PlanetItem';
import styles from './styles';

export default function HomePage() {

    const [planets, setPlanets] = useState<Planet[]>([]);

    useEffect(() => {

        getPlanets().then(list => {
            setPlanets(list);
        })

    },[]);

    return (
        <View style={styles.container}>
            <FlatList
                data={planets}
                renderItem={(elem) => <PlanetItem planet={elem.item} />}
            />
        </View>
    );
}
