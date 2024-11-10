// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefaInput');
    const prioridadeSelect = document.getElementById('prioridadeSelect');
    const listaTarefas = document.getElementById('listaTarefas');
    
    // Pega o valor do campo de texto e da prioridade
    const tarefa = tarefaInput.value.trim();
    const prioridade = prioridadeSelect.value;
  
    // Se a tarefa estiver vazia, não faz nada
    if (tarefa === '') return;
  
    // Cria um novo item da lista (li)
    const li = document.createElement('li');
    li.classList.add(prioridade);
  
    // Cria um elemento span para o texto da tarefa
    const span = document.createElement('span');
    span.textContent = tarefa;
    li.appendChild(span);
  
    // Botão para marcar a tarefa como concluída
    const concluirBtn = document.createElement('button');
    concluirBtn.textContent = '✅';
    concluirBtn.classList.add('concluir');
    concluirBtn.onclick = () => span.classList.toggle('concluida');
    li.appendChild(concluirBtn);
  
    // Botão para remover a tarefa
    const removerBtn = document.createElement('button');
    removerBtn.textContent = '❌';
    removerBtn.classList.add('remover');
    removerBtn.onclick = () => listaTarefas.removeChild(li);
    li.appendChild(removerBtn);
  
    // Adiciona a nova tarefa à lista
    listaTarefas.appendChild(li);
  
    // Limpa o campo de entrada
    tarefaInput.value = '';
  }
  
  // Função para limpar todas as tarefas
  function limparTodasTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';
  }