// Function to apply the language to the page
function applyLanguage(language) {
  document.querySelectorAll('[data-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });
  document.querySelectorAll('[placeholder]').forEach(element => {
    const placeholderText = element.getAttribute(`data-${language}`);
    if (placeholderText) {
      element.setAttribute('placeholder', placeholderText);
    }
  });
}

// Event listener for language selection change
document.getElementById('languageSelect').addEventListener('change', function() {
  const language = this.value;
  localStorage.setItem('language', language); // Save the selected language to localStorage
  applyLanguage(language); // Apply the selected language
});

// Check localStorage for saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language') || 'en'; // Default to 'en' if no language is saved
  document.getElementById('languageSelect').value = savedLanguage; // Set the select value to the saved language
  applyLanguage(savedLanguage); // Apply the saved language
});