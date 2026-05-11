import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { flags } from '../utils/flags';
import { DateFormat } from '../utils/DateFormat';

export default function GameCard({ game }) {

  const isBrazilGame =
    game.sigla_casa === 'BRA' ||
    game.sigla_fora === 'BRA';

  return (

    <View
      style={[
        styles.jogo,
        isBrazilGame && styles.jogoBrasil
      ]}
    >

      <Text style={styles.grupo}>
        GRUPO {game.grupo} • {DateFormat(game.data_brasilia)}
      </Text>

      <View style={styles.linhaPrincipal}>

    
        <View style={styles.time}>
          <Image
            style={styles.bandeira}
            source={flags[game.sigla_casa]}
          />

          <Text style={styles.sigla}>
            {game.sigla_casa}
          </Text>
        </View>


        <View style={styles.horario}>
          <Text style={styles.hora}>
            {game.hora_brasilia}
          </Text>

          <Text style={styles.subTitulo}>
            VS
          </Text>
        </View>

        <View style={styles.time}>

          <Text style={styles.sigla}>
            {game.sigla_fora}
          </Text>

          <Image
            style={styles.bandeira}
            source={flags[game.sigla_fora]}
          />
        </View>

      </View>

    
      <View style={styles.local}>

        <Text style={styles.subTitulo}>
          {game.estadio}
        </Text>

        <Text style={styles.subTitulo}>
          {game.cidade} • {game.pais}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  jogo: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d3d',
    paddingBottom: 15,
  },

  jogoBrasil: {
    borderWidth: 2,
    borderColor: '#f7d354',
    backgroundColor: '#11361f',
    borderRadius: 12,
    padding: 12,

    shadowColor: '#f7d354',
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },

  grupo: {
    color: '#8fa3b8',
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  linhaPrincipal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  bandeira: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },

  sigla: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  horario: {
    alignItems: 'center',
  },

  hora: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  local: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  subTitulo: {
    color: '#8fa3b8',
    fontSize: 12,
  },
});