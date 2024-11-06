import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [result, setResult] = useState(null);

  const handleNameSubmit = () => {
    if (name) {
      localStorage.setItem('username', name); // Armazena o nome no localStorage
      setIsNameEntered(true);
    }
  };

  const questions = [
    {
      question: "Qual das alternativas a seguir descreve corretamente a principal função de um departamento de Recursos Humanos (RH) em uma empresa?",
      correctAnswer: "Gerenciar o recrutamento, seleção e desenvolvimento de colaboradores",
      incorrectAnswers: [
        "Gerir os processos financeiros da empresa",
        "Planejar campanhas publicitárias e de marketing",
        "Definir a estratégia de vendas e clientes da empresa"
      ]
    },
    {
      question: "Em qual contexto você utilizaria uma fórmula PROCV no Excel?",
      correctAnswer: "Para buscar um valor específico em uma coluna e retornar um valor em uma coluna adjacente",
      incorrectAnswers: [
        "Para calcular a soma de uma coluna inteira",
        "Para dividir um valor em partes iguais",
        "Para verificar se duas células contêm o mesmo valor"
      ]
    },
    {
      question: "A sigla INSS corresponde a qual dos seguintes conceitos?",
      correctAnswer: "Instituto Nacional do Seguro Social",
      incorrectAnswers: [
        "Imposto Nacional de Segurança Social",
        "Índice Nacional de Seguros Sociais",
        "Instituição Nacional de Serviços Sociais"
      ]
    },
    {
      question: "Qual das alternativas a seguir não é uma função típica do Excel?",
      correctAnswer: "Fazer chamadas de vídeo",
      incorrectAnswers: [
        "Filtrar dados",
        "Criar gráficos interativos",
        "Programar ações automatizadas com VBA"
      ]
    },
    {
      question: "Em qual situação você deve utilizar um CNPJ?",
      correctAnswer: "Para abrir uma empresa e registrar suas atividades fiscais",
      incorrectAnswers: [
        "Para realizar uma transferência bancária pessoal",
        "Para contratar um serviço de consultoria de recursos humanos",
        "Para registrar um contrato de locação de imóvel"
      ]
    },
    {
      question: "Qual das estratégias de marketing é mais indicada para uma empresa que deseja aumentar sua visibilidade de forma orgânica?",
      correctAnswer: "Estratégias de SEO (Search Engine Optimization)",
      incorrectAnswers: [
        "Marketing de Influência",
        "Publicidade paga no Google Ads",
        "Campanhas em mídias tradicionais como TV e rádio"
      ]
    },
    {
      question: "O que significa a sigla 'B2B' no contexto de Marketing?",
      correctAnswer: "Business to Business",
      incorrectAnswers: [
        "Business to Buyer",
        "Buyer to Buyer",
        "Brand to Brand"
      ]
    },
    {
      question: "Qual é a principal diferença entre um contrato CLT e um contrato de prestação de serviços?",
      correctAnswer: "O contrato CLT exige o pagamento de benefícios, como férias e 13º salário, enquanto o contrato de prestação de serviços não",
      incorrectAnswers: [
        "O contrato CLT tem um prazo de duração fixo, enquanto o contrato de prestação de serviços é vitalício",
        "O contrato CLT permite que o trabalhador trabalhe em diversos empregadores simultaneamente, enquanto o de prestação de serviços não",
        "O contrato de prestação de serviços exige férias e 13º salário, enquanto o CLT não"
      ]
    },
    {
      question: "No Microsoft Excel, qual fórmula pode ser usada para contar quantas células em um intervalo contêm valores numéricos?",
      correctAnswer: "CONT.NUM",
      incorrectAnswers: [
        "SOMAR.SE",
        "CONT.VALORES",
        "SOMARPRODUTO"
      ]
    },
    {
      question: "No contexto de marketing digital, o que significa 'Taxa de Conversão'?",
      correctAnswer: "O percentual de visitantes que realizam uma ação desejada, como preencher um formulário ou fazer uma compra",
      incorrectAnswers: [
        "A quantidade de visitantes que acessam o site",
        "O número de vezes que uma página é visualizada por um único usuário",
        "A quantidade de visitantes que retornam ao site após a primeira visita"
      ]
    },
    {
      question: "Uma pessoa que apresenta um comportamento de 'alto controle' nas situações de trabalho provavelmente possui quais características?",
      correctAnswer: "Costuma ser detalhista, organizando bem seus processos e prazos",
      incorrectAnswers: [
        "Preza por um ambiente de trabalho mais flexível e criativo",
        "Tem dificuldade em seguir regras e prefere agir por conta própria",
        "Prefere trabalhar em equipe e delegar responsabilidades"
      ]
    },
    {
      question: "Qual é o principal desafio de um profissional que possui um perfil comportamental excessivamente focado em 'análise detalhada'?",
      correctAnswer: "Dificuldade em tomar decisões rápidas e eficientes",
      incorrectAnswers: [
        "Tendência a não seguir os procedimentos estabelecidos",
        "Dificuldade em trabalhar de forma independente",
        "Aversão ao trabalho em equipe"
      ]
    },
    {
      question: "Quando uma pessoa tem um perfil comportamental mais voltado para 'iniciativa' e 'proatividade', ela geralmente tende a:",
      correctAnswer: "Tomar decisões rapidamente, mas muitas vezes sem avaliar todos os riscos",
      incorrectAnswers: [
        "Esperar ser orientada antes de tomar qualquer ação",
        "Demonstrar um forte desejo de aprender, mas sem buscar ativamente soluções",
        "Preferir trabalhar dentro dos limites estabelecidos, com pouca flexibilidade"
      ]
    },
    {
      question: "O que caracteriza uma pessoa com perfil 'introvertido' em um ambiente de trabalho colaborativo?",
      correctAnswer: "Prefere se expressar de forma individual, evitando interações em grupo",
      incorrectAnswers: [
        "Tende a falar em público com facilidade e a se destacar em apresentações",
        "Gosta de delegar atividades a outros membros da equipe",
        "Tem uma forte capacidade de motivar outras pessoas a agir"
      ]
    },
    {
      question: "Uma pessoa que apresenta o perfil comportamental 'resiliente' é:",
      correctAnswer: "Capaz de se adaptar rapidamente a mudanças e superar adversidades",
      incorrectAnswers: [
        "Propensa a abandonar tarefas diante de dificuldades",
        "Desmotivada em situações de alta pressão",
        "Inflexível quanto às mudanças e preferiria manter os processos estabelecidos"
      ]
    }
  ];

  return (
    <div className="app-container">
      {!isNameEntered ? (
        <div className="name-input-container">
          <h2>Digite seu nome para começar o quiz</h2>
          <input 
            type="text" 
            placeholder="Seu nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <button onClick={handleNameSubmit}>Iniciar</button>
        </div>
      ) : (
        result ? (
          <Result result={result} questions={questions} name={name} />
        ) : (
          <Quiz questions={questions} setResult={setResult} name={name} />
        )
      )}
    </div>
  );
};

export default App;
