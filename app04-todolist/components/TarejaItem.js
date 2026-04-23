import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onAlternarConcluida }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Switch
          value={tarefa.concluida || false}
          onValueChange={() => onAlternarConcluida(tarefa.id)}
          trackColor={{ false: '#e0e0e0', true: '#c8e6c9' }}
          thumbColor={tarefa.concluida ? '#81c784' : '#f5f5f5'}
          ios_backgroundColor="#e0e0e0"
        />
        
        <Text style={[styles.texto, tarefa.concluida && styles.textoConcluido]}>
          {tarefa.texto}
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.removeButton} 
        onPress={() => onRemover(tarefa.id)}
      >
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  
  texto: {
    fontSize: 15,
    color: '#2c3e50',
    flex: 1,
    lineHeight: 20,
  },
  
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#b0bec5',
  },
  
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  removeText: {
    fontSize: 16,
    color: '#cfd8dc',
    fontWeight: '400',
  },
});