import { useState } from 'react';

function Image() {
    const [coverImage, setCoverImage] = useState(null);
    const [images, setImages] = useState([]);
    const [albumTitle, setAlbumTitle] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('albumTitle', albumTitle);
        if (coverImage) {
            data.append('coverImage', coverImage);
        }

        images.forEach((image) => {
            data.append('images', image);
        });

        const response = await fetch('http://localhost:3000/upload-album', {
            method: 'post',
            body: data,
        });

        const result = await response.json();
        console.log(result);
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Upload Album</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Album Title:</label>
                    <input
                        type="text"
                        value={albumTitle}
                        onChange={(e) => setAlbumTitle(e.target.value)}
                        style={{ display: 'block', marginTop: '5px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Cover Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCoverImage(e.target.files[0])}
                        style={{ display: 'block', marginTop: '5px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>More Images:</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => setImages(Array.from(e.target.files))}
                        style={{ display: 'block', marginTop: '5px', marginBottom: '10px' }}
                    />
                </div>

                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Image;