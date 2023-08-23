const videoInfoList = [];
const processedVideoIds = new Set(); // Conjunto para rastrear IDs de videos procesados

const videoTitleElements = document.querySelectorAll('[id="video-title"]');
videoTitleElements.forEach(element => {
  const ariaLabel = element.getAttribute('aria-label');

  if (ariaLabel && ariaLabel.toLowerCase().includes('resumen') && ariaLabel.toLowerCase().includes('laliga')) {
    const parentElement = element.closest('a'); // Obtener el elemento padre <a>
    const href = parentElement.getAttribute('href');
    const videoId = getVideoIdFromHref(href);

    if (videoId && !processedVideoIds.has(videoId)) { // Comprobar si el ID del video ya se ha procesado
      const labelText = extractLabelText(ariaLabel);
      const publicationDate = extractPublicationDate(ariaLabel);
      const videoInfo = {
        id: videoId,
        teams: labelText,
        "fecha-publicacion": publicationDate
      };
      videoInfoList.push(videoInfo);

      // Agregar el ID del video al conjunto de IDs procesados
      processedVideoIds.add(videoId);
    }
  }
});

console.log('Video Info List:', videoInfoList);

function getVideoIdFromHref(href) {
  const match = href.match(/(\?|&)v=([^&]+)/);
  return match ? match[2] : null;
}

function extractLabelText(ariaLabel) {
  const match = ariaLabel.match(/^(.*?)\s*\(/);
  return match ? match[1].trim() : null;
}

function extractPublicationDate(ariaLabel) {
  const match = ariaLabel.match(/DAZN ES(.*?)ago/);
  return match ? `${match[1].trim()} ago` : null;
}