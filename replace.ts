import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(/text-blue-900/g, 'text-slate-900');
content = content.replace(/bg-blue-900\/70/g, 'bg-slate-900\/80');
content = content.replace(/bg-blue-900/g, 'bg-slate-900');
content = content.replace(/selection:bg-blue-900/g, 'selection:bg-emerald-500');
content = content.replace(/text-blue-500/g, 'text-emerald-500');
content = content.replace(/text-blue-600/g, 'text-emerald-600');
content = content.replace(/bg-blue-600/g, 'bg-emerald-600');
content = content.replace(/hover:bg-blue-700/g, 'hover:bg-emerald-700');
content = content.replace(/hover:text-blue-500/g, 'hover:text-emerald-500');
content = content.replace(/hover:text-blue-800/g, 'hover:text-emerald-800');
content = content.replace(/bg-blue-50/g, 'bg-emerald-50');
content = content.replace(/text-blue-400/g, 'text-emerald-400');
content = content.replace(/text-blue-300/g, 'text-emerald-300');
content = content.replace(/bg-blue-100/g, 'bg-emerald-100');
content = content.replace(/ring-blue-600/g, 'ring-emerald-600');
content = content.replace(/hover:bg-blue-600/g, 'hover:bg-emerald-600');

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced colors successfully.');
