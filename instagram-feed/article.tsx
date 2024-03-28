import { Image, Text, View, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


export default function Article({item}) {
    return (
        <>
            <View style={styles.article}>
                {/* Header with User Info */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.user}>
                        <Image style={styles.avatar} source={item.avatar} />
                        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='more-horizontal' size={24} color='green' />
                    </TouchableOpacity>
                </View>

                {/* Image */}
            </View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.article}>
                {/* Action Buttons and Comments */}
                <View style={styles.action}>
                    <View style={styles.actionLeft}>
                        <TouchableOpacity>
                            <Feather name='heart' size={24} color='green' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name='message-circle' size={24} color='green' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name='send' size={24} color='green' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actionRight}>
                        <TouchableOpacity>
                            <Feather name='bookmark' size={24} color='green' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.likes}>Likes: {item.likes}</Text>
                    <Text style={styles.commentCount}>View all comments ({item.commentCount})</Text>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    article: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20, // Space between articles
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10, // Space below the header
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        color: '#000',
    },
    image: {
        width: '100%',
        height: 300,
        // resizeMode: 'cover',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10, // Padding on the sides
        marginTop: 10, // Space above the action buttons
    },
    actionLeft: {
        flexDirection: 'row',
    },
    actionRight: {},
    info: {
        alignSelf: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
    },
    likes: {
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    commentCount: {
        color: '#8e8e8e',
        marginTop: 5,
        alignSelf: 'flex-start',
    },
});
