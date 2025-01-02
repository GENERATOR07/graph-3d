export type Graph = number[][];

export const complexAdjacencyListGraph: Graph = [
  [1, 2, 3],
  [0, 4, 5],
  [0, 6],
  [0, 7],
  [1, 9],
  [1, 10],
  [2, 11],
  [3, 12],
  [13],
  [4],
  [5],
  [6],
  [7],
  [8],
];

type Link = {
  source: number;
  target: number;
};
type Node = {
  id: number;
  color?: string | number;
};

type ForceGraphData = {
  nodes: Node[];
  links: Link[];
};

const transformGraphData = (adjacencyList: Graph): ForceGraphData => {
  const nodes = adjacencyList.map((_, index) => ({ id: index }));
  const links: Link[] = [];

  adjacencyList.forEach((neighbors, source) => {
    neighbors.forEach((target) => {
      if (
        !links.some(
          (link) =>
            (link.source === target && link.target === source) ||
            (link.source === source && link.target === target)
        )
      ) {
        links.push({ source, target });
      }
    });
  });

  return { nodes, links };
};

export const graphData = transformGraphData(complexAdjacencyListGraph);
export default transformGraphData;
