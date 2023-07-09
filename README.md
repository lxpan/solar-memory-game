# solar-memory-game

A space-themed memory game, where the goal is to score points by clicking on 'unseen' cards. Do your best to avoid clicking on the same card more than once!

![My Image](src/assets/images/app-screenshot.png)

# Description

## What it does

This is a solar system themed memory card game, created to allow users' to test their memory. The goal is to identify the 'unseen' cards each round, such that no card is clicked more than once. The current score is tracked with the highest score updated at the end of each game.

## Technologies used

### Packages:

-   react
-   @react-three/fiber
-   @react-three/drei

**React** is used as our frontend framework to reduce development time and due to the abundance of community support and resources available on the internet.

**react-three** is a React renderer for Threejs, which we use as a programming interface to create 3D animations. In this case, we are animating the rotation of planets within the memory cards.

## Challenges faced

### Animating the planets

The primary challenge involved the task rendering the 3D planet model files from NASA and animating them so that the planets are rotating across a consistent axis.

In order to render and interact with the 3D models, we use interface of `react-three` to create a scene using React's component semantics:

```
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
```

The `<canvas>` is where we begin to define the scene. Throughout the above, we have made use of passing in properties via objects (e.g., `camera={cameraProps}`, which allows custom camera settings).

The key 'component' here is that of `<OrbitControls>`, which allows panning, rotating and zooming within a scene. In order to keep track of when a planet model should be rotating, we create the React state variables `isHover` & `isClicked`:

```
export default function Card(props) {
    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    ...

    return (
        <div
            className="card"
            id={cardName}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={(evt) => clickEvents(evt)}
        >
        <Canvas>
        </Canvas>
    )
}
```

These state variable are mutated using the React attributes `onMouseEnter` and `onMouseLeave` defined within the `<div>` and within `clickEvents()` for `isClicked`.

Returning back to the `OrbitalControls` 'component', we pass in the following properties:

```
const orbitalProps =
        isHover || isClicked ? { ref, autoRotate: true } : { ref, autoRotate: false };

<Canvas>
    ...
    <OrbitalControls={orbitalProps}>
</Canvas>
```

In the above, we have a ternary statement that sets `autoRotate` to true whenever `isHover` or `isClicked` is true. This property causes the scene to automatically rotate around a target, which give the effect of a planet model rotating.

## Future considerations

Given additional time, there are opportunities to add additional features or modes to the game. Some of these might include:

-   Varying the number of cards as a method to control the difficulty of the game
-   Adding in moons that belong to the various planets
-   Adding in planets or stars that are found outside our solar system
-   As a more educational feature -- displaying an outlay for planet info whenever the user clicks on a card:
    -   distance from the sun
    -   radius
    -   number of moons
    -   year discovered

# How to install & run the project

NB: this app requires that `npm` (Node Package Manager) is installed on your system.

To run this app locally:

1. Clone the repo to your local machine
2. Navigate to the directory: `cd memory-game`
3. Run `npm install` to install the node packages
4. Run `npm start` to run the web server locally

# Attribution

-   3D planet models from [NASA](https://solarsystem.nasa.gov/resources/)
-   Background image by [Jeremy Thomas](https://unsplash.com/@jeremythomasphoto) on [Unsplash](https://unsplash.com/photos/E0AHdsENmDg)
