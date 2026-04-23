import { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarejaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');
  
  useEffect(() => {
    carregarTarefas();
  }, []);
  
  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) setTarefas(JSON.parse(dados));
  };
  
  const salvarTarefas = async (lista) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
  };
  
  const adicionarTarefa = () => {
    if (!texto.trim()) return;
    const nova = { id: Date.now().toString(), texto, concluida: false };
    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };
  
  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };
  
  const alternarConcluida = (id) => {
    const novaLista = tarefas.map(tarefa =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    );
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };
  
  const limparTudo = () => {
    setTarefas([]);
    salvarTarefas([]);
  };
  
  const pendentes = tarefas.filter(t => !t.concluida).length;
  
  return (
    <View style={styles.container}>
      {/* Logo e Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>IORTASK</Text>
        <Text style={styles.subtitle}>Organize suas tarefas com estilo</Text>
      </View>
      
      {/* Contador minimalista */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>
          {pendentes === 0 ? '🎉 Todas concluídas!' : `📋 ${pendentes} tarefa${pendentes !== 1 ? 's' : ''} pendente${pendentes !== 1 ? 's' : ''}`}
        </Text>
      </View>
      
      {/* Input e botão adicionar */}
      <View style={styles.inputContainer}>
        <TextInput
          value={texto}
          onChangeText={setTexto}
          placeholder="Escreva sua tarefa..."
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={adicionarTarefa}>
          <Text style={styles.addButtonText}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      {/* Lista de tarefas */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem 
            tarefa={item} 
            onRemover={removerTarefa}
            onAlternarConcluida={alternarConcluida}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      
      {/* Botão Limpar Tudo abaixo das tarefas */}
      {tarefas.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={limparTudo}>
          <Text style={styles.clearButtonText}>Limpar tudo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
  },
  
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  
  logo: {
    fontSize: 32,
    fontWeight: '300',
    letterSpacing: 2,
    color: '#2c3e50',
    marginBottom: 8,
  },
  
  subtitle: {
    fontSize: 13,
    color: '#b0bec5',
    fontWeight: '400',
  },
  
  counterContainer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  
  counterText: {
    fontSize: 14,
    color: '#78909c',
    fontWeight: '500',
  },
  
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#fff',
    color: '#2c3e50',
  },
  
  addButton: {
    backgroundColor: '#e8f5e9', // tom pastel verde
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
  },
  
  addButtonText: {
    color: '#66bb6a',
    fontSize: 15,
    fontWeight: '600',
  },
  
  listContainer: {
    paddingBottom: 20,
  },
  
  clearButton: {
    backgroundColor: '#ffebee', // tom pastel vermelho
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  
  clearButtonText: {
    color: '#ef9a9a',
    fontSize: 14,
    fontWeight: '600',
  },
});