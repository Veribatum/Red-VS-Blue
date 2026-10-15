# Verification — first Season 1 implementation

## Checks performed

- `npm test`: eight automated test groups pass.
- The campaign simulation completes all 56 objectives across 19 chapters through required interactions or physics. Scenes advance through dialogue; suppressed actors are struck by actual projectiles; the final throw uses the grenade simulation.
- Tests cover first appearances, major story-state transitions, possession checkpoints, CPR, repair progress, pause freezing, jumping, reloads, fast projectile collision and retry after a missed grenade.
- A mocked DOM / canvas integration test boots the application, opens a chapter, moves the player using keyboard events, pauses, resumes and returns to the campaign menu.
- `npm run check`: syntax checks for the browser entry point, simulation, renderer and audio module pass.
- The actual Canvas renderer was exercised using a native canvas implementation with decoded SVG assets, and a world capture was visually inspected. This is renderer QA, not browser QA.
- SVG files are parsed as XML, local asset references exist, and character sheets contain twelve frames each.

## What these checks do not establish

This environment has no available browser for a real rendered playthrough. Automated tests use the actual simulation with a mocked DOM and canvas; they do not prove visual polish, perceived fun, browser audio behavior, real iPhone multitouch or controller compatibility on hardware. Those require manual playtesting. Story tests verify the implemented transitions, not the fidelity of every individual joke to the show.

## Manual playtest priorities

1. Play episodes 4–8 continuously: errand, escape, suppression and tank controls.
2. Play episodes 14–16: possession, CPR and pink armor transition.
3. Try several final throws in episode 19 and retry after a miss.
4. Check landscape and portrait touch layouts, FIRE drag aiming, simultaneous movement and jump, and pointer cancellation after switching tabs.
5. Verify music starts after Play, sound can mute, and optional computer speech is clearly understood as a placeholder.
6. Assess scenery, character scale, conversation pacing and whether each objective is interesting enough to keep.
