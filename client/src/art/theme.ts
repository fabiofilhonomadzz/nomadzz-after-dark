// Temas de sala (puros): identidade NOMADZZ AFTER DARK V1 — superfícies #171B26/#211532, roxo de
// destaque #9747FF, luz ambiente #6C4D91. Sementes consecutivas (slots vizinhos) recebem temas
// diferentes; a ordem da lista alterna tom de parede e matiz do acento para toda sala ficar escura
// (grafite/carvão/roxo profundo), com variedade suficiente para reconhecer salas vizinhas.
// Usam pattern 'plain'/'stripes'/'tiles' (não 'marble'/'wood_panel'): essas duas texturas misturam
// a cor base com um tom claro fixo e não escurecem o suficiente para o visual noturno (ver mesma
// observação em core.ts/CORE_WALLS).
import type { RoomTheme } from './api';

const THEMES: readonly RoomTheme[] = [
  { carpet: '#1b1a22', carpet2: '#15141c', wall: { base: '#171B26', trim: '#6C4D91', pattern: 'stripes' }, accent: '#9747FF', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#201a30', carpet2: '#1a1528', wall: { base: '#211532', trim: '#9747FF', pattern: 'plain' }, accent: '#B467FF', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#1e1b28', carpet2: '#18151f', wall: { base: '#1c1824', trim: '#8a6bd8', pattern: 'tiles' }, accent: '#7C5CFF', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#231a38', carpet2: '#1c1530', wall: { base: '#241530', trim: '#6C4D91', pattern: 'stripes' }, accent: '#C77DFF', deskVariant: 'onyx', chairVariant: 'onyx' },
  // AI CORE: variante quase preta (perto do fundo #080911 da identidade) — ar de área de
  // servidores, onde as telas e o fio roxo são o único contraste.
  { carpet: '#121119', carpet2: '#0d0c13', wall: { base: '#0f0e16', trim: '#9747FF', pattern: 'plain' }, accent: '#9747FF', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#1a1826', carpet2: '#14121e', wall: { base: '#19172a', trim: '#B467FF', pattern: 'tiles' }, accent: '#8A5CF6', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#1c1730', carpet2: '#16121f', wall: { base: '#1d1430', trim: '#caa6ff', pattern: 'stripes' }, accent: '#A86BFF', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#17141e', carpet2: '#110f18', wall: { base: '#15131f', trim: '#6C4D91', pattern: 'plain' }, accent: '#6C4D91', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#1f1a2c', carpet2: '#19151f', wall: { base: '#201a2e', trim: '#9747FF', pattern: 'tiles' }, accent: '#9458E6', deskVariant: 'onyx', chairVariant: 'onyx' },
  { carpet: '#22192e', carpet2: '#1c1526', wall: { base: '#241c34', trim: '#7C5CFF', pattern: 'stripes' }, accent: '#B98BFF', deskVariant: 'onyx', chairVariant: 'onyx' },
];

export const THEME_COUNT = THEMES.length;

export function roomTheme(seed: number): RoomTheme {
  const n = THEMES.length;
  const t = THEMES[((Math.floor(seed) % n) + n) % n];
  return { ...t, wall: { ...t.wall } };
}
