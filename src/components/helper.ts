import { NodeObject } from "react-force-graph-3d";
import * as THREE from "three";

export const getNode = (node: NodeObject) => {
  const group = new THREE.Group();

  // Create a sphere for the node
  const sphereGeometry = new THREE.SphereGeometry(10, 16, 16);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  group.add(sphere);

  // Create a text sprite for the label
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(
        (() => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) return document.createElement("canvas"); // Return empty canvas instead of Texture
          canvas.width = 1024; // Increased canvas size
          canvas.height = 256; // Increased canvas size
          context.font = "120px Arial"; // Increased font size
          context.fillStyle = "#ffffff";
          context.textAlign = "center";
          context.fillText(
            node.id as string,
            canvas.width / 2,
            canvas.height / 2
          );
          return canvas;
        })()
      ),
    })
  );
  sprite.position.set(0, 0, 20); // Position above the node
  sprite.scale.set(60, 10, 1); // Increased scale
  group.add(sprite);

  return group;
};
