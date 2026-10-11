// Fonte única da identidade fixa dos agentes de projeto da NOMADZZ (equipe "NOMADZZ AFTER DARK").
// O slug (chave) é o subagent_type usado para disparar o agente — o mesmo `name:` do frontmatter em
// ~/.claude/agents/*.md — nunca alterado por este arquivo nem lido daquele.
//
// Dois consumidores:
//   - server/model/personas.ts: nome fixo do personagem (em vez de um nome sorteado do pool comum).
//   - client/src/world/social/nomadzz-lines.ts: de quem é a voz nas conversas ambientais (NOMADZZ
//     Social Life).
import type { PersonName } from './names';

export const NOMADZZ_PERSONAS: Readonly<Record<string, PersonName>> = {
  'branding-director': { name: 'Dante', look: 'm' },
  'creative-designer': { name: 'Maya', look: 'f' },
  'lp-developer': { name: 'Noah', look: 'm' },
  'saas-developer': { name: 'Elian', look: 'm' },
  copywriter: { name: 'Lívia', look: 'f' },
  'meta-ads-analyst': { name: 'Caio', look: 'm' },
  'whatsapp-assistant': { name: 'Alma', look: 'f' },
  'automation-engineer': { name: 'Ravi', look: 'm' },
  'quality-reviewer': { name: 'Vera', look: 'f' },
  'product-strategist': { name: 'Theo', look: 'm' },
};
