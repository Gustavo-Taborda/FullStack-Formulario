# Formulário de Notas — FullStack (UTFPR)

GitHub para atividade de desenvolvimento de Formulários para a Disciplina de FullStack da UTFPR.

> Este README foi gerado com o apoio de uma IA (Claude, da Anthropic).

## Sobre o projeto

Aplicação simples em HTML, CSS e JavaScript que recebe o nome e as 4 notas de um aluno, calcula a média automaticamente enquanto o usuário digita, e ao final exibe em uma segunda página o resultado do aluno (Aprovado, Exame ou Reprovado).

## Funcionalidades

- Formulário com campo de nome e 4 campos de nota (0 a 10).
- Cálculo da média em tempo real, atualizado a cada nota digitada.
- Validação nativa (`required`) que impede o envio do formulário enquanto algum campo estiver vazio.
- Ao clicar em **"Registrar resultado"**, os dados são salvos no `localStorage` e o usuário é redirecionado para a página de resultado.
- Página de resultado exibe o nome, a média e o status final do aluno:
  - **APROVADO** — média maior que 6
  - **EXAME** — média entre 2 e 5,9
  - **REPROVADO** — média menor que 2

## Estrutura do projeto

```
├── Form.html      # Página do formulário
├── result.html    # Página de resultado
├── Script.js      # Lógica de cálculo, eventos e navegação
├── style.css       # Estilos compartilhados entre as duas páginas
└── README.md
```

## Como executar

1. Baixe/clone os arquivos deste repositório mantendo todos na mesma pasta.
2. Abra o arquivo `Form.html` no navegador.
3. Preencha o nome e as 4 notas.
4. Clique em **"Registrar resultado"** para ver o resultado na página seguinte.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (puro, sem frameworks)

## Disciplina

Atividade desenvolvida para a disciplina de **FullStack**, curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** — UTFPR.
