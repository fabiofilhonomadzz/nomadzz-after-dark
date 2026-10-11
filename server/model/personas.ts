// Identidade fixa dos agentes de projeto da NOMADZZ: quando uma subagente nasce com um dos
// subagent_type abaixo (o "role" que o Claude Code grava no transcript), ela aparece no escritório
// com o nome da persona em vez de um nome sorteado do pool comum (shared/names.ts). Só a aparência
// muda (nome do personagem + gênero do sprite); o arquivo em ~/.claude/agents, o prompt e o id
// técnico da subagente continuam intactos — o Habblaud nunca lê esses arquivos.
import type { PersonName } from '../../shared/names';

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

/**
 * Nome de persona NOMADZZ para `role`, sem colidir com `used` (mesmo sufixo numérico do sorteio
 * comum: "Dante 2", "Dante 3"... para quando duas do mesmo tipo rodam ao mesmo tempo, ou o nome já
 * estiver em uso por outro personagem). `undefined` se `role` não for uma das personas fixas.
 */
export function personaNameFor(role: string | undefined, used: ReadonlySet<string>): PersonName | undefined {
  if (!role) return undefined;
  const base = NOMADZZ_PERSONAS[role];
  if (!base) return undefined;
  if (!used.has(base.name)) return base;
  for (let k = 2; ; k++) {
    const name = `${base.name} ${k}`;
    if (!used.has(name)) return { name, look: base.look };
  }
}
