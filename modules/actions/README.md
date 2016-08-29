# [Redux Actions e Action Creators](http://redux.js.org/docs/basics/Actions.html)

## Actions
_Actions_ são objetos javascript que são enviados da applicação para o _store_.

```javascript
{
  type: 'ADD_TODO',
  text: 'Qualquer coisa.'
}
```

Todo _action_ deve ter uma propriedade chamada _type_. O _type_ da ação definirá
qual ação deve ser executada. Todos as outras propriedade deve ser definidas
por você.

## Action Creators

_Action creators_ são funções que retornam uma _action_. Isso permite que você
utilize os parametros passados para o _action creator_ para definir as
propriedades da _action_.

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}
```
