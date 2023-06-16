const fs = require('fs');

// Get the filename from script arguments
const filename = process.argv[2];


// Define the Liquid content
const content = `<div>
  Section
</div>

{% schema %}
  {
    "name": "Section",
    "tag": "section",
    "settings": [],
    "blocks": [],
    "presets": []  
  }
{% endschema %}`;

// Write the content to the file
fs.writeFile(`./sections/${filename}.liquid`, content, (err) => {
  if (err) throw err;
  console.log(`${filename}.liquid created successfully!`);
});