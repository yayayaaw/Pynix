// Video data
const videos = [
    {
        id: 1,
        title: "Petualangan Luar Angkasa",
        description: "Mengikuti perjalanan luar angkasa yang menakjubkan dengan visual spektakuler dan cerita yang mendalam tentang eksplorasi manusia di alam semesta.",
        thumbnail: "https://via.placeholder.com/400x225.png?text=Petualangan+Luar+Angkasa", // Ganti dengan URL gambar thumbnail yang sesuai
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Ganti dengan URL embed video YouTube yang sesuai
    },
    {
        id: 2,
        title: "Misteri Hutan Gelap",
        description: "Thriller misteri yang berlatar di hutan terpencil dengan twist yang tidak terduga dan karakter yang kompleks dalam pencarian kebenaran.",
        thumbnail: "https://via.placeholder.com/400x225.png?text=Misteri+Hutan+Gelap",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
    },
    {
        id: 3,
        title: "Cinta di Musim Semi",
        description: "Kisah romantis yang menghangatkan hati tentang cinta yang tumbuh di tengah tantangan kehidupan dan perbedaan latar belakang.",
        thumbnail: "https://via.placeholder.com/400x225.png?text=Cinta+di+Musim+Semi",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Pahlawan Terakhir",
        description: "Aksi epik tentang seorang pahlawan yang harus menyelamatkan dunia dari kehancuran dengan mengorbankan segalanya demi masa depan umat manusia.",
        thumbnail: "https://via.placeholder.com/400x225.png?text=Pahlawan+Terakhir",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "Komedi Keluarga",
        description: "Komedi lucu dan menghibur yang menggambarkan kehidupan keluarga biasa dengan situasi absurd dan karakter yang penuh warna.",
        thumbnail: "https://via.placeholder.com/400x225.png?text=Komedi+Keluarga",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

// Generate video cards
const videoGrid = document.getElementById('videoGrid');
        
videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title} Thumbnail">
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

// Modal functions
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

// Support modal functions
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

// Close modals with Escape key
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
