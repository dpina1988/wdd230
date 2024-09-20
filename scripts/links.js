const linksURL = 'https://herbertmoroni.github.io/wdd230/data/links.json';

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Error fetching the links:', error);
  }
}

function displayLinks(lessons) {
  const linksContainer = document.querySelector('#linksContainer'); 
  linksContainer.innerHTML = ''; 

  lessons.forEach(lesson => {
    const lessonNumber = lesson.lesson.toString().padStart(2, '0');

    const linksText = lesson.links.map(link => `<a href="${link.url}" target="_blank">${link.title}</a>`).join(' | ');
    
    const lessonElement = document.createElement('p');
    lessonElement.innerHTML = `${lessonNumber}: ${linksText}`;

    linksContainer.appendChild(lessonElement);
  });
}

getLinks();
