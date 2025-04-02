// Get all the accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-button')

// Loop through each button
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the active class on the clicked button
    button.classList.toggle('active')

    // Get the associated accordion content
    const content = button.nextElementSibling

    // Check if the content is currently displayed
    if (content.style.display === 'block') {
      content.style.display = 'none' // Hide the content
    } else {
      content.style.display = 'block' // Show the content
    }
  })
})

// Optional: Add interactive flip functionality when clicked, if needed
const cards = document.querySelectorAll('.card')

// Uncomment this block to enable clicking to flip cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped')
  })
})
