
const loadHomeTab = (homeImgURL) => {
    
    const infoDiv = document.querySelector(".infoDiv");
    
    if (infoDiv.children.length > 0 ) {
        
        let removedElement = infoDiv.firstChild;
        infoDiv.removeChild(removedElement);
            
        const homeTabDiv = document.createElement("div");
        homeTabDiv.classList.add("homeTabDiv");
    
        const restaurantNameDiv = document.createElement("div");
        restaurantNameDiv.classList.add("rnDiv");
    
        const restaurantName = document.createElement("h1");
        restaurantName.innerText = "The Martian Dining Club";
        restaurantName.classList.add("rn");
    
        const mdcImage = new Image(400, 400);
        mdcImage.classList.add("homeIMG");
        mdcImage.src = homeImgURL;
    
        const restaurantCopyDiv = document.createElement("div");
        restaurantCopyDiv.classList.add("rcDiv");
    
        const restaurantCopy = document.createElement("p");
        restaurantCopy.classList.add("rc");
        restaurantCopy.innerText = "The Martian Dining Club is the finest restaurant in the Solar System. Our ingredients are procured from the most advanced farm laboratories on the planet."
    
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hoursDiv");
        const hours = document.createElement("p");
        hours.classList.add("hours");
        hours.innerText = `
        Hours:
    
        Monday-Friday: 1700 MT - 2200MT
        Saturday: 1800 MT - 2300MT`
    
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("locationDiv");
        const location = document.createElement("p");
        location.classList.add("location");
        location.innerText = "Location: Drake's Cavern, Olypmus Mons";
    
        infoDiv.appendChild(homeTabDiv);
        homeTabDiv.appendChild(mdcImage);
        homeTabDiv.appendChild(restaurantNameDiv);
        restaurantNameDiv.appendChild(restaurantName);
        homeTabDiv.appendChild(restaurantCopyDiv);
        restaurantCopyDiv.appendChild(restaurantCopy);
        restaurantCopyDiv.appendChild(hoursDiv);
        hoursDiv.appendChild(hours);
        restaurantCopyDiv.appendChild(locationDiv);
        locationDiv.appendChild(location);

    } else {
        
        const homeTabDiv = document.createElement("div");
        homeTabDiv.classList.add("homeTabDiv");
    
        const restaurantNameDiv = document.createElement("div");
        restaurantNameDiv.classList.add("rnDiv");
    
        const restaurantName = document.createElement("h1");
        restaurantName.innerText = "The Martian Dining Club";
        restaurantName.classList.add("rn");
    
        const mdcImage = new Image(400, 400);
        mdcImage.classList.add("homeIMG");
        mdcImage.src = homeImgURL;
    
        const restaurantCopyDiv = document.createElement("div");
        restaurantCopyDiv.classList.add("rcDiv");
    
        const restaurantCopy = document.createElement("p");
        restaurantCopy.classList.add("rc");
        restaurantCopy.innerText = "The Martian Dining Club is the finest restaurant in the Solar System. Our ingredients are procured from the most advanced farm laboratories on the planet."
    
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hoursDiv");
        const hours = document.createElement("p");
        hours.classList.add("hours");
        hours.innerText = `
        Hours:
    
        Monday-Friday: 1700 MT - 2200MT
        Saturday: 1800 MT - 2300MT`
    
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("locationDiv");
        const location = document.createElement("p");
        location.classList.add("location");
        location.innerText = "Location: Drake's Cavern, Olypmus Mons";
    
        infoDiv.appendChild(homeTabDiv);
        homeTabDiv.appendChild(mdcImage);
        homeTabDiv.appendChild(restaurantNameDiv);
        restaurantNameDiv.appendChild(restaurantName);
        homeTabDiv.appendChild(restaurantCopyDiv);
        restaurantCopyDiv.appendChild(restaurantCopy);
        restaurantCopyDiv.appendChild(hoursDiv);
        hoursDiv.appendChild(hours);
        restaurantCopyDiv.appendChild(locationDiv);
        locationDiv.appendChild(location);
    
    }

}




export default loadHomeTab;