import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          nome: 'Zé Formata Tudo',
          descricao: 'Formatou, resolveu. Não resolveu? Formata de novo.” 🤷‍♂️🛠️ Suporte raiz, sem garantia, só fé.',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', // eslint-disable-line camelcasea
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          likeada: false, likers: 0
        },
        {
          id: 2,
          nome: 'Ribamar TI Delivery',
          descricao: 'Aqui é formatação, desbloqueio, exorcismo de impressora, alinhamento de Wi-Fi e purificação de pen drive. PIX na mão e vamo.🔥🪬',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', // eslint-disable-line camelcasea
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          likeada: false, likers: 2
        },
        {
          id: 3,
          nome: 'Osvaldir Suporte Total',
          descricao: 'Se parar de funcionar, foi culpa do mercúrio retrógrado, não minha. Mas eu ajeito… ou pioro. 🤷‍♂️⚡',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', // eslint-disable-line camelcasea
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          likeada: false, likers: 12
        },
        {
          id: 4,
          nome: 'Jubileu Tech Master',
          descricao: 'Ressuscitei um notebook de 2009 com 2GB de RAM, um SSD emprestado e uma oração. Se isso não é milagre, não sei o que é. 🔧💀',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png', // eslint-disable-line camelcasea
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
          likeada: false, likers: 32
        },
        {
          id: 5,
          nome: 'Seu HelpDesk da Silva',
          descricao: 'Consertei a impressora com fita isolante, um tapa na CPU e 3 Ave Maria. Aqui é TI, fé e violência leve.🔧🙏',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png', // eslint-disable-line camelcasea
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
          likeada: false, likers: 52
        }
      ],
    };

  }
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('./src/img/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image
            source={require('./src/img/send.png')}
            style={styles.send}
          />
        </TouchableOpacity>
       </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={this.state.feed}
        renderItem={({item}) => <Lista data={item} />}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 55,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 5,

      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation: 1,

    },
    send: {
      width: 23,
      height: 23
    },
  });

export default App;