import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
    OrbitControls, OrthographicCamera, Stage, useGLTF,
} from '@react-three/drei';
import '../styles/Card.css';

// planet model imports
import mercuryModel from '../assets/models/mercury.glb';
import venusModel from '../assets/models/venus.glb';
import earthModel from '../assets/models/earth.glb';
import moonModel from '../assets/models/moon.glb';
import marsModel from '../assets/models/mars.glb';
import jupiterModel from '../assets/models/jupiter.glb';
import saturnModel from '../assets/models/saturn.glb';
import uranusModel from '../assets/models/uranus.glb';
import neptuneModel from '../assets/models/neptune.glb';
import plutoModel from '../assets/models/pluto.glb';

const modelMap = {
    mercury: {
        model: mercuryModel,
    },
    venus: {
        model: venusModel,
    },
    earth: {
        model: earthModel,
    },
    moon: {
        model: moonModel,
    },
    mars: {
        model: marsModel,
    },
    jupiter: {
        model: jupiterModel,
    },
    saturn: {
        model: saturnModel,
    },
    uranus: {
        model: uranusModel,
    },
    neptune: {
        model: neptuneModel,
    },
    pluto: {
        model: plutoModel,
    },
};

Object.values(modelMap).forEach((planet) => {
    useGLTF.preload(planet.model);
});

function Model(props) {
    const { planetName } = props;
    const { nodes, materials } = useGLTF(modelMap[planetName].model);

    function getMesh(planetName) {
        switch (planetName) {
            case 'mercury':
                return (
                    <mesh
                        geometry={nodes.Cube008.geometry}
                        material={materials['Default OBJ.005']}
                    />
                );

            case 'venus':
                return (
                    <mesh
                        geometry={nodes.cylindrically_mapped_sphereMesh.geometry}
                        material={materials['Default OBJ']}
                    />
                );

            case 'earth':
                return (
                    <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
                );

            case 'moon':
                return (
                    <mesh
                        geometry={nodes.Cube008.geometry}
                        material={materials['Default OBJ.005']}
                    />
                );

            case 'mars':
                return (
                    <mesh
                        geometry={nodes.Cube008.geometry}
                        material={materials['Default OBJ.005']}
                    />
                );

            case 'jupiter':
                return <mesh geometry={nodes.cubemap.geometry} material={materials.None} />;

            case 'saturn':
                return (
                    <>
                        <mesh geometry={nodes.RingsTop.geometry} material={materials.SaturnRings} />
                        <mesh
                            geometry={nodes.RingsBottom.geometry}
                            material={materials.SaturnRings}
                        />
                        <mesh geometry={nodes.Saturn001.geometry} material={materials.None} />
                    </>
                );

            case 'uranus':
                return (
                    <mesh
                        geometry={nodes.Uranus.geometry}
                        material={materials['Default OBJ.001']}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                );

            case 'neptune':
                return (
                    <mesh
                        geometry={nodes.Neptune.geometry}
                        material={materials['Default OBJ.001']}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                );

            case 'pluto':
                return (
                    <mesh
                        geometry={nodes.cylindrically_mapped_sphere.geometry}
                        material={materials['Default OBJ.001']}
                    />
                );

            default:
                break;
        }
    }

    return (
        <group {...props} dispose={null}>
            {getMesh(planetName)}
        </group>
    );
}

export default function Card(props) {
    const { cardName } = props;
    const ref = useRef();

    const [isHover, setIsHover] = useState(false);

    const orbitalProps = isHover ? { ref, autoRotate: true } : { ref, autoRotate: false };
    const cameraProps =
        cardName === 'saturn' ? { fov: 50, position: [0, 15, 30], zoom: 1.05 } : { fov: 50 };

    return (
        <div
            className="card"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="card-title">{cardName[0].toUpperCase() + cardName.substring(1)}</div>

            <Canvas shadows dpr={[1, 2]} camera={cameraProps}>
                <Suspense fallback={null}>
                    <Stage
                        controls={ref}
                        preset="rembrandt"
                        intensity={1}
                        shadows={false}
                        environment="city"
                    >
                        <Model planetName={cardName} />
                    </Stage>
                </Suspense>
                <OrbitControls {...orbitalProps} />
            </Canvas>
        </div>
    );
}
