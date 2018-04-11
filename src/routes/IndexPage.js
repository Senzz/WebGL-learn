import React from 'react';
import { connect } from 'dva';

const THREE = window.THREE;
class IndexPage extends React.Component {
  componentDidMount() {
    
    var scene = new THREE.Scene();  // 场景

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // 透视相机

    var renderer = new THREE.WebGLRenderer();  // 渲染器

    renderer.setSize(window.innerWidth, window.innerHeight);   // 渲染器大小

    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.CubeGeometry(1, 1, 2);
    var material = new THREE.MeshBasicMaterial({ color: '#fff' });
    var cube = new THREE.Mesh(geometry, material); scene.add(cube);
    camera.position.z = 5;
    function render() {
      requestAnimationFrame(render);
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
    }
    render();
  }
  render() {
    return (
      <div></div>
    )
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
