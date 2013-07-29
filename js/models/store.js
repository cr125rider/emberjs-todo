Todos.Store = DS.Store.extend({
	adapter: 'Todos.LSAdapter',
	revision: 12
});

Todos.LSAdapter = DS.LSAdapter.extend({
	namespace: 'todo-emberjs'
})