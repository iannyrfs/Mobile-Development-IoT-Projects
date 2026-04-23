import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Image 
            source={require('../assets/laranjinha.jpg')}
            style={styles.avatarImage}
          />
        </View>
        
        <Text style={styles.nome}>Laranjinha</Text>
        <Text style={styles.cargo}>Especialista em sabores cítricos</Text>
        
        <View style={styles.divider} />
        
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => router.push('/sobre')}
        >
          <Text style={styles.botaoTexto}>Ver perfil completo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nome: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  cargo: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
    marginBottom: 32,
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginBottom: 32,
  },
  botao: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});