import React, { useId } from 'react';
import { Project } from './projectsData';

interface ArchitectureDiagramProps {
  diagram: Project['diagram'];
  className?: string;
}

const W = 800;
const STAGE_TOP = 18;
const STAGE_BOTTOM = 196;
const NODE_GAP = 10;
const nodeHeight = (sub?: string) => (sub ? 46 : 34);

// Draws stages left to right with arrows between them
const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ diagram, className }) => {
  const markerId = `arrow-${useId().replace(/:/g, '')}`;
  const { stages, footer } = diagram;
  const H = footer ? 262 : 222;
  const colW = W / stages.length;
  const boxW = Math.min(colW - 38, 160);
  const cy = (STAGE_TOP + STAGE_BOTTOM) / 2;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Architecture diagram"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#9ca3af" />
        </marker>
      </defs>

      {stages.slice(0, -1).map((_, i) => {
        const x1 = colW * (i + 0.5) + boxW / 2 + 6;
        const x2 = colW * (i + 1.5) - boxW / 2 - 8;
        return (
          <line
            key={`arrow-${i}`}
            x1={x1}
            y1={cy}
            x2={x2}
            y2={cy}
            stroke="#9ca3af"
            strokeWidth={2}
            markerEnd={`url(#${markerId})`}
          />
        );
      })}

      {stages.map((stage, i) => {
        const cx = colW * (i + 0.5);
        const total =
          stage.nodes.reduce((sum, n) => sum + nodeHeight(n.sub), 0) + NODE_GAP * (stage.nodes.length - 1);
        let y = cy - total / 2;
        const grouped = stage.nodes.length > 1;

        return (
          <g key={`stage-${i}`}>
            {grouped && (
              <rect
                x={cx - boxW / 2 - 6}
                y={y - 6}
                width={boxW + 12}
                height={total + 12}
                rx={10}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeDasharray="4 4"
              />
            )}
            {stage.nodes.map((node, j) => {
              const h = nodeHeight(node.sub);
              const top = y;
              y += h + NODE_GAP;
              return (
                <g key={`node-${j}`}>
                  <rect
                    x={cx - boxW / 2}
                    y={top}
                    width={boxW}
                    height={h}
                    rx={7}
                    fill={node.color}
                    fillOpacity={0.2}
                    stroke={node.color}
                    strokeWidth={1.5}
                  />
                  <text
                    x={cx}
                    y={top + (node.sub ? 19 : 22)}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={14}
                    fontWeight={700}
                  >
                    {node.label}
                  </text>
                  {node.sub && (
                    <text x={cx} y={top + 36} textAnchor="middle" fill="#cbd5e1" fontSize={11}>
                      {node.sub}
                    </text>
                  )}
                </g>
              );
            })}
            {stage.caption && (
              <text
                x={cx}
                y={cy + total / 2 + (grouped ? 24 : 20)}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize={11}
                fontStyle="italic"
              >
                {stage.caption}
              </text>
            )}
          </g>
        );
      })}

      {footer && (
        <g>
          <rect x={24} y={H - 46} width={W - 48} height={30} rx={6} fill="#7b42bc" fillOpacity={0.18} stroke="#7b42bc" />
          <text x={W / 2} y={H - 26} textAnchor="middle" fill="#e9d5ff" fontSize={12} fontWeight={600}>
            {footer}
          </text>
        </g>
      )}
    </svg>
  );
};

export default ArchitectureDiagram;
