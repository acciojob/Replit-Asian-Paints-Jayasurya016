//your JS code here. If required.
function showMessage(title, message) {
            const modal = document.getElementById('message-modal');
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-message').innerText = message;
            modal.classList.remove('hidden');
        }

        const modalOkBtn = document.getElementById('modal-ok-btn');
        modalOkBtn.onclick = () => {
            document.getElementById('message-modal').classList.add('hidden');
        };

        const gridContainer = document.getElementById('grid-container');
        const blockIdInput = document.getElementById('block_id');
        const colorIdInput = document.getElementById('colour_id');
        const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('Reset');

        // Generate the 3x3 grid dynamically
        for (let i = 1; i <= 9; i++) {
            const gridItem = document.createElement('div');
            // Using ID as a number as per "the third element of grid have the id 3" instruction.
            gridItem.id = i.toString(); 
            // Using class for shared styling as per "the item should have an id of grid-item" instruction.
            gridItem.className = 'grid-item bg-gray-100 aspect-square';
            gridItem.innerText = i;
            gridContainer.appendChild(gridItem);
        }

        changeButton.addEventListener('click', () => {
            const blockId = blockIdInput.value;
            const colorId = colorIdInput.value;

            // Simple validation
            if (!blockId || !colorId) {
                showMessage('Error', 'Please enter both a Grid ID and a color.');
                return;
            }

            const gridItem = document.getElementById(blockId);
            if (!gridItem) {
                showMessage('Error', 'Invalid Grid ID. Please enter a number between 1 and 9.');
                return;
            }

            // Reset background color of all grid items to transparent
            const allGridItems = document.querySelectorAll('.grid-item');
            allGridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
                item.style.color = '#4a5568'; // Reset text color
            });

            // Set the new color for the selected grid item
            gridItem.style.backgroundColor = colorId;
            gridItem.style.color = '#ffffff'; // Change text to white for better contrast
        });

        resetButton.addEventListener('click', () => {
            const allGridItems = document.querySelectorAll('.grid-item');
            allGridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
                item.style.color = '#4a5568';
            });
            blockIdInput.value = '';
            colorIdInput.value = '';
        });

        // Add a click event listener to each grid item to populate the input field
        gridContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('grid-item')) {
                blockIdInput.value = e.target.id;
            }
        });
