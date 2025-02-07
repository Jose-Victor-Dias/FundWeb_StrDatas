// 1. Inverter os caracteres
function inverterCaracteres(frase) {
    return frase.split('').reverse().join('');
  }
  
  // 2. Marcar vogais em negrito
  function marcarVogais(frase) {
    return frase.replace(/[aeiouáéíóúàèìòùãõâêîôûäëïöü]/gi, '<b>$&</b>');
  }
  
  // 3. Contar palavras em um texto
  function contarPalavras(texto) {
    const palavras = texto.split(/\s+/);
    const contador = {};
  
    palavras.forEach(palavra => {
      const palavraNormalizada = palavra.toLowerCase();
      contador[palavraNormalizada] = (contador[palavraNormalizada] || 0) + 1;
    });
  
    return contador;
  }
  
  // 4. Palavra de maior ocorrência
  function palavraMaiorOcorrencia(texto) {
    const contador = contarPalavras(texto);
    let maiorPalavra = '';
    let maiorQuantidade = 0;
  
    for (const [palavra, quantidade] of Object.entries(contador)) {
      if (quantidade > maiorQuantidade) {
        maiorPalavra = palavra;
        maiorQuantidade = quantidade;
      }
    }
  
    return { maiorPalavra, maiorQuantidade };
  }
  
  // 5. Substituir palavras em um texto (NÃO CONSEGUI FAZER CERTINHO)
  function substituirTexto(texto, procurar, substituir) {
    const regex = new RegExp(procurar, 'gi');
    return texto.replace(regex, substituir);
  }
  
  // 6. Dias vividos
  function calcularDiasVividos(dataNascimento) {
    const dataAtual = new Date();
    const nascimento = new Date(dataNascimento);
    const diferenca = dataAtual - nascimento;
    return Math.floor(diferenca / (1000 * 60 * 60 * 24));
  }
  
  // 7. Escrever data por extenso
  function dataPorExtenso(data) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const [dia, mes, ano] = data.split('/');
    return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${ano}`;
  }
  
  // 8. Diferença entre datas em semanas (NÂO CONSEGUI FAZER)
  function diferencaSemanas(data1, data2) {
    const d1 = new Date(data1);
    const d2 = new Date(data2);
    const diferenca = Math.abs(d1 - d2);
    return Math.floor(diferenca / (1000 * 60 * 60 * 24 * 7));
  }
  
  // 9. Classificar força de uma caixa de texto
  function classificarTexto(texto) {
    const possuiLetras = /[a-zA-Z]/.test(texto);
    const possuiNumeros = /\d/.test(texto);
    const possuiSimbolos = /[@#$%^&*(),.!?:{}|<>]/.test(texto);
  
    if (possuiLetras && !possuiNumeros && !possuiSimbolos) return 'fraco';
    if (possuiLetras && possuiNumeros && !possuiSimbolos) return 'moderado';
    if (possuiLetras && possuiNumeros && possuiSimbolos) return 'forte';
  
    return 'inválido';
  }
  
  // 10. Codificar usando TENIS/POLAR
  function codificarTENIS(texto) {
    const mapa = {
      t: 'p', p: 't',
      e: 'o', o: 'e',
      n: 'l', l: 'n',
      i: 'a', a: 'i',
      s: 'r', r: 's'
    };
  
    return texto.replace(/[tenispolar]/gi, letra => {
      const letraMin = letra.toLowerCase();
      const codificada = mapa[letraMin] || letraMin;
      return letra === letraMin ? codificada : codificada.toUpperCase();
    });
  }
  
  // Funções de teste para integração com HTML
  function executarFuncao(funcao, ...args) {
    switch (funcao) {
      case 'inverterCaracteres':
        return inverterCaracteres(...args);
      case 'marcarVogais':
        return marcarVogais(...args);
      case 'contarPalavras':
        return JSON.stringify(contarPalavras(...args), null, 2);
      case 'palavraMaiorOcorrencia':
        const { maiorPalavra, maiorQuantidade } = palavraMaiorOcorrencia(...args);
        return `Palavra: ${maiorPalavra}, Ocorrências: ${maiorQuantidade}`;
      case 'substituirTexto':
        return substituirTexto(...args);
      case 'calcularDiasVividos':
        return `${calcularDiasVividos(...args)} dias vividos`;
      case 'dataPorExtenso':
        return dataPorExtenso(...args);
      case 'diferencaSemanas':
        return `${diferencaSemanas(...args)} semanas`;
      case 'classificarTexto':
        return classificarTexto(...args);
      case 'codificarTENIS':
        return codificarTENIS(...args);
      default:
        return 'Função não encontrada';
    }
  }
  