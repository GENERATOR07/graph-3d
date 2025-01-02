import { useRef } from "react";
import { useEffect } from "react";
import ForceGraph3D, { ForceGraphMethods } from "react-force-graph-3d";

import { graphData } from "./data2";

export default function Graph() {
  const graphRef = useRef<ForceGraphMethods>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select a node

      const nodes = graphData.nodes;
      (nodes[0] as any).fx = 0; // X-coordinate
      (nodes[0] as any).fy = 50; // Y-coordinate
      (nodes[0] as any).fz = 0; // Z-coordinate
      nodes[0].color = "#38d9a9";
      const randomIndex = Math.floor(Math.random() * nodes.length);
      const randomNode = nodes[randomIndex];

      // Change the node color
      if (randomNode) {
        if (randomNode.id != 0) randomNode.color = Math.random() * 0xffffff; // Random color
        // The color is not changing because getNode() creates a new THREE.MeshBasicMaterial
        // with a fixed color (0x0077ff) each time, ignoring the node's color property
        graphRef.current?.refresh(); // Refresh alone won't update the color
      }
    }, 1000); // Change color every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (graphRef && graphRef.current) {
      const charge = graphRef.current.d3Force("charge");
      if (charge) charge.strength(-151);
    }
  }, []);

  return (
    <ForceGraph3D
      nodeColor={(node) => (node as any).color || 0x0077ff} // Use node's color property
      graphData={graphData}
      width={1100}
      linkWidth={2}
      ref={graphRef}
      nodeRelSize={15}
      nodeLabel={(node) => "Node" + node.id}
    />
  );
}
