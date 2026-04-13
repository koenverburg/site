'use client'

import {useState} from 'react'
import {
  blips,
  RING_COLORS,
  RING_LABELS,
  QUADRANT_LABELS,
  type Blip,
  type Quadrant,
  type Ring,
} from './radar.data'

const SIZE    = 560
const CX      = SIZE / 2
const CY      = SIZE / 2

const RING_RADII: Record<Ring, {inner: number; outer: number}> = {
  adopt:  {inner: 0,   outer: 65},
  trial:  {inner: 65,  outer: 130},
  assess: {inner: 130, outer: 200},
  hold:   {inner: 200, outer: 265},
}

// Quadrant angle ranges in degrees (SVG: 0°=right, clockwise)
const QUADRANT_ANGLES: Record<Quadrant, [number, number]> = {
  techniques: [270, 360],
  languages:  [0,   90],
  platforms:  [90,  180],
  tools:      [180, 270],
}

// Quadrant label positions (outside the hold ring)
const QUADRANT_LABEL_POS: Record<Quadrant, {x: number; y: number; anchor: string}> = {
  techniques: {x: CX + 175, y: CY - 175, anchor: 'start'},
  languages:  {x: CX + 175, y: CY + 185, anchor: 'start'},
  platforms:  {x: CX - 175, y: CY + 185, anchor: 'end'},
  tools:      {x: CX - 175, y: CY - 175, anchor: 'end'},
}

function seededRand(seed: number) {
  let s = Math.abs(seed)
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fff_ffff
    return s / 0x7fff_ffff
  }
}

function nameHash(name: string): number {
  return name.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 7)
}

function getBlipPos(blip: Blip): {x: number; y: number} {
  const rand = seededRand(nameHash(blip.name))
  const [startDeg, endDeg] = QUADRANT_ANGLES[blip.quadrant]
  const {inner, outer}     = RING_RADII[blip.ring]

  const pad      = 0.15
  const angleDeg = startDeg + (rand() * (1 - 2 * pad) + pad) * (endDeg - startDeg)
  const angleRad = (angleDeg * Math.PI) / 180

  const minR   = Math.max(inner + (outer - inner) * 0.15, 10)
  const maxR   = outer - (outer - inner) * 0.15
  const radius = minR + rand() * (maxR - minR)

  return {
    x: CX + radius * Math.cos(angleRad),
    y: CY + radius * Math.sin(angleRad),
  }
}

const RING_ORDER: Ring[]         = ['adopt', 'trial', 'assess', 'hold']
const QUADRANT_ORDER: Quadrant[] = ['techniques', 'languages', 'platforms', 'tools']

const blipPositions = blips.map((b) => ({blip: b, ...getBlipPos(b)}))

export function RadarChart() {
  const [activeQuadrant, setActiveQuadrant] = useState<Quadrant | null>(null)
  const [activeRing,     setActiveRing]     = useState<Ring | null>(null)
  const [selected,       setSelected]       = useState<Blip | null>(null)

  function isActive(blip: Blip) {
    if (activeQuadrant && blip.quadrant !== activeQuadrant) return false
    if (activeRing && blip.ring !== activeRing) return false
    return true
  }

  return (
    <div className="space-y-8">
      {/* Quadrant filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          {QUADRANT_ORDER.map((q) => (
            <button
              key={q}
              onClick={() => setActiveQuadrant(activeQuadrant === q ? null : q)}
              className={[
                'text-xs px-3 py-1 rounded-full border transition-colors',
                activeQuadrant === q
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground',
              ].join(' ')}
            >
              {QUADRANT_LABELS[q]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {RING_ORDER.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRing(activeRing === r ? null : r)}
              className={[
                'text-xs px-3 py-1 rounded-full border transition-colors',
                activeRing === r
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground',
              ].join(' ')}
              style={activeRing === r ? {} : {borderColor: RING_COLORS[r] + '66'}}
            >
              <span style={{color: RING_COLORS[r]}} className="mr-1">●</span>
              {RING_LABELS[r]}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Radar */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="w-full max-w-[560px] mx-auto block"
        aria-label="Tech Radar"
      >
        {/* Ring fills (outside-in) */}
        {RING_ORDER.slice().reverse().map((ring) => (
          <circle
            key={ring}
            cx={CX}
            cy={CY}
            r={RING_RADII[ring].outer}
            fill={RING_COLORS[ring]}
            fillOpacity={0.04}
            stroke={RING_COLORS[ring]}
            strokeOpacity={0.3}
            strokeWidth={1}
          />
        ))}

        {/* Quadrant dividers */}
        <line x1={CX} y1={CY - 265} x2={CX} y2={CY + 265} stroke="currentColor" strokeOpacity={0.15} strokeWidth={1} />
        <line x1={CX - 265} y1={CY} x2={CX + 265} y2={CY} stroke="currentColor" strokeOpacity={0.15} strokeWidth={1} />

        {/* Ring labels (along the right axis) */}
        {RING_ORDER.map((ring) => {
          const {inner, outer} = RING_RADII[ring]
          const labelR = inner + (outer - inner) / 2
          return (
            <text
              key={ring}
              x={CX + labelR}
              y={CY - 4}
              textAnchor="middle"
              fontSize={9}
              fill="currentColor"
              fillOpacity={0.35}
              className="select-none"
            >
              {RING_LABELS[ring]}
            </text>
          )
        })}

        {/* Quadrant labels */}
        {QUADRANT_ORDER.map((q) => {
          const {x, y, anchor} = QUADRANT_LABEL_POS[q]
          const isAct = !activeQuadrant || activeQuadrant === q
          return (
            <text
              key={q}
              x={x}
              y={y}
              textAnchor={anchor as 'start' | 'end'}
              fontSize={11}
              fill="currentColor"
              fillOpacity={isAct ? 0.6 : 0.2}
              className="select-none transition-all"
            >
              {QUADRANT_LABELS[q]}
            </text>
          )
        })}

        {/* Blips */}
        {blipPositions.map(({blip, x, y}) => {
          const active  = isActive(blip)
          const isSelected = selected?.name === blip.name
          return (
            <g
              key={blip.name}
              onClick={() => setSelected(isSelected ? null : blip)}
              className="cursor-pointer"
              style={{opacity: active ? 1 : 0.1, transition: 'opacity 0.2s'}}
            >
              <circle
                cx={x}
                cy={y}
                r={isSelected ? 8 : 6}
                fill={RING_COLORS[blip.ring]}
                fillOpacity={isSelected ? 1 : 0.85}
                stroke={isSelected ? 'currentColor' : 'none'}
                strokeWidth={1.5}
              />
              {blip.isNew && (
                <circle cx={x + 5} cy={y - 5} r={3} fill="#f97316" />
              )}
              <title>{blip.name}{blip.description ? ` — ${blip.description}` : ''}</title>
            </g>
          )
        })}
      </svg>

      {/* Selected blip detail */}
      {selected && (
        <div className="border border-border rounded-md p-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{selected.name}</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{backgroundColor: RING_COLORS[selected.ring] + '22', color: RING_COLORS[selected.ring]}}
            >
              {RING_LABELS[selected.ring]}
            </span>
            <span className="text-xs text-muted-foreground">{QUADRANT_LABELS[selected.quadrant]}</span>
            {selected.isNew && <span className="text-xs text-orange-500">new</span>}
          </div>
          {selected.description && (
            <p className="text-sm text-muted-foreground">{selected.description}</p>
          )}
        </div>
      )}

      {/* Blip listing by quadrant */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
        {QUADRANT_ORDER.filter((q) => !activeQuadrant || activeQuadrant === q).map((q) => (
          <div key={q}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              {QUADRANT_LABELS[q]}
            </p>
            <div className="space-y-3">
              {RING_ORDER.map((ring) => {
                const items = blips.filter(
                  (b) => b.quadrant === q && b.ring === ring && (!activeRing || activeRing === ring),
                )
                if (items.length === 0) return null
                return (
                  <div key={ring}>
                    <p className="text-xs" style={{color: RING_COLORS[ring]}}>{RING_LABELS[ring]}</p>
                    <ul className="mt-1 space-y-1">
                      {items.map((blip) => (
                        <li
                          key={blip.name}
                          className="flex items-center gap-1.5 cursor-pointer group"
                          onClick={() => setSelected(selected?.name === blip.name ? null : blip)}
                        >
                          <span className="text-sm group-hover:text-primary transition-colors">
                            {blip.name}
                          </span>
                          {blip.isNew && <span className="text-xs text-orange-500">new</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
