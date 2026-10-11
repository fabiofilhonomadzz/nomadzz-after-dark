// Prévia visual (SÓ DESENVOLVIMENTO) do NOMADZZ Social Life — chamado em settings.ts apenas quando
// `import.meta.env.DEV` é verdadeiro. Isolado neste módulo à parte (em vez de um método da classe de
// Configurações) para que o bundler consiga remover o import inteiro do build de produção/Docker,
// não só deixá-lo inalcançável em tempo de execução.
//
// Não toca no Sim/Social/Office: nenhum agente, sessão, tarefa ou entrada de atividade é criada;
// é só leitura estática das falas já cadastradas em nomadzz-lines.ts.
import { NOMADZZ_PERSONAS } from '../../../shared/nomadzz-personas';
import { pick } from '../world/social/lines';
import { NOMADZZ_CHAT, NOMADZZ_GENERIC_CHAT } from '../world/social/nomadzz-lines';
import { h } from './dom';

export function buildNomadzzPreview(): HTMLElement {
  const out = h('div', { class: 'ui-set__hint', attrs: { 'aria-live': 'polite' } });
  const vars = { nome: 'um colega', sala: 'o projeto' };
  const roll = () => {
    const roles = Object.keys(NOMADZZ_CHAT);
    const role = roles[Math.floor(Math.random() * roles.length)];
    const persona = NOMADZZ_PERSONAS[role];
    const p1 = pick(NOMADZZ_CHAT[role], Math.random, vars);
    const p2 = pick(NOMADZZ_CHAT[role], Math.random, vars, p1);
    const g1 = pick(NOMADZZ_GENERIC_CHAT, Math.random, vars);
    const g2 = pick(NOMADZZ_GENERIC_CHAT, Math.random, vars, g1);
    out.replaceChildren(
      h('div', { class: 'ui-set__label', text: '🧪 Prévia fictícia — amostra de falas, não é uma conversa real' }),
      h('div', { text: `${persona?.name ?? role} (${role}):` }),
      h('div', { text: `“${p1}”` }),
      h('div', { text: `“${p2}”` }),
      h('div', { class: 'ui-set__label', text: 'Genérico (sem especialidade):' }),
      h('div', { text: `“${g1}”` }),
      h('div', { text: `“${g2}”` }),
    );
  };
  const btn = h('button', { class: 'ui-btn', type: 'button', text: 'Testar conversa NOMADZZ' });
  btn.addEventListener('click', roll);
  return h('div', { class: 'ui-set ui-set--stack' }, h('span', { class: 'ui-set__label', text: 'NOMADZZ Social Life — prévia (dev)' }), btn, out);
}
