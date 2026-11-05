const TAGS = ['work', 'personal', 'urgent', 'ideas', 'health', 'study'];
const tasks = [
	{ text: 'Write the project brief', tag: 'work', done: false },
	{ text: 'Review pull requests', tag: 'urgent', done: true },
	{ text: 'Plan the next sprint', tag: 'work', done: false },
	{ text: 'Book a dentist visit', tag: 'health', done: false },
	{ text: 'Read the Rust chapter', tag: 'study', done: false },
	{ text: 'Sketch the landing page', tag: 'ideas', done: true }
];
let filter = 'all';
const $ = (selector) => document.querySelector(selector);
const escape = (text) => text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

$('#tag').innerHTML = TAGS.map((t) => `<option>${t}</option>`).join('');

function render() {
	const shown = tasks.filter((t) => filter === 'all' || (filter === 'done') === t.done);
	$('#list').innerHTML = shown
		.map((t) => `<li class="task${t.done ? ' done' : ''}" data-i="${tasks.indexOf(t)}"><button class="check" aria-label="Toggle"></button><span class="text">${escape(t.text)}</span><span class="tag tag-${t.tag}">${t.tag}</span><button class="del" aria-label="Delete">&times;</button></li>`)
		.join('');
	$('#count').textContent = `${tasks.filter((t) => !t.done).length} left`;
	document.querySelectorAll('[data-filter]').forEach((b) => b.classList.toggle('active', b.dataset.filter === filter));
}

$('#add').addEventListener('submit', (event) => {
	event.preventDefault();
	const text = $('#new').value.trim();
	if (text) tasks.push({ text, tag: $('#tag').value, done: false });
	$('#new').value = '';
	render();
});
$('#list').addEventListener('click', (event) => {
	const item = event.target.closest('.task');
	if (!item) return;
	const i = item.dataset.i;
	if (event.target.closest('.del')) tasks.splice(i, 1);
	else tasks[i].done = !tasks[i].done;
	render();
});
$('#clear').addEventListener('click', () => {
	for (let i = tasks.length - 1; i >= 0; i--) if (tasks[i].done) tasks.splice(i, 1);
	render();
});
document.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => { filter = b.dataset.filter; render(); }));
render();
