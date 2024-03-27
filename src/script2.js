
//Início
var modulo=prompt("O que quer revisar? 🐸\n\n(𝟭) Matemática.\n(𝟮) Português.\n(𝟯) Física.\n(𝟰) Química.")
verificador_opcao_modulo(modulo)
//\n\n(𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙖) Caso queira que englobe todos.\n(𝙩𝙪𝙤𝙧) Caso queira passar em ordem por todos e selecionar como os revisará.


//Selecionador de módulos
function verificador_opcao_modulo(modulo){
    if(/1|2|3|4|complet[ao][s]?|tuor/i.test(modulo)){
      window.alert(`Módulo selecionado! 🐸`)
    } else{
      window.alert("Reinicie esta página. 🦞")
    }
  }



//Selecionador de modo
  function inicializador(questoes){
    var respostas_corretas = 0;
    restart=true;
    let começar_por=prompt("Insira ''𝘁𝗼𝗱𝗮𝘀'' para o quizz completo (melhor para memorizar)\n\nInsira ''𝗮𝗹𝗲𝗮𝘁𝗼́𝗿𝗶𝗼'' para o quizz completo de forma aleatória (melhor para avaliar se lembra)\n\nInsira o 𝗻𝘂́𝗺𝗲𝗿𝗼 da questão: (motivo específico ou debuggar)\n\n\n𝗖𝗨𝗜𝗗𝗔𝗗𝗢! Caso você insira qualquer valor fora estes três o programa simplesmente finalizará.")
    selecionador_de_questao(começar_por, questoes, respostas_corretas)
    if (/tod[ao][s]?|aleat[oó]ri[ao][s]?|tuor/i.test(começar_por)) {
      calculador_de_acertos(respostas_corretas, questoes)
    }
  }
  function selecionador_de_questao(começar_por, questoes, respostas_corretas){
    if(0<começar_por&&começar_por<100){
      respostas_corretas = verificador_de_acertos(questoes["questao" + começar_por], respostas_corretas, começar_por);
    } else if (/tod[ao][s]?/i.test(começar_por)){
      for (let i = 0; i < Object.keys(questoes).length; i++) {
        respostas_corretas = verificador_de_acertos(questoes[`questao${i+1}`], respostas_corretas, começar_por);
      }
    } else if(/aleat[oó]ri[oa][s]?/i.test(começar_por)){
        const x = Object.keys(questoes).sort(() => Math.random() - 0.5);
        for (let i = 0; i < x.length; i++) {
          const y = x[i];
          respostas_corretas = verificador_de_acertos(questoes[y], respostas_corretas, começar_por);
        }
    } else {
        window.alert("Esta questão não existe. Recarregue a página.")
    }
    if(/tod[ao][s]?|aleat[oó]ri[ao][s]?/i.test(começar_por)){
      const percentagem = (respostas_corretas / Object.keys(questoes).length) * 100; // alteração para usar const
      window.alert("Você fez " + percentagem + "% das questões. 🐸");
    }
  }



  // Verificador de acertos
  function verificador_de_acertos(questao, respostas_corretas){
    while (true) {
      let resposta_usuario = prompt(questao.pergunta); 
      if (resposta_usuario==""){
          window.alert(questao.dica) 
          continue;
      }
      if (resposta_usuario.match(questao.palavras_interpretador)) {
        window.alert(`𝐀 𝐫𝐞𝐬𝐩𝐨𝐬𝐭𝐚 𝐜𝐨𝐫𝐫𝐞𝐭𝐚 𝐞́: \n\n${questao.resposta_correta}`);
        respostas_corretas++;
        restart=false;
      }
      if (!restart) {
        break; 
      }
    }
    return respostas_corretas;
  }




  //! Criador de questões 
//?Questões isoladas
if(/1/i.test(modulo)){
  var questoes ={
    questao1:{
      pergunta: "Quais as HAHAHAHA da P.A?",
      resposta_correta: "Termo geral da P.A)    𝗮𝗻 = 𝗮𝗽 + (𝗻-𝗽)𝗿  \n\nSoma dos n termos)    𝗦𝗻 = (𝗮𝟭+𝗮𝗻)𝗻/𝟮 \n\nTrês termos consecutivos)    𝗯=𝗮+𝗰/𝟮\n\nTermos equidistantes)    𝗯=𝗮+𝗰/𝟮 \n\nRataria)    𝗧𝗺=𝗦/𝗻 \n\nInterpolação)    𝗻 ",
    },
    questao2:{
      pergunta: "Quais as fórmulas dos Volumes?",
      resposta_correta: "Afinam na ponta)   (𝗔𝗯)𝗵/𝟯\n\nNão afinam na ponta)    (𝗔𝗯)𝗵\n\n\Áreas circulares)    π𝐫²    π𝐝²/𝟒",
    },
    questao3:{
      pergunta: "Quais as fórmulas da Conversão de Unidades?\n\nConverta:\n(34dm -> mm),    (34dm² -> mm²),    (34dm³ -> mm³)\n(34mm -> dm),    (34mm² -> dm²),    (34mm³ -> dm³)",
      resposta_correta: "𝐆𝐦    𝐌𝐦    𝐊𝐦    𝐇𝐦    𝐝𝐚𝐦    𝐦    𝐝𝐦    𝐜𝐦    𝐦𝐦    𝐲𝐦    𝐡𝐦    𝐩𝐦\n\n(3.400)        (340.000)        (34.000.000)\n (0,34)          (0,0034)           (0,000034)",
    },
    questao4:{
      pergunta: "Qual a fórmula da Combinação?",
      resposta_correta: "𝐂𝐧^𝐩=𝐧!/𝐩!(𝐧-𝐩)!",
    },
    questao5:{
      pergunta: "Três amigos, Bento, Caio e Edu, compararam as notas ob- tidas por eles nas provas de Matemática e de Português, sempre na ordem alfabética de seus nomes.\nEles observa- ram que as notas de Matemática formavam uma progressão aritmética de razão rM = 2 e que as notas de Português forma-vam outra progressão aritmética de razão rP = – 1.\nSabendo que a soma das notas da prova de Português foi 21 e que Caio obteve a mesma nota nas duas provas, então, a maior nota da prova de Matemática foi?",
      resposta_correta: "𝟗",
    },
    questao6:{
      pergunta: "A soma dos 5 primeiros termos de uma progressão aritmética é 65. Sabendo que o 5° termo é 19, o valor do 1° termo dessa progressão é?",
      resposta_correta: "𝟕",
    },
    questao7:{
      pergunta: "Considere um plano de treino que no primeiro dia tem uma corrida de 6km. Nos dias subsequentes, tem um acréscimo de 2km em relação ao dia anterior. \nNo último dia de treino o atleta correu 42km.\nO total percorrido foi de?",
      resposta_correta: "𝟒𝟓𝟔",
    },
    questao8:{
      pergunta: "Quantos meios aritméticos devemos interpolar entre -2 e 22 para que a razão de interpolação seja igual a 3?",
      resposta_correta: "𝟕",
    },
    questao9:{
      pergunta: "Quantas cadeiras terá o conjunto que possuir 100 mesas?\n\n𝐕𝐞𝐣𝐚 𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐧𝐨 𝐩𝐨𝐭𝐞.",
      resposta_correta: "𝟐𝟎𝟐",
    },
    questao10:{
      pergunta: "Quantos quadrados na 10° etapa?\n\n𝐕𝐞𝐣𝐚 𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐧𝐨 𝐩𝐨𝐭𝐞.",
      resposta_correta: "𝟔𝟔",
    },
    questao11:{
      pergunta: "As doenças cardiovasculares são a principal causa de morte em todo mundo. De acordo com os dados da Organização Mundial da Saúde, 17,3 milhões de pessoas morreram em 2012, vítimas dessas doenças. A estimativa é que, em 2030, esse número seja de 23,6 milhões.\n\nSuponha que a estimativa para 2030 seja atingida e considere , n N , a sequência que representa o Є número de mortes (em milhões de pessoas) por doenças cardiovasculares no mundo, com n=1 correspondendo a 2012, com n=2 correspondendo a 2013 e assim por diante.Se é uma progressão aritmética, então o 8° termo dessa sequência, em milhões de pessoas, é igual a?",
      resposta_correta: "19,75",
    },
    questao12:{
      pergunta: "A tabela mostra alguns dados sobre o número de relatórios preenchidos por um funcionário durante uma semana.\nSabendo-se que a média diária de relatórios preenchidos nesses 5 dias foi igual a 7, então o número de relatórios preenchidos na quarta-feira foi?\n\n𝐕𝐞𝐣𝐚 𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐧𝐨 𝐩𝐨𝐭𝐞.",
      resposta_correta: "𝟐𝟎𝟐",
    },
    questao13:{
      pergunta: "A média aritmética das notas obtidas por Luciana em duas provas e um trabalho é 7,7. Sabe-se que a nota do trabalho foi 8,6, e que a nota da segunda prova foi 0,5 ponto superior à nota da primeira prova. A nota obtida por Luciana na segunda prova foi?",
      resposta_correta: "𝟕,𝟓",
    },
    questao14:{
      pergunta: "O gráfico apresenta o número de parques temáticos dos cinco estados brasileiros que possuem o maior número deles, cadastrados no Ministério do Turismo até março de 2022.\n\n𝐕𝐞𝐣𝐚 𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐧𝐨 𝐩𝐨𝐭𝐞\n\nSuponha que o número de parques temáticos dos estados do RS e de SP mantenha-se igual nos próximos três anos. Nessas condições, o número mínimo de parques temáticos que os estados de SC, PE e GO, juntos, precisariam abrir nesses três anos, além dos que eles já possuem, para que a média aritmética do número de parques temáticos dos estados do RS e de SP seria de?",
      resposta_correta: "𝟔𝟖",
    },
    questao15:{
      pergunta: "Uma loja de produtos para cães e gatos vendeu, em média, 32 sacos de ração nos últimos 5 dias. Considerando-se somente os três dias com maior número de sacos de ração vendidos, a média diária foi de 36 sacos. A média diária de sacos de ração vendidos nos outros dois dias foi",
      resposta_correta: "𝟐𝟔",
    },
    questao16:{
      pergunta: "Quantas promoções conseguimos montar contendo sucos e sanduíces?\n\n\n\𝐀𝐭𝐮𝐦,  𝐪𝐮𝐞𝐢𝐣𝐨,  𝐯𝐞𝐠𝐞𝐭𝐚𝐫𝐢𝐚𝐧𝐨,  𝐩𝐫𝐞𝐬𝐮𝐧𝐭𝐨.\n\n𝐔𝐯𝐚,  𝐦𝐨𝐫𝐚𝐧𝐠𝐨,  𝐥𝐚𝐫𝐚𝐧𝐣𝐚.",
      resposta_correta: "𝟏𝟐",
    },
    questao17:{
      pergunta: "Quantos trios podemos formar com 6 pessoas?",
      resposta_correta: "𝟐𝟎",
    },
    questao18:{
      pergunta: "Quantas permutações podemos fazer com ''Marca''?",
      resposta_correta: "𝟔𝟎",
    },
    questao19:{
      pergunta: "Quantas combinações conseguimos fazer com os três algarismos (1, 2, 3)?",
      resposta_correta: "𝟔",
    },
    questao20:{
      pergunta: "Quantas maneiras podemos trocar as letras da palavra ''OCA''?",
      resposta_correta: "𝟔",
    },
    questao21:{
      pergunta: "Quantos pódios diferentes podemos formar com 5 pessoas?",
      resposta_correta: "𝟔𝟎",
    },
    questao22:{
      pergunta: "Durante a Copa do Mundo, que foi disputada por 24 países, as tampinhas de Coca-Cola traziam palpites sobre os países que se classificariam nos três primeiros lugares. Se, em cada tampinha, os três países são distintos, quantas tampinhas diferentes poderiam existir?",
      resposta_correta: "𝟏𝟐𝟏𝟒𝟒",
    },
    questao23:{
      pergunta: "Quantos anagramas possui a palavra ''ROSA''?",
      resposta_correta: "𝟐𝟒",
    },
    questao24:{
      pergunta: "Considere formados e dispostos em ordem crescente todos os números que se obtêm permutando os algarismos 1, 3, 5, 7, e 9. O número 75391 ocupa, nessa disposição, o lugar?",
      resposta_correta: "𝟖𝟖",
    },
    questao25:{
      pergunta: "Um engenheiro de obra do ''Sistema Fácil'', para determinados serviços de acabamento tem a sua disposição três azulejistas e oito serventes. Queremos formar equipes de acabamento constituídas de um azulejista e três serventes, o número de equipes diferentes possíveis, é?",
      resposta_correta: "𝟏𝟔𝟖",
    },
}
inicializador(questoes)
}


if(/1/i.test(modulo)){
  var questoes ={
    questao1:{
      pergunta: "Quais as HAHAHAHA da P.A?",
      resposta_correta: "Termo geral da P.A)    𝗮𝗻 = 𝗮𝗽 + (𝗻-𝗽)𝗿  \n\nSoma dos n termos)    𝗦𝗻 = (𝗮𝟭+𝗮𝗻)𝗻/𝟮 \n\nTrês termos consecutivos)    𝗯=𝗮+𝗰/𝟮\n\nTermos equidistantes)    𝗯=𝗮+𝗰/𝟮 \n\nRataria)    𝗧𝗺=𝗦/𝗻 \n\nInterpolação)    𝗻 ",
    },
}
inicializador(questoes)
}


/*  if(/tuor/i.test(modulo)){
    var questoes ={
      questao1:{
        pergunta: "Quais as huehue da P.A?",
        resposta_correta: "Termo geral da P.A)    𝗮𝗻 = 𝗮𝗽 + (𝗻-𝗽)𝗿  \n\nSoma dos n termos)    𝗦𝗻 = (𝗮𝟭+𝗮𝗻)𝗻/𝟮 \n\nTrês termos consecutivos)    𝗯=𝗮+𝗰/𝟮\n\nTermos equidistantes)    𝗯=𝗮+𝗰/𝟮 \n\nRataria)    𝗧𝗺=𝗦/𝗻 \n\nInterpolação)    𝗻 ",
      },
      questao2:{
        pergunta: "Quais as fórmulas dos Volumes?",
        resposta_correta: "Afinam na ponta)   (𝗔𝗯)𝗵/𝟯\n\nNão afinam na ponta)    (𝗔𝗯)𝗵\n\n\Áreas circulares)    π𝐫²    π𝐝²/𝟒",
      },
      questao3:{
        pergunta: "Quais as fórmulas da Conversão de Unidades?\n\nConverta:\n(34dm -> mm),    (34dm² -> mm²),    (34dm³ -> mm³)\n(34mm -> dm),    (34mm² -> dm²),    (34mm³ -> dm³)",
        resposta_correta: "𝐆𝐦    𝐌𝐦    𝐊𝐦    𝐇𝐦    𝐝𝐚𝐦    𝐦    𝐝𝐦    𝐜𝐦    𝐦𝐦    𝐲𝐦    𝐡𝐦    𝐩𝐦\n\n(3.400)        (340.000)        (34.000.000)\n (0,34)          (0,0034)           (0,000034)",
      },
      questao4:{
        pergunta: "Qual a fórmula da Combinação?",
        resposta_correta: "𝐂𝐧^𝐩=𝐧!/𝐩!(𝐧-𝐩)!",
      },
  }
  inicializador(questoes)
  }*/

  //?Questões todas juntas
/*  if(/complet[ao][s]?/i.test(modulo)){
    var questoes ={
      questao1:{
        pergunta: "ah q cu",
        resposta_correta: "",
      },
  }
  inicializador(questoes)
  }*/