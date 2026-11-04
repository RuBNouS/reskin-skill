const tasks = [
	{ text: 'Write the project brief', done: false },
	{ text: 'Review pull requests', done: true },
	{ text: 'Plan the next sprint', done: false }
];
let filter = 'all';
const $ = (selector) => document.querySelector(selector);
const escape = (text) => text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function render() {
	const shown = tasks.filter((t) => filter === 'all' || (filter === 'done') === t.done);
	$('#list').innerHTML = shown
		.map((t) => `<li class="task${t.done ? ' done' : ''}" data-i="${tasks.indexOf(t)}"><button class="check" aria-label="Toggle"></button><span>${escape(t.text)}</span></li>`)
		.join('');
	$('#count').textContent = `${tasks.filter((t) => !t.done).length} left`;
	document.querySelectorAll('[data-filter]').forEach((b) => b.classList.toggle('active', b.dataset.filter === filter));
}

$('#add').addEventListener('submit', (event) => {
	event.preventDefault();
	const text = $('#new').value.trim();
	if (text) tasks.push({ text, done: false });
	$('#new').value = '';
	render();
});
$('#list').addEventListener('click', (event) => {
	const item = event.target.closest('.task');
	if (item) tasks[item.dataset.i].done = !tasks[item.dataset.i].done;
	render();
});
document.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => { filter = b.dataset.filter; render(); }));
render();
