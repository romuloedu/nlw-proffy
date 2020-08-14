import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from './styles';

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: "https://avatars0.githubusercontent.com/u/22475482?s=460&u=79177f08a3d9c1d5fc022e7634e992938991695e&v=4" }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Romulo Eduardo</Text>
                    <Text style={styles.subject}>Fisica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Desenvolvedor fullstack apaixonado por C# e desbravando o universo do Node.js e do React Native.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {"  "}
                    <Text style={styles.priceValue}>R$ 120,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;