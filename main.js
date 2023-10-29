fetch('your-api-endpoint')
    .then(response => response.json())
    .then(data => {
        const episodesSection = document.getElementById('episodes');
        data.episodes.forEach(episode => {
            const episodeElement = document.createElement('div');
            episodeElement.innerHTML = `
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
                <audio controls>
                    <source src="${episode.audio_url}" type="audio/mpeg">
                </audio>
            `;
            episodesSection.appendChild(episodeElement);
        });
    })
    .catch(error => console.error('Error fetching episodes:', error));
