 

    // 1. Grab the button element by its ID
    const toggleButton = document.getElementById('info-toggle');
    
    // 2. Grab the info element you want to hide/show
    // (Replace 'info' with the actual ID of your content element)
    const infoElement = document.getElementById('info'); 

    // 3. Add the click event listener
    toggleButton.addEventListener('click', () => {
        // Uses the Bitwise XOR assignment operator ( ^= ) to toggle between 0 and 1
        infoElement.hidden ^= 1;
    });

       