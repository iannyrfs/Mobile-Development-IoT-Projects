import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
  const router = useRouter();
  
  const tecnologias = [
    { nome: '🍊\nCitrusMix'},
    { nome: '🍓\nBerryChat'},
    { nome: '🌸\nGardenCare'},
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Image 
            source={require('../assets/laranjinha.jpg')}
            style={styles.avatarImage}
          />
        </View>
        
        <Text style={styles.nome}>Laranjinha</Text>
        <Text style={styles.ocupacao}>Especialista em sabores cítricos</Text>

        <View style={styles.bioContainer}>
          <Text style={styles.bioTexto}>
            Com sua personalidade vibrante e otimista, ela adora criar combinações refrescantes e deliciosas para seus amigos.
          </Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Localização</Text>
            <Text style={styles.infoValue}>Berry Bitty City</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Experiência</Text>
            <Text style={styles.infoValue}>10+ anos</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>laranjinha@moranguinho.lj</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Tecnologias favoritas</Text>
        
        <View style={styles.tecnologiasGrid}>
          {tecnologias.map((tech, index) => (
            <View key={index} style={styles.techCard}>
              <Text style={styles.techNome}>{tech.nome}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.botaoVoltar} 
          onPress={() => router.back()}
        >
          <Text style={styles.botaoVoltarTexto}>Voltar a Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 4,
    justifyContent: 'center',
  },
  botaoVoltar: {
    backgroundColor: '#d8d8d8',
    alignSelf: 'center',
    borderRadius: 4,
  },
  botaoVoltarTexto: {
    color: '#1A1A1A',
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  content: {
    padding: 32,
    paddingTop: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  ocupacao: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
    marginBottom: 24,
  },
  bioContainer: {
    marginBottom: 32,
  },
  bioTexto: {
    fontSize: 15,
    lineHeight: 24,
    color: '#444444',
    textAlign: 'left',
  },
  infoSection: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  tecnologiasGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  techCard: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  techNome: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  techDescricao: {
    fontSize: 12,
    color: '#888888',
  },
});