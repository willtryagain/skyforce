function init() {
    console.log("Using thee ver" + THREE.REVISION)
}

const loader = new GLTFLoader();
loader.load( './star.glb', function ( gltf ) {

    let model = gltf.scene;
    model.rotation.y = 0.5 * Math.PI;
    model.rotation.x = 0.5 * Math.PI;

    model.rotation.y = 0.5 * Math.PI;
    model.name = 'star';
    scene.add( model );
    // console.log

    }, undefined, function ( error ) {

    console.error( error );

    } );
