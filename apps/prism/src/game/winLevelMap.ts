import { SECOND } from 'constants-shared/time';

// The `alias` values MUST match the strings emitted by the math book's
// `winLevel` field — see math-sdk `game_config.get_win_level()` and PRD-01 §3.8:
//   none | small | big | mega | epic | legendary | max
// The book emits `winLevel` as one of these strings, so it is resolved with
// `stateGameDerived.getWinLevelDataByWinLevelAlias(bookEvent.winLevel)` rather
// than by numeric index. The numeric keys below are kept only to satisfy the
// upstream `createGetWinLevelDataByWinLevelAlias` helper (which iterates values).
export const winLevelMap = {
	1: {
		level: 1,
		alias: 'none',
		type: 'small',
		text: null,
		presentDuration: 0,
		sound: { sfx: undefined, bgm: undefined },
		animation: undefined,
	},
	2: {
		level: 2,
		alias: 'small',
		type: 'small',
		text: null,
		presentDuration: 1 * SECOND,
		sound: { sfx: 'sfx_winlevel_small', bgm: undefined },
		animation: undefined,
	},
	3: {
		level: 3,
		alias: 'big',
		type: 'big',
		text: 'BIG WIN',
		presentDuration: 6 * SECOND,
		sound: { sfx: undefined, bgm: 'bgm_winlevel_big' },
		animation: { intro: 'big_win_intro', idle: 'big_win_idle', outro: 'big_win_exit' },
	},
	4: {
		level: 4,
		alias: 'mega',
		type: 'big',
		text: 'MEGA WIN',
		presentDuration: 20 * SECOND,
		sound: { sfx: undefined, bgm: 'bgm_winlevel_mega' },
		animation: { intro: 'mega_win_intro', idle: 'mega_win_idle', outro: 'mega_win_exit' },
	},
	5: {
		level: 5,
		alias: 'epic',
		type: 'big',
		text: 'EPIC WIN!',
		presentDuration: 26 * SECOND,
		sound: { sfx: undefined, bgm: 'bgm_winlevel_epic' },
		animation: { intro: 'epic_win_intro', idle: 'epic_win_idle', outro: 'epic_win_exit' },
	},
	6: {
		level: 6,
		alias: 'legendary',
		type: 'big',
		text: 'LEGENDARY WIN!',
		presentDuration: 30 * SECOND,
		sound: { sfx: undefined, bgm: 'bgm_winlevel_superwin' },
		animation: { intro: 'super_win_intro', idle: 'super_win_idle', outro: 'super_win_exit' },
	},
	7: {
		level: 7,
		alias: 'max',
		type: 'big',
		text: 'MAX WIN',
		presentDuration: 32 * SECOND,
		sound: { sfx: undefined, bgm: 'bgm_winlevel_max' },
		animation: { intro: 'max_win_intro', idle: 'max_win_idle', outro: 'max_win_exit' },
	},
} as const;

export type WinLevelMap = typeof winLevelMap;
export type WinLevel = keyof typeof winLevelMap;
export type WinLevelData = WinLevelMap[WinLevel];
export type WinLevelAlias = WinLevelData['alias'];
