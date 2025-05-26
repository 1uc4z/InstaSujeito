import React , { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.carregaIcone = this.carregaIcone.bind(this);
        this.mostralikes = this.mostralikes.bind(this);
        this.like = this.like.bind(this);

    }

    carregaIcone(likeada) {
        return likeada ? require('../img/likeada.png') : 
                require('../img/like.png');
    }

    like() {
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            })
        }else{
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    mostralikes(likers, total) {
        let feed = this.state.feed;

        if(feed.likers <= 0) {
            return;
        }

        return (
            <Text style={styles.likers}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    render() {
        return (
            <View style={styles.areaFeed} >

               <View style={styles.viewPerfil}>
                <Image
                    source={{uri: this.state.feed.imgPublicacao}}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}> {this.state.feed.nome}</Text>
               </View>

               <Image
                    resizeMode="cover"
                   source={{uri: this.state.feed.imgPublicacao}}
                   style={styles.fotoPublicacao}
               />

               <View style={styles.viewPerfil}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                        source={this.carregaIcone(this.state.feed.likeada)}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
               </View>

                {this.mostralikes(this.state.feed.likers, this.state.feed.likers)}

               <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>
                    {this.state.feed.nome}   
                </Text>

                <Text style={styles.descRodape}>
                    {this.state.feed.descricao}
                </Text>
               </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    areaFeed: {
        marginTop: 10,
        marginBottom: 10
    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
       
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotoPublicacao: {
        height: 400,
        flex: 1,
        alignItems: 'center',
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5
    },
    iconeLike: {
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 5
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    nomeRodape: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        paddingLeft: 5,
        flexWrap: 'wrap',
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
        flexWrap: 'wrap',
    },
    likers: {
        fontWeight: 'bold',
        marginLeft: 5
    }

});

export default Lista