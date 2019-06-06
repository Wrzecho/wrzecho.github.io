console.log("Trails Loaded!");
// rysowanie orbit za planetami (dla 1 planety)
const trailgeometry = new THREE.SphereGeometry(1.5, 5, 5);
const trailmaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const addtrail = (posvector, planettrace) => {
    let newtrace = new THREE.Mesh(trailgeometry, trailmaterial);
    newtrace.position.set(posvector.x, posvector.y, posvector.z);
    planettrace.add(newtrace);
};

const checktrailarraycapacity = (trailarray, maxsize) => {
    if (trailarray.children.length >= maxsize) {
        trailarray.children.shift();
    }
};

// usuwanie rysowanych orbit
const removetrail = trailarray => {
    trailarray.children = [];
};

const removealltrails = () => {
    removetrail(metr);
    removetrail(vetr);
    removetrail(eatr);
    removetrail(matr);
    removetrail(jutr);
    removetrail(satr);
    removetrail(urtr);
    removetrail(netr);
};

const hidealltrails = () => {
    hidetrail(metr);
    hidetrail(vetr);
    hidetrail(eatr);
    hidetrail(matr);
    hidetrail(jutr);
    hidetrail(satr);
    hidetrail(urtr);
    hidetrail(netr);
};

const showalltrails = () => {
    showtrail(metr);
    showtrail(vetr);
    showtrail(eatr);
    showtrail(matr);
    showtrail(jutr);
    showtrail(satr);
    showtrail(urtr);
    showtrail(netr);
}

const togglealltrails = element => {
    element.checked == true ? showalltrails() : hidealltrails();
};

const toggletrail = (trailarray, element) => {
    // console.log(element.checked);
    element.checked == true ? showtrail(trailarray) : hidetrail(trailarray);
};

const showtrail = trailarray => {
    trailarray.visible = true;
};
const hidetrail = trailarray => {
    trailarray.visible = false;
};

const asidebar = document.getElementById('')
