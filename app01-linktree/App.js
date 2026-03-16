import { View, Text, Image, StyleSheet, Linking, Pressable } from 'react-native';

export default function App() {

  const abrirLink = (url) => {
    if (!url) return;
    Linking.openURL(url);
  };

  const empresa = {
    nome: "Essenza Arquitetura",
    descricao: "Transformando espaços em experiências únicas.",
    clientes: "+1200 clientes satisfeitos",
    textoDestaque: "Confira os nossos projetos:",
    textoDestaque2: "Contate-nos:",
    projetos2025: "Projetos 2025",
    projetos2026: "Projetos 2026",
    avatar: require('./assets/imgAvatar.png'),
    capa: require('./assets/imgCapa.jpg'),
    email: "Email",
    whatsapp: "WhatsApp",
  };

  return (
    <View style={styles.container}>

      {/* Capa */}
      <Image
        source={empresa.capa}
        style={styles.capa}
      />

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={empresa.avatar}
          style={styles.avatar}
        />
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>

        {/* Nome */}
        <Text style={styles.titulo}>{empresa.nome}</Text>

        {/* Descrição */}
        <Text style={styles.descricao}>{empresa.descricao}</Text>

        {/* Clientes */}
        <View style={styles.destaqueClientes}>
          <Text style={styles.clientesTexto}>{empresa.clientes}</Text>
        </View>

        {/* Texto destaque */}
        <Text style={styles.textoDestaque}>{empresa.textoDestaque}</Text>

        {/* Projetos */}
        <View style={styles.projetosContainer}>

          <Pressable
            style={styles.projetoItem}
            onPress={() => abrirLink("https://surl.lt/abtasm")}
          >
            <Text style={styles.projetoTexto}>{empresa.projetos2025}</Text>
          </Pressable>

          <Pressable
            style={styles.projetoItem}
            onPress={() => abrirLink("https://surl.lt/abtasm")}
          >
            <Text style={styles.projetoTexto}>{empresa.projetos2026}</Text>
          </Pressable>

        </View>

        {/* Texto destaque */}
        <Text style={styles.textoDestaque}>{empresa.textoDestaque2}</Text>

        {/* Contato */}
        <View style={styles.contatoContainer}>

          <Pressable
            style={styles.contatoBotao}
            onPress={() => abrirLink("")}
          >
            <Text style={styles.contatoTexto}>{empresa.email}</Text>
          </Pressable>

          <Pressable
            style={styles.contatoBotao}
            onPress={() => abrirLink("")}
          >
            <Text style={styles.contatoTexto}>{empresa.whatsapp}</Text>
          </Pressable>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3A3A',
  },
  capa: {
    width: '100%',
    height: 150,
    backgroundColor: '#C6A86B',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#E6D8C3',
    backgroundColor: '#E6D8C3',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E6D8C3',
    marginBottom: 12,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 14,
    color: '#C6A86B',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  destaqueClientes: {
    backgroundColor: '#6B7D6D',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#C6A86B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  clientesTexto: {
    color: '#E6D8C3',
    fontSize: 16,
    fontWeight: '600',
  },
  textoDestaque: {
    fontSize: 16,
    color: '#E6D8C3',
    marginBottom: 16,
    fontWeight: '500',
  },
  projetosContainer: {
    width: '100%',
    marginBottom: 24,
  },
  projetoItem: {
    backgroundColor: '#6B7D6D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6A86B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  projetoTexto: {
    color: '#E6D8C3',
    fontSize: 16,
    fontWeight: '600',
  },
  contatoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  contatoBotao: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C6A86B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contatoTexto: {
    color: '#C6A86B',
    fontSize: 14,
    fontWeight: '500',
  },
});