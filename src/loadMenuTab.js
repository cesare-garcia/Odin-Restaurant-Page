const loadMenuTab = (infoDiv, menupic1, menupic2, menupic3, menupic4, menupic5) => {

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");

    const menuHeadingDiv = document.createElement("div");

    const menuHeading = document.createElement("h1");
    menuHeading.innerText = "Menu";

    const menuHeadingP = document.createElement("p");
    menuHeadingP.innerText = "We change our menu every week. All guests are served the same dishes in a course designed by our head chef.";

    const meal1div = document.createElement("div");
    meal1div.classList.add("mealdiv")

    const meal1pic = new Image(200, 200);
    meal1pic.src = menupic1;

    const meal1desc = document.createElement("p");
    meal1desc.innerText = `Martian Crab Strand Wrap
    
    A delicacy of the terraformed Hellas Sea, the Martian Crab Strand blends a rich, savory flavor with the spice of the month. Along with the juicy
    crimson tomatoes of Underhill, this is a fantastically delicious starter for the evening paired with champagne from the vineyards at Acheron.`;

    const meal2div = document.createElement("div");
    meal2div.classList.add("mealdiv")

    const meal2pic = new Image(200, 200);
    meal2pic.src = menupic2;

    const meal2desc = document.createElement("p");
    meal2desc.innerText = `Layered Martian Fish Cake With Asparagus And Cherry Tomatoes
    
    This dish uses a fine pastry base and layers the finest salmon, tuna, red snapper, and halibut slices on top of it.
    A light orange glaze is then poured over it to contrast with the savory flavor of the fish and pastry.
    The asparagus are grilled and drizzled lightly with balsamic vinegar.`;

    const meal3div = document.createElement("div");
    meal3div.classList.add("mealdiv")

    const meal3pic = new Image(200, 200);
    meal3pic.src = menupic3;

    const meal3desc = document.createElement("p");
    meal3desc.innerText = `Martian Burger With Roasted Martian Potatoes
    
    This dish is a play on a traditional Martian favorite. The Martian Burger differs from traditional burgers in that it has only a top bun.
    The ground beef is grilled and seasonsed with Red Martian paprika. The potatoes have been roasted with a uniquely engineered Martian potato-strain
    that is used primarily in the southern hemisphere of the planet.`;

    const meal4div = document.createElement("div");
    meal4div.classList.add("mealdiv")

    const meal4pic = new Image(200, 200);
    meal4pic.src = menupic4;

    const meal4desc = document.createElement("p");
    meal4desc.innerText = `Martian Mango Yoghurt Pastry
    
    A favorite dessert not only of Mars, but of many orbital habitats around the system, this pastry is carefully baked and placed atop a crisp sugar cookie base.
    It is then filled with mango yoghurt made with dairy from Martian cattle of the Wisconsin-Wagyu combined strain. Cranberries and dried figs give the pastry additional zest.`;

    const meal5div = document.createElement("div");
    meal5div.classList.add("mealdiv")

    const meal5pic = new Image(200, 200);
    meal5pic.src = menupic5;

    const meal5desc = document.createElement("p");
    meal5desc.innerText = `Martian Sweet And Savory Finishing Plate
    
    This dish combines many of our favorite sweet and savory dishes for a final bonanza of flavor. Here we have Martian strawberry gelatin with Martian sugar cream,
    boiled Martian chicken eggs, miniature sweet asparagus, and Martian spice nuts.`;

    infoDiv.appendChild(menuDiv);

    menuDiv.appendChild(menuHeadingDiv);
    menuHeadingDiv.appendChild(menuHeading);
    menuHeadingDiv.appendChild(menuHeadingP);

    menuDiv.appendChild(meal1div);
    meal1div.appendChild(meal1pic);
    meal1div.appendChild(meal1desc);

    menuDiv.appendChild(meal2div);
    meal2div.appendChild(meal2pic);
    meal2div.appendChild(meal2desc);

    menuDiv.appendChild(meal3div);
    meal3div.appendChild(meal3pic);
    meal3div.appendChild(meal3desc);

    menuDiv.appendChild(meal4div);
    meal4div.appendChild(meal4pic);
    meal4div.appendChild(meal4desc);

    menuDiv.appendChild(meal5div);
    meal5div.appendChild(meal5pic);
    meal5div.appendChild(meal5desc);

}

export default loadMenuTab;