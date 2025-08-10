// Data Film
const videos = [
    {
        id: 1,
        title: "Film Pertama",
        description: "Deskripsi singkat film pertama.",
        thumbnail: "https://img.youtube.com/vi/eN04yzHQESc/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/eN04yzHQESc"
    },
    {
        id: 2,
        title: "Film Kedua",
        description: "Deskripsi singkat film kedua.",
        thumbnail: "https://img.youtube.com/vi/wt8R5jahzJo/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/wt8R5jahzJo"
    }
    // Tinggal tambah objek lagi untuk film ke-3, 4, dst.
];

// Generate Kartu Film
const videoGrid = document.getElementById('videoGrid');

videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <i class="fas fa-play play-icon"></i>
        </div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
        </div>
    `;

    videoCard.addEventListener('click', () => {
        openVideoModal(video);
    });

    videoGrid.appendChild(videoCard);
});

// Modal Player
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoPlayer = document.getElementById('videoPlayer');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

function openVideoModal(video) {
    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;
    videoPlayer.src = video.videoUrl;
    videoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoPlayer.src = '';
    document.body.style.overflow = 'auto';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
        videoPlayer.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Modal Support
const supportModal = document.getElementById('supportModal');
const supportBtn = document.getElementById('supportBtn');
const closeSupport = document.getElementById('closeSupport');

supportBtn.addEventListener('click', () => {
    supportModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeSupport.addEventListener('click', () => {
    supportModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

supportModal.addEventListener('click', (e) => {
    if (e.target === supportModal) {
        supportModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Tombol ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (videoModal.style.display === 'flex') {
            videoModal.style.display = 'none';
            videoPlayer.src = '';
        }
        if (supportModal.style.display === 'flex') {
            supportModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    }
});
