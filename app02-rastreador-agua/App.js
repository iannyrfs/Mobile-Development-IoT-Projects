import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HidratacaoApp() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);
  
  const ML_POR_COPO = 250;
  const META_ML = 2000; // 2 litros
  
  const aguaConsumida = copos * ML_POR_COPO;

  useEffect(() => {
    if (aguaConsumida >= META_ML && !meta) {
      setMeta(true);
    } else if (aguaConsumida < META_ML && meta) {
      setMeta(false);
    }
  }, [aguaConsumida, meta]);

  const adicionarCopo = () => {
    setCopos(copos + 1);
  };

  const resetar = () => {
    setCopos(0);
    setMeta(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame3}>
        
        {/* Cabeçalho GOTA */}
        <View style={styles.header}>
          <Text style={styles.titulo}>GOTA</Text>
        </View>
        
        <Text style={styles.subtitulo}>Pequenos goles, grande diferença.</Text>
        
        {/* Meta em vermelho */}
        <Text style={styles.metaTexto}>🎯 SUA META É 2L DE ÁGUA POR DIA</Text>

        {/* Texto dinâmico: BEBA MAIS ÁGUA ou META ATINGIDA */}
        {!meta ? (
          <Text style={styles.incentivoTexto}>BEBA MAIS ÁGUA</Text>
        ) : (
          <Text style={styles.metaAtingidaTexto}>🏆 META ALCANÇADA. PARABÉNS!</Text>
        )}
        
        {/* Botão do copo - central */}
        <TouchableOpacity 
          style={styles.copoButton} 
          onPress={adicionarCopo}
          activeOpacity={0.7}
        >
          <View style={styles.copoContainer}>
            <Text style={styles.copoIcon}>🥛</Text>
          </View>
          <Text style={styles.copoLabel}>+ 250 ML</Text>
        </TouchableOpacity>
        
        {/* VOCÊ BEBEU */}
        <View style={styles.consumoContainer}>
          <Text style={styles.consumoLabel}>VOCÊ BEBEU</Text>
          <Text style={styles.consumoValor}>{aguaConsumida} ML</Text>
          <Text style={styles.consumoLabel}>DE ÁGUA HOJE</Text>
        </View>
        
        {/* RESETAR */}
        <TouchableOpacity style={styles.resetButton} onPress={resetar}>
          <Text style={styles.resetTexto}>RESETAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26C2DE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  frame3: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 25,
    fontWeight: '300',
  },
  metaTexto: {
    fontSize: 12,
    color: '#1E4A9A ',
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  copoButton: {
    alignItems: 'center',
    marginBottom: 25,
  },
  copoContainer: {
    width: 130,
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  copoIcon: {
    fontSize: 65,
  },
  copoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#5F9EA0',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 30,
    overflow: 'hidden',
  },
  incentivoTexto: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 25,
    letterSpacing: 1,
  },
  metaAtingidaTexto: {
    fontSize: 12,
    fontWeight: '800',
    color: '#006E14', // Dourado para destacar a conquista
    marginBottom: 25,
    letterSpacing: 1,
  },
  consumoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  consumoLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
    letterSpacing: 1,
  },
  consumoValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 5,
  },
  resetButton: {
    backgroundColor: '#FF544E',
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },  
  resetTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
});