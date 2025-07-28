// Exercício 1: Revisão de funções, spread e rest

// 1. Função tradicional
function sum(a, b) {
  return a + b;
}

// 2. Arrow function
const multiply = (a, b) => a * b;

// 3. Função com rest parameters
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// 4. Usando spread operator com arrays
const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

// 5. Usando spread com objetos
const person = { name: "Maria", age: 25 };
const employee = { ...person, id: 1001, department: "Engenharia" };

// Testando as funções
console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(5, 3));
console.log("Média de 3 números:", calculateAverage(4, 6, 8));
console.log("Média de 5 números:", calculateAverage(4, 6, 8, 10, 12));
console.log("Frutas combinadas:", allFruits);
console.log("Objeto funcionário:", employee);

//DESAFIO PARA OS ALUNOS:

// a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.age >= 18
  };
}
console.log("Pessoa é adulta?", addIsAdult(person));

// b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

function combinarFrutas(...fruitArrays) {
  return [].concat(...fruitArrays);
}
console.log("Todas as frutas combinadas:", combinarFrutas(fruits, moreFruits));


// Exercício 2: forEach e map

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// 1. Usando forEach para imprimir todos os produtos
console.log("Lista de Produtos:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

// 2. Usando map para criar um novo array apenas com nomes dos produtos
const productNames = products.map((product) => product.name);
console.log("\\nNomes dos Produtos:", productNames);

// 3. Usando map para criar um array de produtos com desconto de 10%
const discountedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.9, // 10% de desconto
  };
});

console.log("\\nProdutos com 10% de desconto:");
discountedProducts.forEach((product) => {
  console.log(
    `${product.name} - Original: R$${(product.price / 0.9).toFixed(
      2
    )}, Com desconto: R$${product.price.toFixed(2)}`
  );
});

// DESAFIO PARA OS ALUNOS:

//a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const descricaoProduto = products.map((product) => {
  return `${product.name} - ${product.category}`;
});

console.log("\nDescrições dos Produtos:");
console.log(descricaoProduto);


//b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

const precoTaxas = products.map((product) => {
  return (product.price * 1.15).toFixed(2);
});

console.log("\nPreços com 15% de imposto:");
console.log(precoTaxas);

// Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

// 1. Usando filter para encontrar estudantes com idade >= 20
const olderStudents = students.filter((student) => student.age >= 20);
console.log("Estudantes com 20 anos ou mais:", olderStudents);

// 2. Usando find para encontrar o primeiro estudante com nota > 90
const studentWithHighGrade = students.find((student) => {
  return student.grades.some((grade) => grade > 90);
});
console.log(
  "\\nPrimeiro estudante com nota acima de 90:",
  studentWithHighGrade.name
);

// 3. Usando filter para encontrar estudantes ativos com média acima de 80
const highPerformingActiveStudents = students.filter((student) => {
  // Calculando a média das notas
  const average =
    student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;

  return student.active && average > 80;
});

console.log("\\nEstudantes ativos com média acima de 80:");
highPerformingActiveStudents.forEach((student) => console.log(student.name));


//a. Use filter para encontrar estudantes inativos

const estudanteInativo = students.filter((student) => !student.active);
console.log("\nEstudantes inativos:", estudanteInativo);

//b. Use find para encontrar o estudante com id = 3

const estudanteID = students.find((student) => student.id === 3);
console.log("\nEstudante com id = 3:", estudanteID);

//c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70

const estudanteNotaBaixa = students.filter((student) =>
  student.grades.some((grade) => grade < 70)
);

console.log("\nEstudantes com nota abaixo de 70:");
estudanteNotaBaixa.forEach((student) => console.log(student.name));

// d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85

const melhoresEstudantes = students
  .filter((student) => {
    const avg =
      student.grades.reduce((sum, grade) => sum + grade, 0) / 
      student.grades.length;
    return avg > 85;
  })
  .map((student) => student.name);

console.log("\nNomes dos estudantes com média acima de 85:", melhoresEstudantes);

// Exercício 4: findIndex, some e every

const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// 1. Usando findIndex para encontrar a posição da tarefa "Participar da reunião"
const meetingIndex = tasks.findIndex(task => task.title === "Participar da reunião");
console.log("Índice da tarefa 'Participar da reunião':", meetingIndex);

// 2. Usando some para verificar se há pelo menos uma tarefa de alta prioridade
const hasHighPriorityTask = tasks.some(task => task.priority === "alta");
console.log("\\nExiste pelo menos uma tarefa de alta prioridade:", hasHighPriorityTask);

// 3. Usando every para verificar se todas as tarefas estão completas
const allTasksCompleted = tasks.every(task => task.completed);
console.log("\\nTodas as tarefas concluídas:", allTasksCompleted);

// 4. Combinando some e filter para encontrar tarefas incompletas de alta prioridade
const incompleteHighPriorityTasks = tasks.filter(
    task => !task.completed && task.priority === "alta"
);
console.log("\\nTarefas incompletas de alta prioridade:", incompleteHighPriorityTasks);

// a. Use findIndex para encontrar a posição da primeira tarefa incompleta
const indicePrimeiraIncompleta = tasks.findIndex(tarefa => !tarefa.completed);
console.log(indicePrimeiraIncompleta);

// b. Use some para verificar se existe alguma tarefa de baixa prioridade completa
const existeBaixaPrioridadeCompleta = tasks.some(
  tarefa => tarefa.priority === "baixa" && tarefa.completed
);
console.log(existeBaixaPrioridadeCompleta);

// c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas
const todasAltasIncompletas = tasks
  .filter(tarefa => tarefa.priority === "alta")
  .every(tarefa => !tarefa.completed);
console.log(todasAltasIncompletas);

// d. Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1)
const indiceTarefaInexistente = tasks.findIndex(tarefa => tarefa.id === 10);

if (indiceTarefaInexistente === -1) {
  console.log("Tarefa com id = 10 não encontrada.");
} else {
  console.log(indiceTarefaInexistente);
}

// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// a. Mostrar uma lista formatada de todos os produtos usando forEach
inventory.forEach((produto, index) => {
  console.log(`${index + 1}. ${produto.name} - R$${produto.price}, Estoque: ${produto.stock}, Categoria: ${produto.category}`);
});

// b. Filtrar produtos que estão em estoque (stock > 0)
const produtosEmEstoque = inventory.filter(produto => produto.stock > 0);
console.log("\nProdutos em estoque:", produtosEmEstoque);

// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const eletronicosAcessiveis = inventory.filter(
  produto => produto.category === "Eletrônicos" && produto.price < 1000
);
console.log("\nEletrônicos com preço abaixo de R$1000:", eletronicosAcessiveis);

// d. Verificar se há algum produto sem estoque
const existeProdutoSemEstoque = inventory.some(produto => produto.stock === 0);
console.log("\nExiste produto sem estoque:", existeProdutoSemEstoque);

// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const todosTemReviews = inventory.every(produto => produto.reviews.length > 0);
console.log("\nTodos os produtos têm pelo menos uma avaliação:", todosTemReviews);

// f. Encontrar o índice do produto "Cafeteira"
const indiceCafeteira = inventory.findIndex(produto => produto.name === "Cafeteira");
console.log("\nÍndice da Cafeteira:", indiceCafeteira);

// g. Encontrar o primeiro produto da categoria "Vestuário"
const primeiroVestuario = inventory.find(produto => produto.category === "Vestuário");
console.log("\nPrimeiro produto da categoria 'Vestuário':", primeiroVestuario);

// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function buscarProdutosPorNome(termo) {
  return inventory.filter(produto =>
    produto.name.toLowerCase().includes(termo.toLowerCase())
  );
}

const resultadoBusca = buscarProdutosPorNome("ca");
console.log("\nResultado da busca por 'ca':", resultadoBusca);

// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
const inventarioComMedia = inventory.map(produto => {
  const soma = produto.reviews.reduce((acc, nota) => acc + nota, 0);
  const media = soma / produto.reviews.length;

  return {
    ...produto,
    averageRating: parseFloat(media.toFixed(2))
  };
});

console.log("\nProdutos com média de avaliação:");
inventarioComMedia.forEach(produto => {
  console.log(`${produto.name} - Média: ${produto.averageRating}`);
});

// j. Encontrar o produto com a maior média de avaliações
const produtoTop = inventarioComMedia.reduce((maior, atual) => {
  return atual.averageRating > maior.averageRating ? atual : maior;
});

console.log("\nProduto com a maior média de avaliações:", produtoTop);
