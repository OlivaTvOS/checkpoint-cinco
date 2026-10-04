# Lava Lento

Projeto do Checkpoint 5 de Front-end Design Engineering, turma 1TDSPI.

## Integrantes

| Nome | RM |
| --- | --- |
| Artur da Silva de Oliveira | 569870 |

Repositório no GitHub: https://github.com/OlivaTvOS/checkpoint-cinco

Antes de entregar, adicione a foto de Artur em `public/imagens` e preencha o campo `foto` em `src/pages/Sobre.tsx`.

## Como executar

Com Node.js compatível com Vite 8 instalado:

```bash
npm ci
npm run dev
```

Abra o endereço mostrado no terminal. Para conferir o projeto:

```bash
npm run build
npm run lint
```

## Páginas

- Home: apresentação do lava-rápido, serviços e depoimentos ilustrativos.
- Agendamentos: formulário com cliente, modelo, placa e lavagem; criação e exclusão de tíquetes.
- Sobre: apresentação e identificação dos integrantes.

O cabeçalho mostra a quantidade de carros aguardando. A lista fica no contexto e é compartilhada pelas páginas. Trocar de página pelo menu mantém os agendamentos; recarregar ou fechar a página limpa a lista. Não há banco de dados.

## Organização

- `src/main.tsx`: `createBrowserRouter`, `RouterProvider` e rotas filhas, conforme a apostila 23.
- `src/App.tsx`: cabeçalho, `Outlet`, rodapé e provider do contexto.
- `src/context/LavagemContext.ts`: `createContext`, `createElement` e `useState`, seguindo o exemplo da apostila 23.
- `src/components`: formulário, tíquete, depoimentos, cabeçalho e rodapé.
- `src/pages`: Home, Agendamentos e Sobre.
- `src/types/types.ts`: tipo dos dados das lavagens.

Estilização com classes do Tailwind CSS. Ícones do React Icons, apresentado na apostila 20. Cadastro e exclusão usam estado, eventos, props, `map` e `filter`, como no exercício de tarefas. A apostila 19 não estava no ZIP recebido; o modelo de rotas foi conferido na página 5 da apostila 23.

## Imagens

A fotografia principal veio da pasta `mid` do projeto original no Drive. As duas fotos dos depoimentos são ilustrativas, do Unsplash:

- https://images.unsplash.com/photo-1494976388531-d1058494cdd8
- https://images.unsplash.com/photo-1503376780353-7e6692767b70

Os depoimentos são fictícios para a demonstração acadêmica.

## Histórico

O primeiro commit preserva a base recuperada do Drive. Os demais registram as etapas reais de recuperação e implementação, sem alteração artificial de datas. O histórico antigo perdido não foi recuperado.
