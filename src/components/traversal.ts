import { Graph } from "./data2";

export const bfs = (data: Graph) => {
  let len = data.length;
  let visited = new Array(len).fill(false);
  let q = [0];

  while (q.length != 0) {
    let node = q.shift() as number;
    if (!visited[node]) {
      visited[node] = true;
      for (const nb of data[node]) {
        if (!visited[nb]) q.push(nb);
      }
    }
  }
};

export const dfs = (data: Graph) => {
  let len = data.length;
  let visited = new Array(len).fill(false);

  const traverse = (node: number) => {
    visited[node] = true;
    for (const nb of data[node]) {
      if (!visited[nb]) traverse(nb);
    }
  };
};
