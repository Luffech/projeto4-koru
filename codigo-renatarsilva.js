// DESAFIO PARA OS ALUNOS (Exercício 1):

// a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)
function addIsAdultProperty(person) {
  return { ...person, isAdult: person.age >= 18 };
}
const personWithAdultStatus = addIsAdultProperty(person);
console.log("Pessoa com status de adulto:", personWithAdultStatus);

// b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)
function combineArrays(...arrays) {
  return [].concat(...arrays);
}
const combinedArray = combineArrays(fruits, moreFruits, [
  "morango",
  "maracuja",
]);
console.log("Arrays combinados:", combinedArray);

// DESAFIO PARA OS ALUNOS (Exercício 2):

// a. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto
const formattedProducts = products.map(
  (product) => `${product.name} - ${product.category}`
);
console.log("\nProdutos formatados:", formattedProducts);

// b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
const pricesWithTax = products.map((product) => product.price * 1.15);
console.log("\nPreços com imposto:", pricesWithTax);

// c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
let totalValue = 0;
products.forEach((product) => {
  totalValue += product.price;
});
console.log("\nValor total de todos os produtos:", totalValue);

// DESAFIO PARA OS ALUNOS (Exercício 3):

// a. Use filter para encontrar estudantes inativos
const inactiveStudents = students.filter((student) => !student.active);
console.log("\nEstudantes inativos:", inactiveStudents);

// b. Use find para encontrar o estudante com id = 3
const studentId3 = students.find((student) => student.id === 3);
console.log("Estudante com ID 3:", studentId3);

// c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
const studentsWithLowGrades = students.filter((student) =>
  student.grades.some((grade) => grade < 70)
);
console.log(
  "Estudantes com pelo menos uma nota abaixo de 70:",
  studentsWithLowGrades
);

// d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85
const namesOfHighAverageStudents = students
  .filter((student) => {
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    return average > 85;
  })
  .map((student) => student.name);
console.log(
  "Nomes dos estudantes com média acima de 85:",
  namesOfHighAverageStudents
);

// DESAFIO PARA OS ALUNOS (Exercício 4):

// a. Use findIndex para encontrar a posição da primeira tarefa incompleta
const firstIncompleteTaskIndex = tasks.findIndex((task) => !task.completed);
console.log(
  "\nÍndice da primeira tarefa incompleta:",
  firstIncompleteTaskIndex
);

// b. Use some para verificar se existe alguma tarefa de baixa prioridade completa
const hasCompletedLowPriorityTask = tasks.some(
  (task) => task.priority === "baixa" && task.completed
);
console.log(
  "Existe alguma tarefa de baixa prioridade completa:",
  hasCompletedLowPriorityTask
);

// c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityTasksIncomplete = tasks.every(
  (task) => !(task.priority === "alta" && task.completed)
);
console.log(
  "Todas as tarefas de alta prioridade estão incompletas:",
  allHighPriorityTasksIncomplete
);

// d. Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)
const taskId10Index = tasks.findIndex((task) => task.id === 10);
console.log("Índice da tarefa com ID 10:", taskId10Index);

// DESAFIO PARA OS ALUNOS (Exercício 5 - E-commerce):

// Imagine que você está criando um sistema para uma loja online.

// Use os métodos de array para implementar as seguintes funcionalidades:

// a. Mostrar uma lista formatada de todos os produtos usando forEach
console.log("\n--- Lista de Produtos ---");
inventory.forEach((product) => {
  console.log(
    `${product.name} (R$${product.price}) - ${product.category} - Estoque: ${product.stock}`
  );
});

// b. Filtrar produtos que estão em estoque (stock > 0)
const productsInStock = inventory.filter((product) => product.stock > 0);
console.log("\nProdutos em estoque:", productsInStock);

// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const electronicProductsUnder1000 = inventory.filter(
  (product) => product.category === "Eletrônicos" && product.price < 1000
);
console.log("\nEletrônicos com preço < R$1000:", electronicProductsUnder1000);

// d. Verificar se há algum produto sem estoque
const hasOutOfStockProduct = inventory.some((product) => product.stock === 0);
console.log("\nExiste algum produto sem estoque?", hasOutOfStockProduct);

// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const allProductsHaveReviews = inventory.every(
  (product) => product.reviews && product.reviews.length > 0
);
console.log(
  "Todos os produtos têm pelo menos uma avaliação?",
  allProductsHaveReviews
);

// f. Encontrar o índice do produto "Cafeteira"
const coffeeMakerIndex = inventory.findIndex(
  (product) => product.name === "Cafeteira"
);
console.log("\nÍndice da Cafeteira:", coffeeMakerIndex);

// g. Encontrar o primeiro produto da categoria "Vestuário"
const firstApparelProduct = inventory.find(
  (product) => product.category === "Vestuário"
);
console.log("\nPrimeiro produto de Vestuário:", firstApparelProduct);

// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function searchProducts(searchTerm) {
  return inventory.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
console.log("\nProdutos que contêm 'phone':", searchProducts("phone"));

// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
const productsWithAverageRating = inventory.map((product) => {
  const totalReviews = product.reviews.reduce((sum, review) => sum + review, 0);
  const averageRating =
    product.reviews.length > 0 ? totalReviews / product.reviews.length : 0;
  return { ...product, averageRating: parseFloat(averageRating.toFixed(2)) };
});
console.log("\nProdutos com média de avaliações:", productsWithAverageRating);

// j. Encontrar o produto com a maior média de avaliações
const productWithHighestRating = productsWithAverageRating.reduce(
  (prev, current) => {
    return prev.averageRating > current.averageRating ? prev : current;
  }
);
console.log(
  "\nProduto com a maior média de avaliações:",
  productWithHighestRating
);
